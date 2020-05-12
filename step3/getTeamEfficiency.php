<?php
  header('Content-Type: application/json');

  require_once "database.php";

  $res['type'] = $graphs['team_efficiency']['type'];

  $team = $graphs['team_efficiency']['data'];

  foreach ($team as $nome => $risultati) {
    $res['risultati'][] = [
        'label' => $nome,
        'data' => $risultati
    ];
  }

  echo json_encode($res);
?>
