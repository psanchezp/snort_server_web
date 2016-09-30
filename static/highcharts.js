
/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

// highcharts and table
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Alerts'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{
                name: 'Protocols',
                colorByPoint: true,
                data: [{
                    name: 'TCP',
                    y: data[0]
                }, {
                    name: 'UDP',
                    y: data[2],
                    sliced: true,
                    selected: true
                }, {
                    name: 'ICMP',
                    y: data[1]
                }, {
                    name: 'IP',
                    y: data[3]
            }]
          }]
        });

        //time hover
        var elements = $(".glyphicon.glyphicon-time");

        for (i = 0; i < elements.length ;i++){
            elements[i].setAttribute('title',all_timestamps[i]);
        }

        var links = $(".sid");
        for (i = 0; i < links.length; i++){
            all_links[i] = all_links[i].substring(2, all_links[i].length() - 2)
            links[i].setAttribute('href', 'https://www.snort.org/rule_docs/1-' + all_links[i]);
        }
    });
});
