'use strict';

var app = angular.module('myApp', []);


app.filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});
