<?php
  header('Content-Type: application/json');

  require_once 'database.php';

  $userLevel = $_GET['level'];

  if($userLevel == 'employee' || $userLevel == 'clevel') {

    $res = [];
    $res['type'] = $graphs['fatturato_by_agent']['type'];

    $agenti = $graphs['fatturato_by_agent']['data'];

    foreach ($agenti as $nome => $vendite) {
      $res['labels'][] = $nome;
      $array[] = $vendite;
    }

    $res['risultati'][] = [
      'label' => 'Sales',
      'data' => $array,
      'backgroundColor' => '',
      'borderColor' => '',
      'borderWidth' => 3,
      'pointBackgroundColor' => '',
      'pointBorderColor' => '',
      'pointBorderWidth' => 2,
      'pointRadius' => 4
    ];

    echo json_encode($res);
  }

?>
