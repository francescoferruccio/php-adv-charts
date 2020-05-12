// funzione che stampa una Line Chart di chartjs
function printChart(target, data) {
  var ctx = target;
  var myChart = new Chart(ctx, {
    type: data.type,
    data: {
        labels: data.labels,
        datasets: [{
            label: 'Vendite',
            data: data.data,
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
  var pieCanvas = $('#pieChart');

  // chiamata ajax primo grafico
  $.ajax({
    url: 'getFatturato.php',
    method: 'GET',
    success: function(data) {
      data.labels = mesi;
      printChart(lineCanvas, data);
    },
    error: function(err) {
      console.error("ERRORE", err);
    }
  });

  // chiamata ajax secondo grafico
  $.ajax({
    url: 'getFatturatoByAgent.php',
    method: 'GET',
    success: function(data) {
      printChart(pieCanvas, data);
    },
    error: function(err) {
      console.error("ERRORE", err);
    }
  });
}

$(document).ready(init);
