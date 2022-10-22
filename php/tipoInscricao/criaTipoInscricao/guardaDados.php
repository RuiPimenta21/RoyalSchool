<?php
define('DB_HOST'        , "FIXO\SQLEXPRESS");
define('DB_USER'        , "admin");
define('DB_PASSWORD'    , "admin");
define('DB_NAME'        , "RoyalSchoolDB");
define('DB_DRIVER'      , "sqlsrv");

$txtDescritivo = $_REQUEST["descritivo"];
$txtValorInscricao = $_REQUEST["valorInscricao"];
$txtValorLivro = $_REQUEST["valorLivro"];
$txtValorMensalidade = $_REQUEST["valorMensalidade"];

require_once "../../Conexao.php";
try{
   $Conexao = Conexao::getConnection();

   $stringQuery = "exec criaTipoInscricao @descritivo = $txtDescritivo , @valorInscricao = $txtValorInscricao, @valorLivro = $txtValorLivro , @valorMensalidade = $txtValorMensalidade";
   $query = $Conexao->query($stringQuery);
   echo "Gravou com sucesso!";
}catch(Exception $e){
   echo $e->getMessage();
}

?>
