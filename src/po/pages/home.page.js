const BasePage = require('./base.page');

class HomePage extends BasePage {
    constructor() {
        super('https://cloud.google.com/');
    }

    get searchIcon() {
        return $('#kO001e > div.WPN7R > div.TDbJKc > div > div.a7K4Uc > div.ND91id.LLv0lb > div.p1o4Hf > div > div');
    }

    get searchBox() {
        return $('#i4');
    }

    get searchRequestIcon() {
        return $('#kO001e > div.WPN7R > div.TDbJKc > div > div.a7K4Uc > div.ND91id.LLv0lb > div.p1o4Hf > div > div > div.mb2a7b > form > div > div.qdOxv-fmcmS-yrriRe-OWXEXe-H9tDt.ZJR0Ie > label > i.google-material-icons.PETVs.PETVs-OWXEXe-UbuQg')
    }

    async searchQueryForCalculator() {
        await this.searchIcon.click()
        await this.searchBox.waitForDisplayed();
        await this.searchBox.setValue('Google Cloud Platform Pricing Calculator');
        await this.searchRequestIcon.waitForDisplayed();
        await this.searchRequestIcon.click();
    }
}

module.exports = HomePage;