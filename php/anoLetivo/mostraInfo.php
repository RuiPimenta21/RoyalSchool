<style>
  .table {
    min-width:auto;
    margin: 0 auto;
  }
  .td_titulo {
    font-weight: bold;
    text-align:left;
    padding-right: 10px
  }
  .td_descritivo {
    text-align:right;
  }
  .td_data {
    text-align:right;
  }
  .td_quantidade {
    text-align:right;
  }
  tr{
    font-size: 14px;
  }
</style>

<?php
//decoding
$txtDescritivo = rawurldecode($_REQUEST["descritivo"]);
$txtDataInicio = rawurldecode($_REQUEST["dataInicio"]);
$txtDataFim = rawurldecode($_REQUEST["dataFim"]);

//converte datas (yyyy-mm-dd -> dd/mm/yyyy)
$txtDataInicio = strftime('%d/%m/%Y', strtotime($txtDataInicio));
$txtDataFim = strftime('%d/%m/%Y', strtotime($txtDataFim));


echo "<table class=\"tableInfo\">";
echo "<tr>";
echo "<td class=\"td_titulo\">Descritivo:</td>";
echo "<td class=\"td_descritivo\">" . $txtDescritivo . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Data:</td>";
echo "<td class=\"td_data\">" . $txtDataInicio . " - " .$txtDataFim . "</td>";
echo "</tr>";

echo "</table>";
?>
