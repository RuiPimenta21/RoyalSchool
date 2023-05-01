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
$txtId = rawurldecode($_REQUEST["id"]);
$txtEmail = rawurldecode($_REQUEST["email"]);
$txtPassword = rawurldecode($_REQUEST["password"]);
$txtNomeCompleto= rawurldecode($_REQUEST["nomeCompleto"]);
$txtNomePerfil= rawurldecode($_REQUEST["nomePerfil"]);
$txtCC = rawurldecode($_REQUEST["cc"]);
$txtDataNascimento= rawurldecode($_REQUEST["dataNascimento"]);
$txtPais = rawurldecode($_REQUEST["pais"]);
$txtDistrito = rawurldecode($_REQUEST["distrito"]);
$txtConcelho = rawurldecode($_REQUEST["concelho"]);
$txtMorada = rawurldecode($_REQUEST["morada"]);
$txtNif = rawurldecode($_REQUEST["nif"]);
$txtCodigoPostal = rawurldecode($_REQUEST["codigoPostal"]);
$txtTelemovel = rawurldecode($_REQUEST["telemovel"]);

echo "<table class=\"tableInfo\">";
/*
echo "<tr>";
echo "<td class=\"td_titulo\">Id:</td>";
echo "<td class=\"td_descritivo\">" . $txtId . "</td>";
echo "</tr>";
*/

echo "<tr>";
echo "<td class=\"td_titulo\">Email:</td>";
echo "<td class=\"td_descritivo\">" . $txtEmail . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Passord:</td>";
echo "<td class=\"td_descritivo\">" . $txtPassword . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Nome Completo:</td>";
echo "<td class=\"td_descritivo\">" . $txtNomeCompleto. "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Nome Perfil:</td>";
echo "<td class=\"td_descritivo\">" . $txtNomePerfil. "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Cartão de Cidadão (CC):</td>";
echo "<td class=\"td_descritivo\">" . $txtCC . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Data Nascimento:</td>";
echo "<td class=\"td_data\">" . $txtDataNascimento . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">País:</td>";
echo "<td class=\"td_descritivo\">" . $txtPais . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Distrito:</td>";
echo "<td class=\"td_descritivo\">" . $txtDistrito . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Concelho:</td>";
echo "<td class=\"td_descritivo\">" . $txtConcelho . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Identificação Fiscal (NIF):</td>";
echo "<td class=\"td_descritivo\">" . $txtNif . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Distrito:</td>";
echo "<td class=\"td_descritivo\">" . $txtDistrito . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Código-Postal:</td>";
echo "<td class=\"td_descritivo\">" . $txtCodigoPostal . "</td>";
echo "</tr>";

echo "<tr>";
echo "<td class=\"td_titulo\">Telemóvel:</td>";
echo "<td class=\"td_descritivo\">" . $txtTelemovel . "</td>";
echo "</tr>";


echo "</table>";
?>
