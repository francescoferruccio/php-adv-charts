<?php
  header('Content-Type: application/json');

  require_once 'database.php';

  $res = [];
  $res['type'] = $graphs['fatturato_by_agent']['type'];

  $agenti = $graphs['fatturato_by_agent']['data'];

  foreach ($agenti as $nome => $vendite) {
    $res['nomi'][] = $nome;
    $res['vendite'][] = $vendite;
  }

  echo json_encode($res);
?>
