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
          backgroundColor: '#ff5200',
          borderColor: '#00263b',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            display: false
          }]
        }
      }
    });
  }
}

// funzione stampa grafico team efficiency
function printTeamEfficiency(target, data) {
  if(data) {
    // seleziono i 3 team
    var team1 = data.teams[0];
    var team2 = data.teams[1];
    var team3 = data.teams[2];

    // modifico i colori dei singoli team
    team1.borderColor = '#c70039';
    team1.pointRadius = 4;
    team1.pointBorderWidth = 2;

    team2.borderColor = '#035aa6';
    team2.pointRadius = 4;
    team2.pointBorderWidth = 2;

    team3.borderColor = '#fcbf1e';
    team3.pointRadius = 4;
    team3.pointBorderWidth = 2;

    // stampo dati
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

// funzione che ricava il livello utente dall'url
function getLevel() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var level = url.searchParams.get("level");

  return level;
}

function init() {
  var mesi = getMonths();
  var lineCanvas = $('#lineChart');
  var pieCanvas = $('#pieChart');
  var teamCanvas = $('#teamChart');
  var userLevel = getLevel();

  // chiamata ajax unica
  $.ajax({
    url: 'server.php',
    method: 'GET',
    data: {
      level: userLevel
    },
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
