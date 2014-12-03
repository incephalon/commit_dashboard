angular.module('myApp').controller('mappingController', function ($scope, allData) {

    //grab all the data

    $scope.hello = "yo!";

    $scope.schools = [];
    $(".angular-google-map-container").height($(window).height());

    var styler = [{ "featureType": "all", "stylers": [{ "saturation": 0 }, { "hue": "#e7ecf0" }] }, { "featureType": "road", "stylers": [{ "saturation": -70 }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }] }];

    $scope.map = {
        center: {
            latitude: 32.833992,
            longitude: -96.791640
        },
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styler
    };

});