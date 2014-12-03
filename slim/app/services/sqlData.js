angular.module('myApp').factory('sqlData', function ($http) {

    return {
        getData: function () {
            return $http.get("/api/sql");
        }
    };

});