<?php
define('DB_HOST'        , "FIXO\SQLEXPRESS");
define('DB_USER'        , "admin");
define('DB_PASSWORD'    , "admin");
define('DB_NAME'        , "RoyalSchoolDB");
define('DB_DRIVER'      , "sqlsrv");

//decoding 
$txtDescritivo = rawurldecode($_REQUEST["descritivo"]);
$txtValorInscricao = rawurldecode($_REQUEST["valorInscricao"]);
$txtValorLivro = rawurldecode($_REQUEST["valorLivro"]);
$txtValorMensalidade = rawurldecode($_REQUEST["valorMensalidade"]);

require_once "../Conexao.php";
try{
   $Conexao = Conexao::getConnection();

   $stringQuery = "exec criaTipoInscricao @descritivo = $txtDescritivo , @valorInscricao = $txtValorInscricao, @valorLivro = $txtValorLivro , @valorMensalidade = $txtValorMensalidade";
   $query = $Conexao->query($stringQuery);
   echo "Carregou query!";
}catch(Exception $e){
   echo $e->getMessage();
}

?>
