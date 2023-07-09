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
$txtDescritivo1Periodo = rawurldecode($_REQUEST["descritivo1Periodo"]);
$txtDataInicio1Periodo = rawurldecode($_REQUEST["dataInicio1Periodo"]);
$txtDataFim1Periodo = rawurldecode($_REQUEST["dataFim1Periodo"]);
$txtDescritivo2Periodo = rawurldecode($_REQUEST["descritivo2Periodo"]);
$txtDataInicio2Periodo = rawurldecode($_REQUEST["dataInicio2Periodo"]);
$txtDataFim2Periodo = rawurldecode($_REQUEST["dataFim2Periodo"]);
$txtDescritivo3Periodo = rawurldecode($_REQUEST["descritivo3Periodo"]);
$txtDataInicio3Periodo = rawurldecode($_REQUEST["dataInicio3Periodo"]);
$txtDataFim3Periodo = rawurldecode($_REQUEST["dataFim3Periodo"]);
$txtDescritivo1PausaLetiva = rawurldecode($_REQUEST["descritivo1PausaLetiva"]);
$txtDataInicio1PausaLetiva = rawurldecode($_REQUEST["dataInicio1PausaLetiva"]);
$txtDataFim1PausaLetiva = rawurldecode($_REQUEST["dataFim1PausaLetiva"]);
$txtDescritivo2PausaLetiva = rawurldecode($_REQUEST["descritivo2PausaLetiva"]);
$txtDataInicio2PausaLetiva = rawurldecode($_REQUEST["dataInicio2PausaLetiva"]);
$txtDataFim2PausaLetiva = rawurldecode($_REQUEST["dataFim2PausaLetiva"]);
$txtDescritivo3PausaLetiva = rawurldecode($_REQUEST["descritivo3PausaLetiva"]);
$txtDataInicio3PausaLetiva = rawurldecode($_REQUEST["dataInicio3PausaLetiva"]);
$txtDataFim3PausaLetiva = rawurldecode($_REQUEST["dataFim3PausaLetiva"]);


//converte datas (yyyy-mm-dd -> dd/mm/yyyy)
$txtDataInicio1Periodo = strftime('%d/%m/%Y', strtotime($txtDataInicio1Periodo));
$txtDataFim1Periodo = strftime('%d/%m/%Y', strtotime($txtDataFim1Periodo));
$txtDataInicio2Periodo = strftime('%d/%m/%Y', strtotime($txtDataInicio2Periodo));
$txtDataFim2Periodo = strftime('%d/%m/%Y', strtotime($txtDataFim2Periodo));
$txtDataInicio3Periodo = strftime('%d/%m/%Y', strtotime($txtDataInicio3Periodo));
$txtDataFim3Periodo = strftime('%d/%m/%Y', strtotime($txtDataFim3Periodo));

$txtDataInicio1PausaLetiva = strftime('%d/%m/%Y', strtotime($txtDataInicio1PausaLetiva));
$txtDataFim1PausaLetiva = strftime('%d/%m/%Y', strtotime($txtDataFim1PausaLetiva));
$txtDataInicio2PausaLetiva = strftime('%d/%m/%Y', strtotime($txtDataInicio2PausaLetiva));
$txtDataFim2PausaLetiva = strftime('%d/%m/%Y', strtotime($txtDataFim2PausaLetiva));
$txtDataInicio3PausaLetiva = strftime('%d/%m/%Y', strtotime($txtDataInicio3PausaLetiva));
$txtDataFim3PausaLetiva = strftime('%d/%m/%Y', strtotime($txtDataFim3PausaLetiva));


echo "<table class=\"tableInfo\">";
echo "<tr>";
echo "<td class=\"td_titulo\">Descritivo:</td>";
echo "<td class=\"td_descritivo\">" . $txtDescritivo . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">" . $txtDescritivo1Periodo . ":</td>";
echo "<td class=\"td_data\">" . $txtDataInicio1Periodo . " - " .$txtDataFim1Periodo . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">" . $txtDescritivo2Periodo . ":</td>";
echo "<td class=\"td_data\">" . $txtDataInicio2Periodo . " - " .$txtDataFim2Periodo . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">" . $txtDescritivo3Periodo . ":</td>";
echo "<td class=\"td_data\">" . $txtDataInicio3Periodo . " - " .$txtDataFim3Periodo . "</td>";
echo "</tr>";


echo "<tr>";
echo "<td class=\"td_titulo\">" . $txtDescritivo1PausaLetiva . ":</td>";
echo "<td class=\"td_data\">" . $txtDataInicio1PausaLetiva . " - " .$txtDataFim1PausaLetiva . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">" . $txtDescritivo2PausaLetiva . ":</td>";
echo "<td class=\"td_data\">" . $txtDataInicio2PausaLetiva . " - " .$txtDataFim2PausaLetiva . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">" . $txtDescritivo3PausaLetiva . ":</td>";
echo "<td class=\"td_data\">" . $txtDataInicio3PausaLetiva . " - " .$txtDataFim3PausaLetiva . "</td>";
echo "</tr>";

echo "</table>";
?>
