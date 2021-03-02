// Grafiek 1

var ctx = document.getElementById('chart-1').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['4 uur', '5 uur', '6 uur', '7 uur', '8 uur', '9 uur'],
        datasets: [{
            label: 'Temperatuur in het schip',
            backgroundColor: '#48839d',
            data: [9, 11, 10, 9, 14, 10]
        }]
    },
    options: {
    }
});

// Grafiek 2

var ctx = document.getElementById('donut').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Aantal ruimte maaltijden', 'Flessen ruimte sap', 'Ruimte noodles'],
        datasets: [{
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

// Grafiek 3

var ctx = document.getElementById('chart-3').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['10 min', '1 uur', 'huidig'],
        datasets: [{
            label: 'Snelheid',
            data: [800, 1400, 4000],
        }]
    },
    options: {
    }
});