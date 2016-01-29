describe('TranslationRequest E2E Testing', function () {

	browser.driver.manage().window().maximize();

	var nameVarTest = 'Val' + Math.floor(Math.random() * 10000);

    beforeEach(function () {
        browser.addMockModule('ngCrudMock', function () {
            var mod = angular.module('ngCrudMock');

            mod.run(['ngCrudMock.mockRecords', function(records){
                records['translationRequests'] = [];

                records['statuss'] = [];
                records['statuss'].push({id: Math.floor(Math.random() * 10000), name: 'status'});

                records['customers'] = [];
                records['customers'].push({id: Math.floor(Math.random() * 10000), name: 'customer'});

                records['languages'] = [];
                records['languages'].push({id: Math.floor(Math.random() * 10000), name: 'originalLanguage'});

                records['languages'] = [];
                records['languages'].push({id: Math.floor(Math.random() * 10000), name: 'targetLanguage'});
            }]);
        });
    });

    it('should create one translationRequest', function () {
        browser.get('#/translationRequest');
        element(by.id('create-translationRequest')).click();
        element(by.id('name')).sendKeys(nameVarTest);
        element(by.id('status')).all(by.css('option')).last().click();
        element(by.id('customer')).all(by.css('option')).last().click();
        element(by.id('originalLanguage')).all(by.css('option')).last().click();
        element(by.id('targetLanguage')).all(by.css('option')).last().click();
        element(by.id('save-translationRequest')).click();
        expect(element.all(by.repeater('record in records')).count()).toEqual(1);
    });

    it('should read one translationRequest', function () {
        expect(element(by.id('0-name')).getText()).toBe(nameVarTest);
    });

    it('should edit one translationRequest', function () {
        element(by.id('0-edit-btn')).click();

        element(by.id('name')).clear().sendKeys('New' + nameVarTest);

        element(by.id('save-translationRequest')).click();

        expect(element(by.id('0-name')).getText()).toBe('New' + nameVarTest);
    });

    it('should delete the translationRequest', function () {
        element(by.id('0-delete-btn')).click();
        expect(element.all(by.id('0-name')).count()).toEqual(0);
        expect(element.all(by.id('0-creationDate')).count()).toEqual(0);
        expect(element.all(by.id('0-dueDate')).count()).toEqual(0);
    });
});
