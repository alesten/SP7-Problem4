/*
 * Remove the example below, before you start
 */

describe('My Tests', function () {

    beforeEach(module('myApp'));

    describe('name', function () {

        it('should make person object to lastName, firstName',
                inject(function (nameFilter) {
                    expect(nameFilter({firstName: 'Peter', lastName: 'Smith'})).toBe('Smith, Peter');
                    expect(nameFilter({firstName: 'Alex', lastName: 'Steen'})).toBe('Steen, Alex');
                }));
    });

    describe('MyFactory', function () {
        var MyFactory;
        beforeEach(inject(function (_MyFactory_) {
            MyFactory = _MyFactory_;
        }));
        it('Should be my example service in diffrent styles', function () {
            expect(MyFactory.titleCase("my example service")).toBe("My Example Service");
            expect(MyFactory.camelCase("my example service")).toBe("MyExampleService");
            expect(MyFactory.dashCase("my example service")).toBe("my-example-service");
        });
    });

    describe('controller', function () {
        var $controller;

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            //This line doesn't work with the second controller
            controller = $controller('FactoryController', {$scope: $scope});
        });

        it('test controller get text from factory', function () {
            expect($scope.titleCase).toBe('My Example Factory');
            expect($scope.camelCase).toBe('MyExampleFactory');
            expect($scope.dashCase).toBe('my-example-factory');
        });
    });
});
