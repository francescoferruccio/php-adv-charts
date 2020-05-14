<?php
  header('Content-Type: application/json');

  require_once "database.php";

  function getFatturatoByAgent($db) {
    $fba['type'] = $db['fatturato_by_agent']['type'];

    $agenti = $db['fatturato_by_agent']['data'];

    foreach ($agenti as $nome => $vendite) {
      $fba['labels'][] = $nome;
      $fba['data'][] = $vendite;
    }

    return $fba;
  }

  function getTeamEfficiency($db) {
    $tme['type'] = $db['team_efficiency']['type'];

    $team = $db['team_efficiency']['data'];

    foreach ($team as $nome => $risultati) {
      $tme['teams'][] = [
        'label' => $nome,
        'data' => $risultati,
      ];
    }

    return $tme;
  }

  $level = $_GET['level'] ?? 'guest';

  $res['fatturato'] = $graphs['fatturato'];

  if ($level == 'employee' || $level == 'clevel') {
    $res['fatturatoByAgent'] = getFatturatoByAgent($graphs);
  }
  if ($level == 'clevel') {
    $res['teamEfficiency'] = getTeamEfficiency($graphs);
  }

  echo json_encode($res);

?>
