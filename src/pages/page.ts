export default class Page {

    protected open(path: string) {
        return browser.url(path)
    }
}
