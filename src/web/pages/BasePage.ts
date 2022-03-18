export default class BasePage {

    protected open(path: string) {
        return browser.url(path)
    }
}
