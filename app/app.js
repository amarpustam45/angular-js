const myApp = angular.module('myApp', []);

myApp.controller('appController', [
  '$scope',
  ($scope) => {
    $scope.message = 'hello world';

    $scope.ninjas = [
      {
        name: 'amar',
        belt: 'green',
        rate: 50,
      },
      {
        name: 'ryuk',
        belt: 'yellow',
        rate: 30,
      },
      {
        name: 'random',
        belt: 'blue',
        rate: 60,
      },
      {
        name: 'someone',
        belt: 'red',
        rate: 20,
      },
    ];
  },
]);
