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
    text-align:left;

  }
  .td_data {
    text-align:left;
  }
  .td_quantidade {
    text-align:right;
  }
</style>

<?php
$txtDescritivo = $_REQUEST["descritivo"];
$txtValorInscricao = $_REQUEST["valorInscricao"];
$txtValorLivro = $_REQUEST["valorLivro"];
$txtValorMensalidade = $_REQUEST["valorMensalidade"];


echo "<table class=\"table\">";
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
