// funzione che stampa una Line Chart di chartjs
function printChart(target, data) {
  var ctx = target;
  var myChart = new Chart(ctx, {
    type: data.type,
    data: {
        labels: data.labels,
        datasets: data.risultati
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
  var teamCanvas = $('#teamChart');

  // chiamata ajax primo grafico
  $.ajax({
    url: 'getFatturato.php',
    method: 'GET',
    success: function(data) {
      console.log(data);
      data.labels = mesi;
      // data.risultati[0].backgroundColor = 'blue';
      printChart(lineCanvas, data);
    },
    error: function(err, data, stato) {
      console.error("ERRORE", err, data, stato);
    }
  });

  // // chiamata ajax secondo grafico
  // $.ajax({
  //   url: 'getFatturatoByAgent.php',
  //   method: 'GET',
  //   success: function(data) {
  //     printChart(pieCanvas, data);
  //   },
  //   error: function(err) {
  //     console.error("ERRORE", err.status);
  //   }
  // });
  //
  //   // chiamata ajax terzo grafico
  // $.ajax({
  //   url: 'getTeamEfficiency.php',
  //   method: 'GET',
  //   success: function(data) {
  //     data.labels = mesi;
  //
  //     printChart(teamCanvas, data);
  //   },
  //   error: function(err) {
  //     console.error("ERRORE", err.status);
  //   }
  // });

}

$(document).ready(init);
