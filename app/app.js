const myApp = angular.module('myApp', ['ngRoute']);

myApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'appController',
      })
      .otherwise({
        redirectTo: '/home',
      });
  },
]);

myApp.controller('appController', [
  '$scope',
  '$interval',
  ($scope, $interval) => {
    $scope.message = 'hello world';

    $scope.slides = [
      {
        image:
          'https://www.pexels.com/photo/king-jack-and-queen-of-spades-playing-cards-1007523/',
      },
      {
        image: 'https://www.pexels.com/photo/ace-cards-casino-deck-279009/',
      },
      {
        image: 'https://www.pexels.com/@ken123films/',
      },
      {
        image:
          'https://www.pexels.com/photo/ace-king-jack-and-king-of-hearts-playing-cards-297507/',
      },
    ];

    let index = 0;

    const setClassName = () => {
      if (index > $scope.slides.length - 1) index = 0;
      console.log($scope.slides);
      $scope.slides.map((slide, slideIndex) => {
        slide.style = 2;
        if (slideIndex === index) slide.style = 1;
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === $scope.slides.length - 1)
        )
          slide.style = 0;
      });
    };

    setClassName();
    $interval(() => {
      index++;
      setClassName();
    }, 15000);

    $scope.sliderControl = (direction) => {
      if (direction === 'left') {
        index = index - 1;
        if (index < 0) index = $scope.slides.length - 1;
        console.log(index);
        setClassName();
      }
      if (direction === 'right') {
        index++;
        setClassName();
      }
    };

    // $interval(function () {
    //   //The Customer object is fetched and assigned to variable.
    //   $scope.slide = $scope.slides[index];
    //   $scope.$applyAsync();

    //   //Index is incremented.
    //   index++;

    //   //Index is again set to 0 if it exceeds the Array length.
    //   if (index > $scope.slide.length - 1) {
    //     index = 0;
    //   }
    // }, 1000);

    // $scope.removeNinja = (ninja) => {
    //   const removedNinja = $scope.ninjas.indexOf(ninja);
    //   $scope.ninjas.splice(removedNinja, 1);
    // };

    // $scope.addNinja = () => {
    //   $scope.ninjas.push({
    //     name: $scope.newninja.name,
    //     belt: $scope.newninja.belt,
    //     rate: parseInt($scope.newninja.rate),
    //     avaliable: true,
    //   });

    //   $scope.newninja.name = '';
    //   $scope.newninja.belt = '';
    //   $scope.newninja.rate = '';
    // };

    // $scope.ninjas = [
    //   {
    //     name: 'amar',
    //     belt: 'green',
    //     rate: 50,
    //     avaliable: true,
    //   },
    //   {
    //     name: 'someone',
    //     belt: 'red',
    //     rate: 20,
    //     avaliable: true,
    //   },
    //   {
    //     name: 'ryuk',
    //     belt: 'yellow',
    //     rate: 30,
    //     avaliable: true,
    //   },
    //   {
    //     name: 'random',
    //     belt: 'blue',
    //     rate: 60,
    //     avaliable: false,
    //   },
    // ];

    // console.log(angular.toJson($scope.ninjas));
  },
]);
