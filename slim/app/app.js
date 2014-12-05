var app = angular.module('myApp', ['ngRoute', 'myApp.localization', 'ui.bootstrap', 'ngAnimate', 'myApp.directives', "kendo.directives", "uiGmapgoogle-maps"]);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
      when('/', {
          templateUrl: '../../app/templates/home.html',
          controller: 'homeController'
      }).
      when('/schools', {
          templateUrl: '../../app/templates/pages/schools_dashboard.html',
          controller: 'schoolsController'
      }).
      when('/districts', {
          templateUrl: '../../app/templates/pages/districts_dashboard.html',
          controller: 'districtsController'
      }).
      when('/staar', {
          templateUrl: '../../app/templates/pages/staar.html',
          controller: 'staarController'
      }).
      when('/mapping', {
          templateUrl: '../../app/templates/pages/mapping.html',
          controller: 'mappingController'
      }).
      when('/type', {
          templateUrl: '../../app/templates/pages/type.html'
      }).
      when('/donors', {
          templateUrl: '../../app/templates/pages/donors.html',
          controller: 'donorsController'
      }).
      when('/components', {
          templateUrl: '../../app/templates/pages/components.html'
      }).
      when('/boxes', {
          templateUrl: '../../app/templates/pages/boxes.html'
      }).
      when('/tab', {
          templateUrl: '../../app/templates/pages/tab.html'
      }).
      when('/scorecard/:pageId', {
          templateUrl: '../../app/templates/pages/scorecard.html',
          controller:'scorecardController'
      }).
      otherwise({
          redirectTo: '/'
      });

}]);

app.controller("slimParentController", ["$scope", "$rootScope", function ($scope, $rootScope) {
    var $window;
    return $window = $(window), $scope.main = {
        brand: "Commit!",
        name: "Lisa Doe"
    },
        $scope.pageTransitionOpts = [{
            name: "Fade up",
            "class": "animate-fade-up"
        }, {
            name: "Scale up",
            "class": "ainmate-scale-up"
        }, {
            name: "Slide in from right",
            "class": "ainmate-slide-in-right"
        }, {
            name: "Flip Y",
            "class": "animate-flip-y"
        }],

        $scope.admin = {
            layout: "wide",
            menu: "vertical",
            fixedHeader: !0,
            fixedSidebar: !0,
            pageTransition: $scope.pageTransitionOpts[0],
            skin: "11"
        },

        $scope.$watch("admin", function (newVal, oldVal) {
            return "horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void (oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void (newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
        }, !0),

        $scope.color = {
            primary: "#5B90BF",
            success: "#A3BE8C",
            info: "#7FABD2",
            infoAlt: "#B48EAD",
            warning: "#EBCB8B",
            danger: "#BF616A",
            gray: "#DCDCDC"
        }
}]);

app.controller('HeaderCtrl', function ($scope) {

});

app.controller('NavContainerCtrl', function ($scope) {

});

app.controller("NavCtrl", ["$scope", function ($scope) {


}]);

app.controller('dashboardController', function ($scope) {

});

app.controller('homeController', function ($scope) {
    $scope.welcomeMessage = "Welcome to Home";
});

app.controller('myC', function ($scope) {

});
