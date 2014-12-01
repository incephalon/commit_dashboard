angular.module('myApp').controller('districtsController', function ($scope, allData) {

    //grab all the data

    $scope.hello = "yo!";

    $scope.schools = [];


    $.ajax({
        url: '/api/StaarSimple',
        success: function (data) {
            console.log("data");
            console.log(data);
        }
    });

});