import fs from 'fs'
const inputFolder = './public/assets/icons'
const outputFolder = './assets/icons'
const outputFile = 'index.js'

const iconsStoriesFile = './stories/design-system/icons.stories.mdx'

const svgContent = (name, data) => {
    data = data.replace(/fill-rule/g, 'fillRule')
    data = data.replace(/clip-rule/g, 'clipRule')
    data = data.replace(/stroke-linecap/g, 'strokeLinecap')
    data = data.replace(/stroke-linejoin/g, 'strokeLinejoin')
    data = data.replace(/stroke-width/g, 'strokeWidth')
    return `export const ${name} = (${data})
`
}

try {
    if (fs.existsSync(`${inputFolder}/${outputFile}`)) {
        // Remove existing colour stories file
        fs.unlinkSync(`${inputFolder}/${outputFile}`)
    } else {
        fs.writeFileSync(`${inputFolder}/${outputFile}`, '')
    }
} catch (err) {
    console.error(err)
}

const iconsStories = (iconNames) => {
    return `import { Meta, Title, IconGallery, IconItem } from '@storybook/addon-docs'
import Icon from '@components/icon'

<Meta title="Design System/Iconography" />

# Iconography

<IconGallery>${iconNames
        .map((icon) => {
            return `
    <IconItem name="${icon}">
        <Icon name="${icon}" />
    </IconItem>`
        })
        .join('')}
</IconGallery>`
}

fs.writeFile(`${outputFolder}/${outputFile}`, '', (err) => {
    if (err) {
        console.error(err)
    }

    const iconNames = []
    fs.readdirSync(inputFolder).forEach((file) => {
        if (file === 'index.js' || file === 'output') return
        const iconName = file.split('.')[0]
        fs.readFile(`${inputFolder}/${file}`, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }

            fs.appendFile(
                `${outputFolder}/${outputFile}`,
                svgContent(iconName, data),
                function (err) {
                    if (err) throw err
                    // if no error
                    console.log('\x1b[32m%s\x1b[0m', `${iconName} icon added successfully`)
                }
            )
        })
        iconNames.push(iconName)
    })

    const storyOutput = iconsStories(iconNames)
    fs.writeFile(iconsStoriesFile, storyOutput, (err) => {
        if (err) {
            console.error(err)
        }
    })
})
