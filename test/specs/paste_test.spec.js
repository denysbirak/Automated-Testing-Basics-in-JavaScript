const PastePage = require('../../src/po/pages/paste.page');

describe('Create New Paste on Pastebin Test', () => {
    it('Expected to create a new paste that includes code, select a paste expiration option and set the name', async () => {
        const pastePage = new PastePage('https://pastebin.com');
        await pastePage.open();
        await pastePage.createNewPaste('Hello from WebDriver', 'helloweb');

        const result = await $('div.notice.-success.-post-view');
        await result.waitForExist(); 
        expect(await result.getText()).toContain('NOTE: Your guest paste has been posted.'); 
    });
});