describe('KnowledgeArea E2E Testing', function () {

	browser.driver.manage().window().maximize();

	var nameVarTest = 'Val' + Math.floor(Math.random() * 10000);

    beforeEach(function () {
        browser.addMockModule('ngCrudMock', function () {
            var mod = angular.module('ngCrudMock');

            mod.run(['ngCrudMock.mockRecords', function(records){
                records['knowledgeAreas'] = [];

            }]);
        });
    });

    it('should create one knowledgeArea', function () {
        browser.get('#/knowledgeArea');
        element(by.id('create-knowledgeArea')).click();
        element(by.id('name')).sendKeys(nameVarTest);
        element(by.id('save-knowledgeArea')).click();
        expect(element.all(by.repeater('record in records')).count()).toEqual(1);
    });

    it('should read one knowledgeArea', function () {
        expect(element(by.id('0-name')).getText()).toBe(nameVarTest);
    });

    it('should edit one knowledgeArea', function () {
        element(by.id('0-edit-btn')).click();

        element(by.id('name')).clear().sendKeys('New' + nameVarTest);

        element(by.id('save-knowledgeArea')).click();

        expect(element(by.id('0-name')).getText()).toBe('New' + nameVarTest);
    });

    it('should delete the knowledgeArea', function () {
        element(by.id('0-delete-btn')).click();
        expect(element.all(by.id('0-name')).count()).toEqual(0);
    });
});
