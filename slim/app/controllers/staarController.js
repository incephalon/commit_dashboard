angular.module('myApp').controller('staarController', function ($scope, sqlData) {

    //grab all the data

    $scope.hello = "yo!";

    $scope.schools = [];

    sqlData.getData()
   .success(function (data) {
       $scope.schools = data;
       createGrid();

   })
   .error(function (error) {
       $scope.status = 'Unable to load radio data: ' + error.message;
   });

    function createGrid() {



        $("#schoolsGrid").kendoGrid({
            dataSource: {
                data: $scope.schools,
                schema: {
                    model: {
                        fields: {
                            CAMPUS: { type: "string" },
                            CAMPNAME: { type: "string" },
                            CPEMALLP: { type: "string" },
                            CPETHISP: { type: "string" }
                        }
                    }
                },
                pageSize: 20
            },
            height: 550,
            scrollable: true,
            sortable: true,
            filterable: true,
            pageable: {
                input: true,
                numeric: false
            },
            columns: [
                { field: "CAMPUS", width: "130px" },
                { field: "CAMPNAME", title: "Unit Price", format: "{0:c}", width: "130px" },
                { field: "CPETWHIP", title: "Units In Stock", width: "130px" },
                { field: "CPETHISP", width: "130px" }
            ]
        });
    }


    $scope.downloadReport = function () {
        //upload objects

        //console.log(headers);

        //var newTry = [];
        //$.each(myObjects, function (i, x) {

        //    newTry.push(JSON.stringify(myObjects[i]));

        //});

        console.log("downloadReport");

        $.ajax({
            dataType: 'json',
            type: 'post',
            //traditional: true,
            url: "/download/downloader",
            data: { 'reportData': JSON.stringify($scope.schools), 'theHeaders': JSON.stringify($scope.schools[0]) },
            success: function (results) {
                window.location = results.url;
                //alert("success: " + results.url);
            },
            error: function (err) {
                alert("error: " + err.responseText)
            }
        });




    }

});