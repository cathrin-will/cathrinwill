'use client'
import { useEffect, useState } from 'react'

// sanity
import sanityClient from '@/lib/sanity/client'
import { stegaClean } from '@sanity/client/stega'

// ui
import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import Message from '@/ui/components/message'

// utils
import { cn } from '@/lib/utils'
import { getErrorMessage } from '@/lib/utils/errorHandler/errorhandler'

// styles
import buttonStyles from '@/ui/components/button/button.module.scss'
import styles from './form.module.scss'

export default function FormBlock({
    formReference,
    wrapIt = true,
}: Sanity.FormBlock) {
    const { title, description, submitButtonText } = formReference

    const [form, setForm] = useState(null)
    const [formData, setFormData] = useState<{ [key: string]: string }>({})
    const [formMessage, setFormMessage] = useState<Sanity.FormMessage>({
        type: 'error',
        content: '',
        show: false,
    })
    const formId = formReference._id

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "form" && _id == $formId]`, { formId })
            .then((data) => {
                setForm(data[0])
                // Initialize formData with default values
                const initialFormData: { [key: string]: string } = {}

                data[0].fields.forEach(
                    (field: {
                        name: { current: string }
                        defaultValue: string | null
                    }) => {
                        initialFormData[field.name.current] =
                            field.defaultValue || ''
                    },
                )

                setFormData(initialFormData)
            })
    }, [formId])

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value, type } = e.target

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setFormData((prevData: { [key: string]: string }) => ({
                ...prevData,
                [name]: checked ? value : '',
            }))
        } else {
            setFormData((prevData: { [key: string]: string }) => ({
                ...prevData,
                [name]: value,
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
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
                content: `Error submitting form: ${getErrorMessage(error)}`,
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
                {formReference.fields.map((field: Sanity.FormField, index) => {
                    const name = stegaClean(field.name.current)
                    const placeholder = stegaClean(field.placeholder)
                    switch (field._type) {
                        case 'inputField':
                            return (
                                <div
                                    key={index}
                                    className='flex gap-4 items-center'>
                                    <label
                                        className={styles.label}
                                        htmlFor={name}>
                                        {field.label}
                                        {field.required && '*'}
                                    </label>
                                    <input
                                        type={field.inputType}
                                        className={styles.input}
                                        id={name}
                                        name={name}
                                        placeholder={placeholder}
                                        required={field.required}
                                        onChange={handleChange}
                                        value={formData[name || '']}
                                    />
                                </div>
                            )
                        case 'textareaField':
                            return (
                                <div key={index}>
                                    <label
                                        className={styles.label}
                                        htmlFor={name}>
                                        {field.label}
                                    </label>
                                    <textarea
                                        id={name}
                                        name={name}
                                        placeholder={placeholder}
                                        required={field.required}
                                        onChange={handleChange}
                                        value={formData[name] || ''}></textarea>
                                </div>
                            )
                        case 'checkboxField':
                            return (
                                <div key={index}>
                                    <label
                                        className='flex gap-4'
                                        htmlFor={name}>
                                        <input
                                            id={name}
                                            name={name}
                                            type='checkbox'
                                            required={field.required}
                                            onChange={handleChange}
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
                                    <span className={styles.label}>
                                        {field.label}
                                    </span>
                                    <div className='flex gap-4'>
                                        {field.options?.map(
                                            (option, optionIndex) => (
                                                <label
                                                    className='flex gap-2'
                                                    htmlFor={`${name}-${optionIndex}`}
                                                    key={optionIndex}>
                                                    <input
                                                        type='radio'
                                                        id={`${name}-${optionIndex}`}
                                                        name={`${name}-${optionIndex}`}
                                                        value={stegaClean(
                                                            option,
                                                        )}
                                                        required={
                                                            field.required
                                                        }
                                                        onChange={handleChange}
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
                                    <label
                                        className={styles.label}
                                        htmlFor={name}>
                                        {field.label}
                                    </label>
                                    <select
                                        title='Select an option'
                                        id={name}
                                        name={name}
                                        required={field.required}
                                        onChange={handleChange}
                                        className={styles.select}
                                        value={formData[name] || ''}>
                                        {field.options?.map(
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
                <Message type={formMessage.type}>
                    <p>{formMessage.content}</p>
                </Message>
            )}
        </Wrap>
    )
}
