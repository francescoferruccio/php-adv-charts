<?php
  header('Content-Type: application/json');

  require_once "database.php";
  require_once "getFatturato.php";
  require_once "getFatturatoByAgent.php";
  require_once "getTeamEfficiency.php";

  $level = $_GET['level'];

  if($level == 'guest') {
    $res['fatturato'] = $fat;
  } else if ($level == 'employee') {
    $res['fatturato'] = $fat;
    $res['fatturatoByAgent'] = $fba;
  } else if ($level == 'clevel') {
    $res['fatturato'] = $fat;
    $res['fatturatoByAgent'] = $fba;
    $res['teamEfficiency'] = $tme;
  }

  echo json_encode($res);

?>
