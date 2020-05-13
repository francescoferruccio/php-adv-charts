<?php
  require_once 'database.php';

  $fba['type'] = $graphs['fatturato_by_agent']['type'];

  $agenti = $graphs['fatturato_by_agent']['data'];

  foreach ($agenti as $nome => $vendite) {
    $fba['labels'][] = $nome;
    $fba['data'][] = $vendite;
  }

?>
