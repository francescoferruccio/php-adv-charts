// funzione che stampa una Line Chart di chartjs
function printLineChart(target, labels, data) {
  var ctx = target;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Vendite',
            data: data,
            backgroundColor: '#ffe277',
            borderColor: '#58b4ae',
            borderWidth: 3,
            pointBackgroundColor: '#ffb367',
            pointBorderColor: '#58b4ae',
            pointBorderWidth: 2,
            pointRadius: 4
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}

function getMonths() {
  moment.locale('it');
  var mesi = moment.months();
  var mesiUpperCase = [];

  for (var index in mesi) {
    var mese = mesi[index];
    mese = mese.charAt(0).toUpperCase() + mese.slice(1);
    mesiUpperCase.push(mese);
  }

  return mesiUpperCase;
}

function init() {
  var mesi = getMonths();
  var lineCanvas = $('#lineChart');

  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function(data) {
      printLineChart(lineCanvas, mesi, data);
    },
    error: function(err) {
      console.error("ERRORE", err);
    }
  });
}

$(document).ready(init);
