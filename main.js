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
            backgroundColor: 'green',
            borderColor: 'red',
            borderWidth: 3,
            pointBackgroundColor: 'green',
            pointBorderColor: 'red',
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

$(document).ready(function() {
  var lineCanvas = $('#lineChart');
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

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

});
