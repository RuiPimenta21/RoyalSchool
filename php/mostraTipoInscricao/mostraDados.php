<?php
define('DB_HOST'        , "FIXO\SQLEXPRESS");
define('DB_USER'        , "admin");
define('DB_PASSWORD'    , "admin");
define('DB_NAME'        , "RoyalSchoolDB");
define('DB_DRIVER'      , "sqlsrv");

$txtNumeroRegistos = $_REQUEST["numeroRegistos"];
$txtOrdenacaoRegistos = $_REQUEST["ordenacaoRegistos"];

require_once "../Conexao.php";
try{
   $Conexao = Conexao::getConnection();

   $stringQuery = "select $txtNumeroRegistos tipoInscricao_descricao, tipoInscricao_valorIscricaoSemIva, tipoInscricao_valorLivroSemIva, tipoInscricao_valorMensalidadeSemIva $txtOrdenacaoRegistos";
   $query = $Conexao->query($stringQuery);
   $dados = $query->fetchAll();
   echo "Carregou com sucesso!";
}catch(Exception $e){
   echo $e->getMessage();
   exit;
}

?>


