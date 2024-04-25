class SearchPage {
    get googlePricingCalculatorLink() {
        return $('#yDmH0d > c-wiz.SSPGKf > div > div > div > div > div > div:nth-child(3) > c-wiz > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > a')
    }

    async goToGooglePricingCalculatorLink(){
        await this.googlePricingCalculatorLink.click();
    }
}
  
module.exports = SearchPage;