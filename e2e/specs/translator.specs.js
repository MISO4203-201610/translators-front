describe('Translator E2E Testing', function () {

	browser.driver.manage().window().maximize();

	var nameVarTest = 'Val' + Math.floor(Math.random() * 10000);
	var pictureVarTest = 'Val' + Math.floor(Math.random() * 10000);

    beforeEach(function () {
        browser.addMockModule('ngCrudMock', function () {
            var mod = angular.module('ngCrudMock');

            mod.run(['ngCrudMock.mockRecords', function(records){
                records['translators'] = [];

            }]);
        });
    });

    it('should create one translator', function () {
        browser.get('#/translator');
        element(by.id('create-translator')).click();
        element(by.id('name')).sendKeys(nameVarTest);
        element(by.id('picture')).sendKeys(pictureVarTest);
        element(by.id('save-translator')).click();
        expect(element.all(by.repeater('record in records')).count()).toEqual(1);
    });

    it('should read one translator', function () {
        expect(element(by.id('0-name')).getText()).toBe(nameVarTest);
        expect(element(by.id('0-picture')).getText()).toBe(pictureVarTest);
    });

    it('should edit one translator', function () {
        element(by.id('0-edit-btn')).click();

        element(by.id('name')).clear().sendKeys('New' + nameVarTest);
        element(by.id('picture')).clear().sendKeys('New' + pictureVarTest);

        element(by.id('save-translator')).click();

        expect(element(by.id('0-name')).getText()).toBe('New' + nameVarTest);
        expect(element(by.id('0-picture')).getText()).toBe('New' + pictureVarTest);
    });

    it('should delete the translator', function () {
        element(by.id('0-delete-btn')).click();
        expect(element.all(by.id('0-name')).count()).toEqual(0);
        expect(element.all(by.id('0-picture')).count()).toEqual(0);
        expect(element.all(by.id('0-birthDate')).count()).toEqual(0);
    });
});
