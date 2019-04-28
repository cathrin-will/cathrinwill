// const project = require('./package.json')
//
// function titleCase(str) {
//     str = str.toLowerCase()
//     var strArray = str.split(' ')
//     for(var i = 0 i < strArray.length i++){
//         strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1)
//     }
//     var result = strArray.join(' ')
//     return result
// }
// // -------------------------------------------------------------------------- //
// // GULP CONFIG
// // -------------------------------------------------------------------------- //
// //
// // SOURCE_ROOT          Location of UI Source files
// // COMPILE_ROOT         Temporary location where files are compiled to
// // DEVELOPMENT_ROOT     Location of compiled files for development
// // PRODUCTION_ROOT      Location of compiled files for production
// // STYLEGUIDE_ROOT      Location of compiled styleguide=
// //
// // -------------------------------------------------------------------------- //
//
// const SOURCE_ROOT = 'site/src'
// const COMPILE_ROOT = 'tmp'
// const DEVELOPMENT_ROOT = 'site/dist'
// const PRODUCTION_ROOT = 'site/dist'
// const STYLEGUIDE_ROOT = 'site/styleguide'
// const ASSETS_ROOT = 'site/dist'
// const PROJECT_NAME = titleCase(project.name.replace('-', ' '))
//
// module.exports = {
//
//   root: './',
//
//   name: PROJECT_NAME,
//
//   src: {
//     root: SOURCE_ROOT,
//     sass: `${SOURCE_ROOT}/stylesheets`,
//     js: `${SOURCE_ROOT}/javascript`,
//     img: `${SOURCE_ROOT}/images`,
//     fonts: `${SOURCE_ROOT}/fonts`,
//   },
//
//   compile: {
//     root: COMPILE_ROOT,
//     sass: `${COMPILE_ROOT}/stylesheets`,
//     js: `${COMPILE_ROOT}/javascript`,
//     img: `${COMPILE_ROOT}/images`,
//     fonts: `${COMPILE_ROOT}/fonts`
//   },
//
//   development: {
//     root: DEVELOPMENT_ROOT,
//     sass: `${DEVELOPMENT_ROOT}/stylesheets`,
//     js: `${DEVELOPMENT_ROOT}/javascript`,
//     img: `${DEVELOPMENT_ROOT}/images`,
//     fonts: `${DEVELOPMENT_ROOT}/fonts`
//   },
//
//   production: {
//     root: PRODUCTION_ROOT,
//     sass: `${PRODUCTION_ROOT}/stylesheets`,
//     js: `${PRODUCTION_ROOT}/javascript`,
//     img: `${PRODUCTION_ROOT}/images`,
//     fonts: `${PRODUCTION_ROOT}/fonts`
//   },
//
//   styleguide: {
//     root: STYLEGUIDE_ROOT,
//     sass: `${ASSETS_ROOT}/stylesheets`,
//     js: `${ASSETS_ROOT}/javascript`
//   },
//
//   linters: {
//     sass: './.sass-lint.yml',
//     eslint: './.eslintrc.yml'
//   }
//
// }
