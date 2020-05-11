$(document).ready(function() {

  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function(data) {
      // console.log(data);

      var ctx = $('#lineChart');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
              datasets: [{
                  label: 'Vendite',
                  data: data,
                  backgroundColor: [
                      'green'
                  ],
                  borderColor: [
                      'red'
                  ],
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
    },
    error: function(err) {
      console.error("ERRORE", err);
    }
  });

});
