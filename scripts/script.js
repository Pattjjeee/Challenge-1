// Grafiek 1

var ctx = document.getElementById('chart-1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['2013', '2014', '2015', '2015', '2016', '2017'],
        datasets: [{
            label: 'Tesla stock 2013-2017',
            backgroundColor: '#48839d',
            data: [15, 20, 25, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

// Grafiek 2

var ctx = document.getElementById('donut').getContext('2d');
var chart = new Chart(ctx, {
   
    type: 'doughnut',

    data: {
        labels: ['Aantal ruimte maaltijden', 'Flessen ruimte sap', 'Ruimte noodles'],
        datasets: [{
            label: '',
            data: [1820, 1430, 450],
            backgroundColor: [
            '#48839d',
            '#204553',
            ],
        }]
    },

   
    options: {

    }
});

