angular.module('myApp').controller('scorecardController', function ($scope, $routeParams) {

    console.log($routeParams.pageId);

    var firstPath = "../../../scorecard_assets/page_" + $routeParams.pageId.toString() + ".svg";

    d3.xml(firstPath, "image/svg+xml", function (xml) {
        var doccer = document.getElementById("scorecardPage");
        doccer.appendChild(xml.documentElement);
        create("../../../scorecard_assets/page_" + $routeParams.pageId.toString() + ".svg");
    });

    function create(myPath) {

        d3.xml(myPath, "image/svg+xml", function (xml) {
            var doccer = document.getElementById("scorecardPage");

            while (doccer.firstChild) {
                doccer.removeChild(doccer.firstChild);
            }

            doccer.appendChild(xml.documentElement);
            //visualize();

            var h = window.innerHeight - 50;
            var w = window.innerWidth - 100;

            var svg = d3.select("svg")
                //.attr("viewBox", "0 0 600 600")
                .attr("width", w)
                .attr("height", h);
            //.attr("preserveAspectRatio", "none");


            svg.selectAll("path")
                    .on('click', function () {
                        console.log("clicked");
                        d3.select(this).attr('stroke', 'red');
                        d3.select(this).attr('stroke-width', '2px');
                    })
                   .each(function (d, i) {
                       d3.select(this)
                           .transition()
                           .duration(i * 17)
                       //.style("fill","red")
                   });
        });
    }

});