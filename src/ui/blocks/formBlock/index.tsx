'use client'
import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import Message from '@/ui/components/message'
import { cn } from '@/lib/utils'
import sanityClient from '@/lib/sanity/client'
import { useEffect, useState } from 'react'
import { stegaClean } from '@sanity/client/stega'
import buttonStyles from '@/ui/components/button/button.module.scss'
import styles from './form.module.scss'

type FormMessageType = 'error' | 'success'

interface FormMessage {
    type: FormMessageType
    content: string
    show: boolean
}

export default function FormBlock({ formReference, wrapIt = true }) {
    const { title, description, submitButtonText } = formReference
    let { fields } = formReference
    const [form, setForm] = useState(null)
    const [formData, setFormData] = useState({})
    const [formMessage, setFormMessage] = useState<FormMessage>({
        type: 'error',
        content: '',
        show: false,
    })
    const formId = formReference._id

    const cleanObject = (obj) => {
        const newObj = {}
        Object.keys(obj).forEach((key) => {
            newObj[key] = stegaClean(obj[key])
        })
        return newObj
    }
    const cleanArray = (arr) => {
        return arr.map((item) => cleanObject(item))
    }
    fields = cleanArray(fields)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "form" && _id == $formId]`, { formId })
            .then((data) => {
                setForm(data[0])
                // Initialize formData with default values
                const initialFormData = {}

                data[0].fields.forEach((field) => {
                    initialFormData[field.name.current] =
                        field.defaultValue || ''
                })

                setFormData(initialFormData)
            })
    }, [formId])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formattedData = Object.entries(formData).map(([key, value]) => ({
            _type: 'object',
            _key: key,
            key,
            value: String(value),
        }))

        const data = {
            id: formId,
            title: stegaClean(title),
            formData: formattedData,
            form: {
                _type: 'reference',
                _ref: formId,
            },
        }

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()

            setFormMessage({
                type: 'success',
                content: result.message,
                show: true,
            })
        } catch (error) {
            setFormMessage({
                type: 'error',
                content: `Error submitting form ${error.message}`,
                show: true,
            })
        }
    }

    if (!form) {
        return <p>Loading...</p>
    }

    return (
        <Wrap wrapIt={wrapIt}>
            <form
                className={cn(styles.form)}
                onSubmit={handleSubmit}>
                <h2 className='text-3xl bold'>{title}</h2>
                <Text content={description} />
                {fields.map((field, index) => {
                    switch (field._type) {
                        case 'inputField':
                            return (
                                <div
                                    key={index}
                                    className='flex gap-4 items-center'>
                                    <label className={styles.label}>
                                        {field.label}
                                        {field.required && '*'}
                                    </label>
                                    <input
                                        type={field.inputType}
                                        className={styles.input}
                                        name={field.name.current}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        onChange={handleChange}
                                        value={
                                            formData[field.name.current] || ''
                                        }
                                    />
                                </div>
                            )
                        case 'textareaField':
                            return (
                                <div key={index}>
                                    <label className={styles.label}>
                                        {field.label}
                                    </label>
                                    <textarea
                                        name={field.name.current}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        onChange={handleChange}
                                        value={
                                            formData[field.name.current] || ''
                                        }></textarea>
                                </div>
                            )
                        case 'checkboxField':
                            return (
                                <div key={index}>
                                    <label className='flex gap-4'>
                                        <input
                                            type='checkbox'
                                            name={field.name.current}
                                            required={field.required}
                                            onChange={handleChange}
                                            checked={
                                                formData[field.name.current] ||
                                                false
                                            }
                                        />
                                        {stegaClean(field.label)}
                                    </label>
                                </div>
                            )
                        case 'radioField':
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-4'>
                                    <label className={styles.label}>
                                        {field.label}
                                    </label>
                                    <div className='flex gap-4'>
                                        {field.options.map(
                                            (option, optionIndex) => (
                                                <label
                                                    className='flex gap-2'
                                                    key={optionIndex}>
                                                    <input
                                                        type='radio'
                                                        name={
                                                            field.name.current
                                                        }
                                                        value={stegaClean(
                                                            option,
                                                        )}
                                                        required={
                                                            field.required
                                                        }
                                                        onChange={handleChange}
                                                        checked={
                                                            formData[
                                                                field.name
                                                                    .current
                                                            ] === option
                                                        }
                                                    />
                                                    {option}
                                                </label>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )
                        case 'selectField':
                            return (
                                <div
                                    key={index}
                                    className='flex  gap-4'>
                                    <label className={styles.label}>
                                        {field.label}
                                    </label>
                                    <select
                                        title='Select an option'
                                        name={field.name.current}
                                        required={field.required}
                                        onChange={handleChange}
                                        value={
                                            formData[field.name.current] || ''
                                        }>
                                        {field.options.map(
                                            (option, optionIndex) => (
                                                <option
                                                    key={optionIndex}
                                                    value={stegaClean(option)}>
                                                    {option}
                                                </option>
                                            ),
                                        )}
                                    </select>
                                </div>
                            )
                        default:
                            return null
                    }
                })}
                <div>
                    <button
                        type='submit'
                        className={cn(buttonStyles.button)}>
                        {submitButtonText ?? 'Submit'}
                    </button>
                </div>
            </form>
            {formMessage.show && (
                <Message
                    type={formMessage.type}
                    content={formMessage.content}
                />
            )}
        </Wrap>
    )
}
