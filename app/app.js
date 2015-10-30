'use strict';

var app = angular.module('myApp', []);


app.filter('name', function () {
    return function (person) {
        return person.lastName + ", " + person.firstName;
    };
});

app.directive('loginForm', function () {
    return {
        restrict: 'EA',
        templateUrl: 'loginForm.html'
    };
});

app.factory('MyFactory', function () {
    return{
        titleCase: function (input) {
            var words = input.split(' ');
            var str = "";
            for(var i = 0; i < words.length; i++){
                var word = words[i];
                
                str += " " + word.substring(0,1).toUpperCase() + word.substring(1);
            }
            
            return str.substring(1);
        },
        camelCase: function (input) {
            var words = input.split(' ');
            var str = "";
            for(var i = 0; i < words.length; i++){
                var word = words[i];
                
                str += word.substring(0,1).toUpperCase() + word.substring(1);
            }
            
            return str;
        },
        dashCase: function (input) {
            var find = ' ';
            var re = new RegExp(find, 'g');

            return input.replace(re, '-');
        }
    }
});


app.controller('FactoryController', ['$scope', 'MyFactory', function ($scope, MyFactory) {
        $scope.titleCase = MyFactory.titleCase("my example factory");
        $scope.camelCase = MyFactory.camelCase("my example factory");
        $scope.dashCase = MyFactory.dashCase("my example factory");
    }]);
