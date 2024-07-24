'use client'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/cn'
import styles from './404.module.scss'

const Custom404 = () => {
    const toggleGridRef = useRef(null)
    const spellRef = useRef(null)
    const [filledBoxes, setFilledBoxes] = useState([])
    const img = new Image()
    img.src = ''
    const calculateToggles = () => {
        const effectiveToggleWidth = 51
        const effectiveToggleHeight = 32
        // const gridWidth =
        //     toggleGridRef.current?.getBoundingClientRect().width ??
        //     window.innerWidth
        // const gridHeight =
        //     toggleGridRef.current?.getBoundingClientRect().height ??
        //     window.innerHeight

        const gridWidth = 300
        const gridHeight = 300

        console.log(
            toggleGridRef.current?.getBoundingClientRect().height,
            gridHeight,
        )
        const numTogglesHorizontal = Math.floor(
            gridWidth / effectiveToggleWidth,
        )
        const numTogglesVertical = Math.floor(
            gridHeight / effectiveToggleHeight,
        )

        return numTogglesHorizontal * numTogglesVertical
    }
    const toggles = Array.from({ length: calculateToggles() }, (_, i) => i)

    const checkAllTogglesFilled = (id) => {
        const filledBoxes = getFilledBoxes()
        const toggle = document.querySelector(`#id-toggle-${id}`)
        // console.log('input', toggle)
        if (!toggle) return false
        // console.log('Filled boxes:', filledBoxes)
        console.log(1111, toggle, filledBoxes)
        filledBoxes.forEach((box) => {
            console.log(isOverlapping(toggle, box))
            if (isOverlapping(toggle, box)) {
                return true
            }
        })

        return false
    }

    const isOverlapping = (toggle, box) => {
        const rect1 = toggle.getBoundingClientRect()
        const rect2 = box.getBoundingClientRect()

        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        )
    }

    const getFilledBoxes = () => {
        return document.querySelectorAll(`.${styles.filled}`)
    }

    useEffect(() => {
        const filledBoxes = getFilledBoxes()
        setFilledBoxes(filledBoxes)
        // console.log('Filled boxes:', filledBoxes)
    }, [])

    return (
        <div className='relative'>
            <div
                className={styles.toggleGrid}
                ref={toggleGridRef}
                draggable='true'
                onDragStart={(e) => {
                    e.dataTransfer.setDragImage(img, 0, 0)
                }}
            >
                {toggles.map((i) => (
                    <div
                        className={styles.toggle}
                        key={i}
                        onDragStart={(e) => {
                            e.dataTransfer.setDragImage(img, 0, 0)
                        }}
                    >
                        {/* {console.log(
                            document.querySelectorAll(`.${styles.filled}`),
                        )} */}
                        {/* {console.log(filledBoxes)} */}
                        {/* {filledBoxes.forEach((box) => {
                            // console.log(box)
                            // if (isOverlapping(toggle, box)) {
                            //     toggle.previousElementSibling.checked = true
                            // }
                        })} */}
                        <input
                            type='checkbox'
                            className={styles.input}
                            id={`id-toggle-${i}`}
                            readOnly
                            checked={checkAllTogglesFilled(i) === true}
                        />
                        <label
                            htmlFor={`id-toggle-${i}`}
                            draggable='true'
                            className={styles.label}
                            onDragEnter={(e) => {
                                e.preventDefault()
                                e.dataTransfer.setDragImage(img, 0, 0)
                                const it = e.currentTarget
                                const input = it.previousElementSibling

                                input.checked = !input.checked
                            }}
                        >
                            toggle label for visual impact
                        </label>
                    </div>
                ))}
            </div>
            <div className={styles.spell404} ref={spellRef}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={cn(styles.box, styles.filled)}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>

                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}

export default Custom404
