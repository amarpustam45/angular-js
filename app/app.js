const myApp = angular.module('myApp', []);

myApp.controller('appController', [
  '$scope',
  ($scope) => {
    $scope.message = 'hello world';

    $scope.removeNinja = (ninja) => {
      const removedNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = () => {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        avaliable: true,
      });

      $scope.newninja.name = '';
      $scope.newninja.belt = '';
      $scope.newninja.rate = '';
    };

    $scope.ninjas = [
      {
        name: 'amar',
        belt: 'green',
        rate: 50,
        avaliable: true,
      },
      {
        name: 'someone',
        belt: 'red',
        rate: 20,
        avaliable: true,
      },
      {
        name: 'ryuk',
        belt: 'yellow',
        rate: 30,
        avaliable: true,
      },
      {
        name: 'random',
        belt: 'blue',
        rate: 60,
        avaliable: false,
      },
    ];
  },
]);
