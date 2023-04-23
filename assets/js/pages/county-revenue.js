Highcharts.chart('county-rev', {
    chart: {
        type: 'bar',
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    title: {
        text: ''
    },
    
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
            }
        },
        
        
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (KES)'
        },
        crosshair: true
        
    },
    legend: {
        reversed: true
    },
    legend: {
      reversed: true
    },
    tooltip: {
        pointFormat: 'Collected Revenue For January: <b>KES {point.y:.1f}</b>'
    },
    series: [{
        color:'black',
        name: 'Collected Revenue',
        data: [
            ['Mombasa', 3733100],
            ['Kwale', 3118100],
            ['Kilifi', 2779100],
            ['Tana River', 2221003],
            ['Lamu', 2191001],
            ['Taita Taveta', 2100174],
            ['Garissa', 2110032],
            ['Wajir', 2089100],
            ['Mumbai', 2061007],
            ['Mandera', 1910011],
            ['Marsabit', 1610045],
            ['Isiolo', 1610038],
            ['Meru', 1541001],
            ['Tharaka Nithi', 1521005],
            ['Embu', 14100974],
            ['Kitui', 14971000],
            ['Machakos', 1410086],
            ['Makueni', 1411006],
            ['Nyandarua', 131009],
            ['Nyeri', 1100364]
        ],
       
    }]
});
