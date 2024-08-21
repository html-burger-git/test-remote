import { $window } from '../utils/globals'
import ApexCharts from 'apexcharts'

/*
* Apex Chart
*/

function initChart(){
	if ( !$('#chart').length ) {
		return
	}

	var chart = new ApexCharts(document.querySelector("#chart"), {
		series: [{
			name: "Desktops",
			data: [
				{
					x: 'June',
					y: 25000
				}, 
				{
					x: 'Just',
					y: 28000
				}, 
				{
					x: 'Aug',
					y: 24000
				}, 
				{
					x: 'Sep',
					y: 22000
				}, 
				{
					x: 'Oct',
					y: 35000
				}, 
				{
					x: 'Nov',
					y: 38000
				}
			]
		}],
		chart: {
			height: 310,
			type: 'area',
			zoom: {
				enabled: false
			},
			toolbar: {
			            autoSelected: 'zoom'
			          }
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight',
			width: 2,
			colors: [ '#13296C' ]
		},
		grid: {
			row: {
				opacity: 1
			},
		},
		yaxis: {
			min: 10000,
			max: 40000,
			tickAmount: 3,
			labels: {
				style: {
					colors: [ '#878CA6' ],
					fontSize: '14px',
					fontWeight: '400',
					fontFamily: 'Avenir LT Pro, sans-serif',

				},
				offsetX: -15,
				formatter: function (value) {
					return value >= 10000 ? value/1000 + "k" : value;
				}
			},

		},
		xaxis: {
			labels: {
				style: {
					colors: [ '#878CA6', '#878CA6', '#878CA6', '#878CA6', '#878CA6', '#878CA6' ],
					fontSize: '14px',
					fontWeight: '400',
					fontFamily: 'Avenir LT Pro, sans-serif',
				},
				offsetY: 4,
			},
			axisBorder: {
				show: false,
			},
			categories: [ 'June', 'Just', 'Aug', 'Sep', 'Oct', 'Nov' ],
		},
		tooltip: {
			custom: function({series, seriesIndex, dataPointIndex, w}) {
				var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

				return '<p>Your income in 6<br> monts <span>$ ' + (data.y/6).toFixed(0) + '/mo</span></p>'
			}
		},
		markers: {
			shape: 'square',
		},
		responsive: [
			{
				breakpoint: 768,
				options: {
					chart: {
						height: 112
					},
					stroke: {
						curve: 'straight',
						width: 1,
						colors: [ '#13296C' ]
					},
					yaxis: {
						min: 10000,
						max: 40000,
						tickAmount: 3,
						labels: {
							style: {
								colors: [ '#878CA6' ],
								fontSize: '5px',
								fontWeight: '400',
								fontFamily: 'Avenir LT Pro, sans-serif',

							},
							offsetX: 0,
							formatter: function (value) {
								return value >= 10000 ? value/1000 + "k" : value;
							}
						},
					},
					xaxis: {
						labels: {
							style: {
								colors: [ '#878CA6', '#878CA6', '#878CA6', '#878CA6', '#878CA6', '#878CA6' ],
								fontSize: '7px',
								fontWeight: '400',
								fontFamily: 'Avenir LT Pro, sans-serif',
							},
							offsetY: 0,
						},
						axisBorder: {
							show: false,
						},
						categories: [ 'June', 'Just', 'Aug', 'Sep', 'Oct', 'Nov' ],
					},


				}
			}
		]
	});

	chart.render().then(() => {
		for (let i = 1; i <= chart.w.globals.series[0].length; i++) {
			const datapoint = chart.w.config.series[0].data[i - 1];

			chart.addPointAnnotation({
				x      : datapoint.x,
				y      : datapoint.y,
				marker : {
				size   : 0
			},
			image: {
				path: "../../../assets/images/temp/dot.png"
			}
		});
	}
});
}

$window.on('load', function() {
	initChart()
})
