export default {
    root: './',
    get componentsDir() {
        return `${this.root}components`
    },
    get pageDir() {
        return `${this.root}pages`
    },
    get hookDir() {
        return `${this.root}lib/hooks`
    },
}
