angular.module('myApp').controller('donorsController', function ($scope) {

    $scope.myVar = "hello";
    $scope.numberOfProjects = 27;
    $scope.amountNeeded = 100;
    $scope.NuSchools = 100;
    $scope.NuDistricts = 100;
    $scope.projects;

    //PAGE LOADER.
    $scope.spinner = false;


    var districtNumbers = {
        'Dallas County': '331:1',
        'mesquite isd': '1440:2',
        'dallas isd': '105:9'
    };


    $scope.projects = [];

    function createGrid() {

        $("#donorsGrid").kendoGrid({
            dataSource: {
                data: $scope.projects,
                schema: {
                    model: {
                        fields: {
                            schoolName: { type: "string" },
                            title: { type: "string" },
                            costToComplete: { type: "number" },
                            city: { type: "string" }
                        }
                    }
                }
                //pageSize: 20
            },
            //height: 550,
            scrollable: true,
            sortable: true,
            filterable: true,
            pageable: {
                input: true,
                numeric: false
            },
            columns: [
                { field: "schoolName", title:"School", width: "130px" },
                { field: "title", title: "Title", format: "{0:c}", width: "250px" },
                { field: "costToComplete", title: "Cost to Complete", width: "130px" },
                { field: "city", title:"City",  width: "130px" }
            ]
        });
    }


    $scope.init = function () {
        $scope.spinner = true;
        console.log("init here");

        $.ajax({
            url: "http://api.donorschoose.org/common/json_feed.html?state=TX&Community=331:1&APIKey=vmspm5ygamje&concise=true&description=true",
            dataType: 'jsonp',
            success: function (results) {

                $scope.projects = results.proposals;
                console.log("proposals");
                console.log(results.proposals);
                createGrid();

                $scope.$apply(function () {
                    //$scope.numberOfProjects = results.proposals.length;

                    //var allCosts = _.pluck(results.proposals, "costToComplete");
                    //var sum = _.reduce(allCosts, function (memo, num) { return memo + parseFloat(num); }, 0);
                    //$scope.amountNeeded = sum;
                    //console.log("sum");
                    //console.log(sum);

                    //var allDistricts = _.pluck(results.proposals, "city");
                    //var distinctDistricts = _.uniq(allDistricts);

                    //$scope.NuDistricts = distinctDistricts.length;

                    //var allSchools = _.pluck(results.proposals, "schoolName");
                    //var distinctSchools = _.uniq(allSchools);

                    //$scope.NuSchools = distinctSchools.length;

                    //$scope.projects = results.proposals;
                    //console.log("projects scope");
                    //console.log($scope.projects);

                    //$scope.create(results.proposals);

                    //$scope.projects = results;
                    //createGrid();
                    $scope.spinner = false;
                });

                //console.log(results.proposals.length);
                //console.log(results);
                //			console.log(results['proposals'][0]['percentFunded']);
                //			console.log(results['proposals'][0]['costToComplete']);
            }
        });


        $scope.spinner = true;
        $.ajax({
            url: "http://api.donorschoose.org/common/json_feed.html?state=TX&Community=331:1&APIKey=vmspm5ygamje&max=50",
            dataType: 'jsonp',
            success: function (results) {

                //$scope.$apply(function () {


                //    $scope.create(results.proposals);

                //});

                var percenter = _.pluck(results.proposals, "percentFunded");

                console.log("non concise");
                console.log(results);
                console.log(percenter);

                $scope.create(results);
                $scope.spinner = false;
            }
        });

    }


    //get load district projects into different stuff
    $scope.clickDistrict = function (districtNumber) {

        console.log(districtNumber);

        $.ajax({
            url: "http://api.donorschoose.org/common/json_feed.html?state=TX&Community=" + districtNumber + "&APIKey=vmspm5ygamje&concise=true&description=true",
            dataType: 'jsonp',
            success: function (results) {
                console.log(results);
                //			console.log(results['proposals'][0]['percentFunded']);
                //			console.log(results['proposals'][0]['costToComplete']);
            }
        });

    }


    $scope.create = function (data) {



        $("#chart").kendoChart({
            chartArea: {
                background: "transparent"
            },
            title: {
                text: "Projects % Funded"
            },
            legend: {
                position: "top"
            },
            seriesDefaults: {
                type: "column"
            },
            series: [{
                name: "percentFunded",
                data: _.pluck(data.proposals, "percentFunded"),
                //color:'teal'
                //url: _.pluck(data.proposals, "proposalURL")
                //url//: data.proposals.proposalURL
                id: _.pluck(data.proposals, "id"),
                dataItem: _.pluck(data.proposals, "id"),
                okay: data.proposals.proposalURL
            }],
            valueAxis: {
                max: 100,
                min: 0,
                labels: {
                    format: "{0}%"
                },
                line: {
                    visible: false
                },
                axisCrossingValue: 0
            },
            categoryAxis: {
                //categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
                line: {
                    visible: false
                },
                labels: {
                    padding: { top: 165 }
                }
            },
            tooltip: {
                visible: true,
                format: "{0}%",
                template: "#= series.name #: #= value #"
            },
            seriesClick: onSeriesClick,
        });


        function onSeriesClick(e) {
            console.log(kendo.format("Series click :: {0} ({1}): {2}",
                e.series.name, e.category, e.value));

            var data = e.sender.dataSource.data();
            for (var i = 0; i < data.length ; i++) {
                if (e.dataItem.uid === data[i].uid) {
                    console.log(i);
                }
            }
            console.log(e.dataItem);
            console.log(e.series);
            console.log(e);

            var data = e.sender.dataSource.data();
            console.log(data);
        }

    }

    $scope.init();

});