<?php

session_start();

define('DB_HOST'        , "FIXO\SQLEXPRESS");
define('DB_USER'        , "admin");
define('DB_PASSWORD'    , "admin");
define('DB_NAME'        , "RoyalSchoolDB");
define('DB_DRIVER'      , "sqlsrv");

//decoding 
$txtId = rawurldecode($_REQUEST["id"]);
$txtObservacao = rawurldecode($_REQUEST["observacao"]);
$txtEmail = rawurldecode($_REQUEST["email"]);
$txtPassword = rawurldecode($_REQUEST["password"]);
$txtNomeCompleto = rawurldecode($_REQUEST["nomeCompleto"]);
$txtCC = rawurldecode($_REQUEST["cc"]);
$txtDataNascimento = rawurldecode($_REQUEST["dataNascimento"]);
$txtPais = rawurldecode($_REQUEST["pais"]);
$txtDistrito = rawurldecode($_REQUEST["distrito"]);
$txtConcelho = rawurldecode($_REQUEST["concelho"]);
$txtMorada = rawurldecode($_REQUEST["morada"]);
$txtNif = rawurldecode($_REQUEST["nif"]);
$txtCodigoPostal = rawurldecode($_REQUEST["codigoPostal"]);
$txtTelemovel = rawurldecode($_REQUEST["telemovel"]);
$txUtilizador = rawurldecode($_SESSION["utilizador_id"]);

require_once "../Conexao.php";
try{
   $Conexao = Conexao::getConnection();

   $stringQuery = "exec editaPerfil @id = '".$txtId."', @observacao = '".$txtObservacao."', @email = '".$txtEmail."' , @password = '".$txtPassword."', @nomeCompleto = '".$txtNomeCompleto."', @cc = '".$txtCC."', @dataNascimento = '".$txtDataNascimento."', @pais = '".$txtPais."', @distrito = '".$txtDistrito."', @concelho = '".$txtConcelho."', @morada = '".$txtMorada."', @nif = '".$txtNif."', @codigoPostal = '".$txtCodigoPostal."', @telemovel = '".$txtTelemovel."',  @utilizador = '".$txUtilizador."'";
   
   $query = $Conexao->query($stringQuery);
   $dados = $query->fetchAll();

   $linha=0;
   foreach($dados as $dado) {
      $dado[$linha];
      $linha++;
   }
   $myArr = $dado;
   $myJSON = json_encode($myArr);
  
   if (!empty($myArr[1])) {
      $_SESSION['utilizador_perfil'] = $myArr[1];
   }
   if (!empty($myArr[2])) {
      $_SESSION['acesso_password'] = $myArr[2];
   }  
   if (!isset($_SESSION["utilizador_perfil"]) and !isset($_SESSION["utilizador_perfil"])){
      header("Location: ./index.php");
  }

  echo $myJSON;



}catch(Exception $e){
   echo $e->getMessage();
   exit;
}

?>
