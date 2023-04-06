import * as child from 'child_process'
import fs from 'fs'

export const componentCamelCase = (componentName) => {
    return componentName
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase()
        })
        .replace(/\s+/g, '')
        .replace(/-/g, '')
}

export const componentKebabCase = (componentName) => {
    return componentName.replace(
        /[A-Z]/g,
        (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()
    )
}

export const createFile = (location, template) => {
    fs.writeFile(location, template, (error) => {
        if (error) {
            console.warn(error)
        }
        console.log(
            '\x1b[32m%s\x1b[0m',
            `Success: A new file has been created at ${location}`
        )
    })
}

export const fileExistsError = (name) => {
    console.log(
        '\x1b[33m%s\x1b[0m',
        `Error: The files for '${name}' already exist. If you want to override them use --force`
    )
}

export const folderExistsError = (name) => {
    console.log(
        '\x1b[33m%s\x1b[0m',
        `Error: The folder for '${name}' already exist. If you want to override the contents use --force`
    )
}

export const showForcedWarning = () => {
    console.log(
        '\x1b[33m%s\x1b[0m',
        `--force used, existing files will be overridden`
    )
}

export const copyToClipboard = (componentName) => {
    const data = `import ${componentName} from "@components/${componentKebabCase(
        componentName
    )}"`
    var proc = child.spawn('pbcopy')
    proc.stdin.write(data)
    proc.stdin.end()

    console.log(
        '\x1b[32m%s\x1b[0m',
        `Success: The component '${componentCamelCase(
            componentName
        )}' has been created`
    )
    console.log(
        '\x1b[32m%s\x1b[0m',
        `The import for '${componentCamelCase(
            componentName
        )}' has been copied to the clipboard!`
    )
}
