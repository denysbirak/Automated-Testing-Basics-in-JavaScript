class PastePage {
    constructor(url) {
        this.url = url;
    }

    async open() {
        await browser.url(this.url);
    } 

    get codeInput() {
        return $('#postform-text');
    }

    get pasteNameOrTitleInput() {
        return $('input[type="text"][id="postform-name"]');
    }

    get pasteExpirationDropdown() {
        return $('#select2-postform-expiration-container');
    }

    get pasteExpirationDropdownOption() {
        return $(`//li[text()='${'10 Minutes'}']`);
    }

    get createNewPasteButton() {
        return $('#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button');
    }

    async createNewPaste(code, name) {
        await this.codeInput.setValue(code);
        await this.pasteExpirationDropdown.click();
        await this.pasteExpirationDropdownOption.waitForDisplayed();
        await this.pasteExpirationDropdownOption.click();
        await this.pasteNameOrTitleInput.setValue(name);
        await this.createNewPasteButton.click();
    }
}
  
module.exports = PastePage;