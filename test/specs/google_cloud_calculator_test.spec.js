const {page} = require('../../src/po/pages/index');

describe('Calculator with Computer Engine in Google Cloud Test', () => {
    beforeEach(async() => {
        await page('home').open();
    })

    it('Expected to create a computer engine instance with a cost of $993.91', async () => {      
        await page('home').searchQueryForCalculator(); 
        await page('search').goToGooglePricingCalculatorLink();
        await page('calculator').addToEstimate();
        await page('computerEngine').configure();

        setTimeout(() => {
            const result =  $('#ow4 > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.xJ0wqe > div.egBpsb > span.MyvX5d.D0aEmf');
            result.waitForDisplayed();
        
            expect(result.getText()).toContain('$993.91'); 
        }, 1000)
    });
});