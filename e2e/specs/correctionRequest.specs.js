describe('CorrectionRequest E2E Testing', function () {

	browser.driver.manage().window().maximize();

	var nameVarTest = 'Val' + Math.floor(Math.random() * 10000);
        var descriptionVarTest = 'Val' + Math.floor(Math.random() * 10000);
        var numWordsVarTest = Math.floor(Math.random() * 10000);

    beforeEach(function () {
        browser.addMockModule('ngCrudMock', function () {
            var mod = angular.module('ngCrudMock');

            mod.run(['ngCrudMock.mockRecords', function(records){
                records['correctionRequests'] = [];

                records['statuss'] = [];
                records['statuss'].push({id: Math.floor(Math.random() * 10000), name: 'status'});

                records['languages'] = [];
                records['languages'].push({id: Math.floor(Math.random() * 10000), name: 'language'});

                records['customers'] = [];
                records['customers'].push({id: Math.floor(Math.random() * 10000), name: 'customer'});
            }]);
        });
    });

    it('should create one correctionRequest', function () {
        browser.get('#/correctionRequest');
        element(by.id('create-correctionRequest')).click();
        element(by.id('name')).sendKeys(nameVarTest);
        element(by.id('status')).all(by.css('option')).last().click();
        element(by.id('language')).all(by.css('option')).last().click();
        element(by.id('customer')).all(by.css('option')).last().click();
        element(by.id('description')).sendKeys(descriptionVarTest);
        element(by.id('numberOfWords')).sendKeys(numWordsVarTest);
        element(by.id('save-correctionRequest')).click();
        expect(element.all(by.repeater('record in records')).count()).toEqual(1);
    });

    it('should read one correctionRequest', function () {
        expect(element(by.id('0-name')).getText()).toBe(nameVarTest);
    });

    it('should edit one correctionRequest', function () {
        element(by.id('0-edit-btn')).click();

        element(by.id('name')).clear().sendKeys('New' + nameVarTest);
        element(by.id('description')).clear().sendKeys('New' + descriptionVarTest);
        element(by.id('numberOfWords')).clear().sendKeys(numWordsVarTest + 5);

        element(by.id('save-correctionRequest')).click();

        expect(element(by.id('0-name')).getText()).toBe('New' + nameVarTest);
    });

    it('should delete the correctionRequest', function () {
        element(by.id('0-delete-btn')).click();
        expect(element.all(by.id('0-name')).count()).toEqual(0);
        expect(element.all(by.id('0-creationDate')).count()).toEqual(0);
        expect(element.all(by.id('0-dueDate')).count()).toEqual(0);
        expect(element.all(by.id('0-description')).count()).toEqual(0);
        expect(element.all(by.id('0-numberOfWords')).count()).toEqual(0);
    });
});
