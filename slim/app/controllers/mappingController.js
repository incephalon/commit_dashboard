angular.module('myApp').controller('mappingController', function ($scope, allData, d3Data) {

    //grab all the data

    $scope.hello = "yo!";

    $scope.schools = [];
    //$(".angular-google-map-container").height($(window).height());

    //var styler = [{ "featureType": "all", "stylers": [{ "saturation": 0 }, { "hue": "#e7ecf0" }] }, { "featureType": "road", "stylers": [{ "saturation": -70 }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }] }];

    //$scope.map = {
    //    center: {
    //        latitude: 32.833992,
    //        longitude: -96.791640
    //    },
    //    zoom: 10,
    //    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //    styles: styler
    //};



    //====
    var styler = [{ "featureType": "all", "stylers": [{ "saturation": 0 }, { "hue": "#e7ecf0" }] }, { "featureType": "road", "stylers": [{ "saturation": -70 }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }] }];
    $("#map-canvas").width($(document).width());
    $("#map-canvas").height($(document).height());

        var mapOptions = {
            //32.775595, -96.808998
            //32.795903, -96.805301
            center: new google.maps.LatLng(32.795903, -96.795903),
            zoom: 10,
            //mapTypeId: google.maps.MapTypeId.SATELLITE,
            //mapTypeId: google.maps.MapTypeId.HYBRID,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: styler
            //heading: 90,
            //tilt: 45
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        bindGeoJson('green');


        function bindGeoJson(myColor) {
            // Load GeoJSON.
            map.data.loadGeoJson('/app/map_data/DallasCountyCensusTracts.json');

            // Add some style.
            var counter = 0;
            map.data.setStyle(function (feature) {
                //var campNumber = feature.getProperty('ELEM_SLN');
                //counter++;
                //var match = _.where(heatmap_data, { "campus": campNumber });
                //if (match.length === 0) {
                //    console.log("null " + campNumber);
                //}

                //var filler;
                //if (match.length === 0) {
                //    filler = 255;
                //}
                //else {
                //    filler = Math.round(parseFloat(1 - match[0].poverty) * 255);
                //}

                //console.log(match);


                return ({
                    //fillColor: feature.getProperty('color'),
                    fillColor: 'rgb(255,0,0)',
                    fillOpacity: .5,
                    strokeColor: 'white',
                    strokeWeight: 1
                });


                //if (match.length === 0) {
                //    return ({
                //        //fillColor: feature.getProperty('color'),
                //        fillColor: 'rgb(255,0,0)',
                //        fillOpacity: .5,
                //        strokeColor: 'white',
                //        strokeWeight: 1
                //    });
                //}
                //else {
                //    return ({
                //        //fillColor: feature.getProperty('color'),
                //        //fillColor: 'rgb(0,0,' + filler.toString() + ')',
                //        fillColor: myColor,
                //        fillOpacity: 1,
                //        strokeColor: 'white',
                //        strokeWeight: 1
                //    });
                //}
            });

            // [START snippet]
            // Set mouseover event for each feature.
            //my.Maps.map.data.addListener('mouseover', function (event) {
            //    document.getElementById('info-box').textContent =
            //        event.feature.getProperty('ELEM_SLN');
            //    //event.feature.setStyle({ fillColor: 'red' });
            //    //map.data.overrideStyle(event.feature, { fillColor: 'red' });
            //});
            // [END snippet]
        };









});