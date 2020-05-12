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
            backgroundColor: data.bgColor,
            borderColor: data.borderColor,
            borderWidth: 3,
            pointBackgroundColor: data.pointBgColor,
            pointBorderColor: data.pointBorderColor,
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

// funzione che ricava i mesi dell'anno e mette la prima lettera maiuscola
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
      var dati = {
        type: data.type,
        labels: mesi,
        data: data.data,
        bgColor: '#ffe277',
        borderColor: '#58b4ae',
        pointBgColor: '#ffb367',
        pointBorderColor: '#58b4ae'
      }
      printChart(lineCanvas, dati);
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
      var dati = {
        type: data.type,
        labels: data.nomi,
        data: data.vendite,
        bgColor: '#e43f5a',
        borderColor: '#1b1b2f'
      }

      printChart(pieCanvas, dati);
    },
    error: function(err) {
      console.error("ERRORE", err);
    }
  });
}

$(document).ready(init);
