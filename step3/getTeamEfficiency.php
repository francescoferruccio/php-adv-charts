<?php
  require_once "database.php";

  $tme['type'] = $graphs['team_efficiency']['type'];

  $team = $graphs['team_efficiency']['data'];

  foreach ($team as $nome => $risultati) {
    $tme['teams'][] = [
      'label' => $nome,
      'data' => $risultati,
    ];
  }

?>
