describe('TranslationRequest E2E Testing', function () {

	browser.driver.manage().window().maximize();

	var nameVarTest = 'Val' + Math.floor(Math.random() * 10000);
	var statusVarTest = 'Val' + Math.floor(Math.random() * 10000);

    beforeEach(function () {
        browser.addMockModule('ngCrudMock', function () {
            var mod = angular.module('ngCrudMock');

            mod.run(['ngCrudMock.mockRecords', function(records){
                records['translationRequests'] = [];

                records['languages'] = [];
                records['languages'].push({id: Math.floor(Math.random() * 10000), name: 'targetLanguage'});

                records['customers'] = [];
                records['customers'].push({id: Math.floor(Math.random() * 10000), name: 'customer'});

                records['languages'] = [];
                records['languages'].push({id: Math.floor(Math.random() * 10000), name: 'originalLanguage'});
            }]);
        });
    });

    it('should create one translationRequest', function () {
        browser.get('#/translationRequest');
        element(by.id('create-translationRequest')).click();
        element(by.id('name')).sendKeys(nameVarTest);
        element(by.id('status')).sendKeys(statusVarTest);
        element(by.id('targetLanguage')).all(by.css('option')).last().click();
        element(by.id('customer')).all(by.css('option')).last().click();
        element(by.id('originalLanguage')).all(by.css('option')).last().click();
        element(by.id('save-translationRequest')).click();
        expect(element.all(by.repeater('record in records')).count()).toEqual(1);
    });

    it('should read one translationRequest', function () {
        expect(element(by.id('0-name')).getText()).toBe(nameVarTest);
        expect(element(by.id('0-status')).getText()).toBe(statusVarTest);
    });

    it('should edit one translationRequest', function () {
        element(by.id('0-edit-btn')).click();

        element(by.id('name')).clear().sendKeys('New' + nameVarTest);
        element(by.id('status')).clear().sendKeys('New' + statusVarTest);

        element(by.id('save-translationRequest')).click();

        expect(element(by.id('0-name')).getText()).toBe('New' + nameVarTest);
        expect(element(by.id('0-status')).getText()).toBe('New' + statusVarTest);
    });

    it('should delete the translationRequest', function () {
        element(by.id('0-delete-btn')).click();
        expect(element.all(by.id('0-name')).count()).toEqual(0);
        expect(element.all(by.id('0-creationDate')).count()).toEqual(0);
        expect(element.all(by.id('0-dueDate')).count()).toEqual(0);
        expect(element.all(by.id('0-status')).count()).toEqual(0);
    });
});
