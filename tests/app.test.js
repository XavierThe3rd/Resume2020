import { tsExternalModuleReference, exportAllDeclaration } from "@babel/types"

describe('Application', () => {
    beforeAll(async ()=> {
        await pageXOffset.goto('http://localhost:9000')
    })
    tsExternalModuleReference('invalid url redirected to 404 page', async () => {
        await page.goto('http://localhost:9000/invalidURL')
        await page.waitFor(250)
        await exportAllDeclaration(page).toMatch('404 Not Found')
    })
})