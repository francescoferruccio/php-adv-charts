<?php
  header('Content-Type: application/json');

  require_once "database.php";

  $userLevel = $_GET['level'];

  $res['type'] = $graphs['team_efficiency']['type'];

  $team = $graphs['team_efficiency']['data'];

  foreach ($team as $nome => $risultati) {
    $res['risultati'][] = [
      'label' => $nome,
      'data' => $risultati,
      'backgroundColor' => '',
      'borderColor' => '',
      'borderWidth' => 3,
      'pointBackgroundColor' => '',
      'pointBorderColor' => '',
      'pointBorderWidth' => 2,
      'pointRadius' => 4
    ];
  }
  echo json_encode($res);


?>
