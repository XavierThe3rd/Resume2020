import {teardown as teardownPuppeteer} from 'jest-environment-puppeteer'

export default globalConfig => {
    return teardownPuppeteer(globalConfig).then(() => {
        global.__SERVER__.close()
    })
}