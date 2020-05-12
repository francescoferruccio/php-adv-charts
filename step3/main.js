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
                },
                display: data.displayY
            }],
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
  var query = location.search;

  // console.log(query);

  // chiamata ajax primo grafico
  $.ajax({
    url: 'getFatturato.php' + query,
    method: 'GET',
    success: function(data) {
      data.labels = mesi;
      // modifico la grafica
      data.risultati[0].backgroundColor = '#ffe277';
      data.risultati[0].borderColor = '#58b4ae';
      data.risultati[0].pointBackgroundColor = '#ffb367';
      data.risultati[0].pointBorderColor = '#58b4ae';
      data.displayY = true;

      printChart(lineCanvas, data);
    },
    error: function(err, data, stato) {
      console.error("ERRORE", err.status);
    }
  });

  // chiamata ajax secondo grafico
  $.ajax({
    url: 'getFatturatoByAgent.php' + query,
    method: 'GET',
    success: function(data) {
      // modifico la grafica
      data.risultati[0].backgroundColor = '#ff5200';
      data.risultati[0].borderColor = '#00263b';

      printChart(pieCanvas, data);
    },
    error: function(err) {
      console.error("ERRORE", err.status);
    }
  });

    // chiamata ajax terzo grafico
  $.ajax({
    url: 'getTeamEfficiency.php' + query,
    method: 'GET',
    success: function(data) {
      data.labels = mesi;

      data.displayY = true;
      // modifico la grafica Team1
      data.risultati[0].borderColor = '#c70039';
      data.risultati[0].pointBackgroundColor = '#fff';
      data.risultati[0].pointBorderColor = '#c70039';

      // modifico la grafica Team2
      data.risultati[1].borderColor = '#035aa6';
      data.risultati[1].pointBackgroundColor = '#fff';
      data.risultati[1].pointBorderColor = '#035aa6';

      // modifico la grafica Team3
      data.risultati[2].borderColor = '#fcbf1e';
      data.risultati[2].pointBackgroundColor = '#fff';
      data.risultati[2].pointBorderColor = '#fcbf1e';

      printChart(teamCanvas, data);
    },
    error: function(err) {
      console.error("ERRORE", err.status);
    }
  });

}

$(document).ready(init);
