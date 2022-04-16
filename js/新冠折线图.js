$(function() {

    ceshis();

    function ceshis() {
        var myChart = echarts.init(document.getElementById('chart_3'));

        option = {
            title: {
                text: 'COVID-19'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['累计确诊', '累计死亡']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2020-01-23', '2020-01-31', '2020-03', '2020-06', '2020-09', '2020-12', '2021-01', '2021-03', '2021-06', '2021-09', '2021-12', '2022-02']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '累计确诊',
                    type: 'line',
                    stack: 'Total',
                    data: [571, 11791, 79824, 83017, 85058, 86542, 87071, 89912, 91122, 94898, 98824, 106139]
                },
                {
                    name: '累计死亡',
                    type: 'line',
                    stack: 'Total',
                    data: [17, 46, 2870, 4634, 4634, 4634, 4634, 4636, 4636, 4636, 4636, 4636]
                }
            ]
        };

        function ceshis7() {
            var myChart = echarts.init(document.getElementById('chart_1'));


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        };
    }
});
option && myChart.setOption(option);