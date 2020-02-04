import puppeteer from 'puppeteer'

class BrowsingService {
  static async GetContent(url: string): Promise<string> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)

    const content = await page.content()

    await browser.close()

    return content
  }
}

export default BrowsingService
