<?php
  header('Content-Type: application/json');

  require_once "database.php";

  $userLevel = $_GET['level'];

  // var_dump($userLevel);

  if($userLevel == 'guest') {

    $res['type'] = $graphs['fatturato']['type'];

    $res['risultati'][] = [
        'label' => 'Vendite',
        'data' => $graphs['fatturato']['data'],
        'backgroundColor' => '',
        'borderColor' => '',
        'borderWidth' => 3,
        'pointBackgroundColor' => '',
        'pointBorderColor' => '',
        'pointBorderWidth' => 2,
        'pointRadius' => 4
      ];

    echo json_encode($res);
  } else {
    echo json_encode('NON AUTORIZZATO');
  }
?>
