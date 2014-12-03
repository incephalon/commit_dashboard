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


app.directive("collapseNav", [
            function () {
                return {
                    restrict: "A",
                    link: function (scope, ele) {
                        var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
                        return $window = $(window), $lists = ele.find("ul").parent("li"), $lists.append('<i class="ti-angle-down icon-has-ul-h"></i><i class="ti-angle-double-right icon-has-ul"></i>'), $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), $app = $("#app"), $nav = $("#nav-container"), $a.on("click", function (event) {
                            var $parent, $this;
                            return $app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768 ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").stop().slideToggle(), event.preventDefault())
                        }), $aRest.on("click", function () {
                            return $lists.removeClass("open").find("ul").slideUp()
                        }), scope.$on("nav:reset", function () {
                            return $lists.removeClass("open").find("ul").slideUp()
                        }), Timer = void 0, prevWidth = $window.width(), updateClass = function () {
                            var currentWidth;
                            return currentWidth = $window.width(), 768 > currentWidth && $app.removeClass("nav-collapsed-min"), 768 > prevWidth && currentWidth >= 768 && $nav.hasClass("nav-horizontal") && $lists.removeClass("open").find("ul").slideUp(), prevWidth = currentWidth
                        }, $window.resize(function () {
                            var t;
                            return clearTimeout(t), t = setTimeout(updateClass, 300)
                        })
                    }
                }
            }
]);

app.directive("highlightActive", [
            function () {
                return {
                    restrict: "A",
                    controller: ["$scope", "$element", "$attrs", "$location",
                        function ($scope, $element, $attrs, $location) {
                            var highlightActive, links, path;
                            return links = $element.find("a"), path = function () {
                                return $location.path()
                            }, highlightActive = function (links, path) {
                                return path = "#" + path, angular.forEach(links, function (link) {
                                    var $li, $link, href;
                                    return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
                                })
                            }, highlightActive(links, $location.path()), $scope.$watch(path, function (newVal, oldVal) {
                                return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
                            })
                        }
                    ]
                }
            }
]);


app.controller('myC', function ($scope) {

});
