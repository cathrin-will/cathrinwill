import fs from 'fs'
import config from './config.js'
import {
    componentCamelCase,
    componentKebabCase,
    createFile,
    fileExistsError,
    showForcedWarning,
    copyToClipboard,
} from './lib/helpers.js'

import componentTemplate from './templates/componentTemplate.js'
import jestTemplate from './templates/jestTemplate.js'
import pageTemplate from './templates/pageTemplate.js'
import storybookTemplate from './templates/storybookTemplate.js'
import stylesTemplate from './templates/stylesTemplate.js'
import hookTemplate from './templates/hookTemplate.js'
import hookStoryTemplate from './templates/hookStoryTemplate.js'

if (process.argv.length === 2) {
    console.error('Expected at least one argument!')
    process.exit(1)
}

const componentsDir = config.componentsDir
const pageDir = config.pageDir
const hookDir = config.hookDir
const componentName = process.argv[2]

const args = process.argv.filter((arg) => arg.startsWith('--'))
const isPage = args.indexOf('--page') > -1
const isHook = args.indexOf('--hook') > -1
const isForced = args.indexOf('--force') > -1

const pageOutput = pageTemplate(componentName)
const componentOutput = componentTemplate(
    componentName,
    componentKebabCase(componentName)
)
const storybookOutput = storybookTemplate(componentName)
const jestOutput = jestTemplate(componentName)
const stylesOutput = stylesTemplate(componentName)
const hookOutput = hookTemplate(componentName)
const hookStoryOutput = hookStoryTemplate(componentName)

// Generates all files
const generateFiles = () => {
    if (
        isForced ||
        (isPage &&
            !fs.existsSync(
                `${pageDir}/${componentKebabCase(componentName)}.tsx`
            )) ||
        (isHook &&
            !fs.existsSync(
                `${hookDir}/${componentKebabCase(componentName)}`
            )) ||
        !fs.existsSync(`${componentsDir}/${componentKebabCase(componentName)}`)
    ) {
        if (isForced) {
            showForcedWarning()
        }
        if (isPage) {
            generatePageFiles()
        } else if (isHook) {
            generateHookFiles()
        } else {
            if (!fs.existsSync(componentsDir)) {
                fs.mkdirSync(componentsDir)
            }
            fs.mkdirSync(
                `${componentsDir}/${componentKebabCase(componentName)}`
            )
            generateComponentFiles()
            copyToClipboard(componentName)
        }
    } else {
        fileExistsError(componentKebabCase(componentName))
    }
}

// Files for pages
const generatePageFiles = () => {
    createFile(
        `${pageDir}/${componentKebabCase(componentName)}.tsx`,
        pageOutput
    )
}

// Files for components
const generateComponentFiles = () => {
    createFile(
        `${componentsDir}/${componentKebabCase(componentName)}/index.tsx`,
        componentOutput
    )
    createFile(
        `${componentsDir}/${componentKebabCase(
            componentName
        )}/${componentKebabCase(componentName)}.stories.js`,
        storybookOutput
    )
    createFile(
        `${componentsDir}/${componentKebabCase(
            componentName
        )}/${componentKebabCase(componentName)}.module.scss`,
        stylesOutput
    )
    createFile(
        `${componentsDir}/${componentKebabCase(
            componentName
        )}/${componentKebabCase(componentName)}.test.js`,
        jestOutput
    )
}

// Files for hooks
const generateHookFiles = () => {
    createFile(`${hookDir}/${componentCamelCase(componentName)}.js`, hookOutput)
    createFile(
        `${hookDir}/${componentCamelCase(componentName)}.stories.mdx`,
        hookStoryOutput
    )
}

// Run main function
generateFiles()
