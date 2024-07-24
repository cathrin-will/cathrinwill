'use client'
import { useEffect } from 'react'
import styles from './404.module.scss'
import { cn } from '@/utils/cn'
const isOverlapping = (elem1, elem2) => {
    const rect1 = elem1.getBoundingClientRect()
    const rect2 = elem2.getBoundingClientRect()

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    )
}

const Custom404 = () => {
    useEffect(() => {
        const main = document.querySelector('main')
        const boxes = document.querySelectorAll(`.${styles.box}`)
        const filledBoxes = document.querySelectorAll(`.${styles.filled}`)
        const toggleGrid = document.querySelector(
            `[data-element="toggle-grid"]`,
        )
        const calculateToggles = () => {
            const effectiveToggleWidth = 57
            const effectiveToggleHeight = 39

            const gridWidth = main.getBoundingClientRect().width
            const gridHeight = main.getBoundingClientRect().height
            console.log('width', gridWidth)
            console.log('height', gridHeight)
            const numTogglesHorizontal = Math.floor(
                gridWidth / effectiveToggleWidth,
            )
            const numTogglesVertical = Math.floor(
                gridHeight / effectiveToggleHeight,
            )

            return numTogglesHorizontal * numTogglesVertical
        }
        console.log(calculateToggles())
        let markup = ''
        const toggleMarkup = (id, checked) => {
            return `
        <div class="${styles.toggle}">
          <input type="checkbox" class="${styles.input}" id="id-toggle-${id}" ${checked ? 'checked' : ''}>
          <label for="id-toggle-${id}" draggable="true" class="${styles.label}" data-element="toggle">Label</label>
        </div>
      `
        }
        const totalToggles = calculateToggles() * 0.8 // your're probably wondering what this number is, it's magic, it's late and I have spent an embarrassing amount of time on a 404 page 2 people might see. I will come back for you toggles! This is not the end of this fight.
        console.log('totalToggles', totalToggles)
        for (let i = 0; i < totalToggles; i++) {
            markup += toggleMarkup(i)
        }

        toggleGrid.innerHTML = markup

        const toggles = document.querySelectorAll(`[data-element="toggle"]`)
        const img = new Image()
        img.src = ''

        toggleGrid.addEventListener('dragstart', (e) => {
            e.dataTransfer.setDragImage(img, 0, 0)
        })

        toggles.forEach((toggle) => {
            const input = toggle.previousElementSibling
            filledBoxes.forEach((box) => {
                if (isOverlapping(toggle, box)) {
                    toggle.previousElementSibling.checked = true
                }
            })
            toggle.addEventListener('dragenter', (e) => {
                e.preventDefault()
                e.dataTransfer.setDragImage(img, 10, 10)
                const it = e.currentTarget
                const input = it.previousElementSibling

                input.checked = !input.checked
            })

            toggle.addEventListener('dragstart', (e) => {
                e.dataTransfer.setDragImage(img, 0, 0)
            })
        })

        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                box.classList.toggle(styles.filled)
            })
        })
    }, [])

    return (
        <div className='relative'>
            <div
                className={styles.toggleGrid}
                data-element='toggle-grid'
                draggable='true'
            ></div>
            <div className={styles.grid}>
                <div className={styles.spell404}>
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
        </div>
    )
}

export default Custom404
