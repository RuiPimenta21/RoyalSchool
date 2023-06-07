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
//$txtId = rawurldecode($_REQUEST["id"]);
$txtDescritivo = rawurldecode($_REQUEST["descritivo"]);
$txtValorInscricao = rawurldecode($_REQUEST["valorInscricao"]);
$txtValorLivro = rawurldecode($_REQUEST["valorLivro"]);
$txtValorMensalidade = rawurldecode($_REQUEST["valorMensalidade"]);
$txtIvaInscricao = rawurldecode($_REQUEST["valorInscricao"]);
$txtIvaLivro = rawurldecode($_REQUEST["valorLivro"]);
$txtIvaMensalidade = rawurldecode($_REQUEST["valorMensalidade"]);

echo "<table class=\"tableInfo\">";
/*
echo "<tr>";
echo "<td class=\"td_titulo\">Id:</td>";
echo "<td class=\"td_descritivo\">" . $txtId . "</td>";
echo "</tr>";
*/
echo "<tr>";
echo "<td class=\"td_titulo\">Descritivo:</td>";
echo "<td class=\"td_descritivo\">" . $txtDescritivo . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Valor Inscrição:</td>";
echo "<td class=\"td_quantidade\">" . $txtValorInscricao . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Valor Livro:</td>";
echo "<td class=\"td_quantidade\">" . $txtValorLivro . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Valor Mensalidade:</td>";
echo "<td class=\"td_quantidade\">" . $txtValorMensalidade . "</td>";
echo "</tr>";

echo "</table>";
?>
