<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Chart JS - Step 3</title>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
    <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script>
    <script src="main.js" charset="utf-8"></script>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <div class="container">
      
    </div>

    <!-- TEMPLATE -->
    <script id="canvas-template" type="text/x-handlebars-template">
      <canvas id="{{chartType}}"></canvas>
    </script>

  </body>
</html>
