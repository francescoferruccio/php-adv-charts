// funzione stampa fatturato
function printFatturato(target, data) {
  if(data) {
    var ctx = target;
    var myChart = new Chart(ctx, {
      type: data.type,
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Vendite',
          data: data.data,
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
}

// funzione stampa fatturato by agent
function printFatturatoByAgent(target, data) {
  if(data) {
    var ctx = target;
    var myChart = new Chart(ctx, {
      type: data.type,
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Vendite',
          data: data.data,
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
}

// funzione stampa grafico team efficiency
function printTeamEfficiency(target, data) {
  if(data) {
    var ctx = target;
    var myChart = new Chart(ctx, {
      type: data.type,
      data: {
        labels: data.labels,
        datasets: data.teams
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
  var teamCanvas = $('#teamChart');
  var level = location.search;

  // chiamata ajax primo grafico
  $.ajax({
    url: 'server.php' + level,
    method: 'GET',
    success: function(data) {
      if(data.fatturato) {
        data.fatturato.labels = mesi;
      }
      if(data.teamEfficiency) {
        data.teamEfficiency.labels = mesi;
      }

      printFatturato(lineCanvas, data.fatturato);
      printFatturatoByAgent(pieCanvas, data.fatturatoByAgent);
      printTeamEfficiency(teamCanvas, data.teamEfficiency);
    },
    error: function(err, data, stato) {
      console.error("ERRORE", err.status);
    }
  });

}

$(document).ready(init);
