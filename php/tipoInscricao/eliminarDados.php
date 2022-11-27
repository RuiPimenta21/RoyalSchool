<?php
   define('DB_HOST'        , "FIXO\SQLEXPRESS");
   define('DB_USER'        , "admin");
   define('DB_PASSWORD'    , "admin");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");

   //decoding 
   $txtNumeroRegistos = rawurldecode($_REQUEST["numeroRegistos"]);
   $txtOrdenacaoRegistos = rawurldecode($_REQUEST["ordenacaoRegistos"]);
   $txtPesquisaDescritivo = rawurldecode($_REQUEST["pesquisaDescritivo"]);

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery="";
      $stringQuery = "exec eliminaTipoInscricao @id = '".$txtId."',  @descritivo = '".$txtDescritivo."', @valorInscricao = '".$txtValorInscricao."', @valorLivro = '".$txtValorLivro."' , @valorMensalidade = '".$txtValorMensalidade."'";
                  
      $query = $Conexao->query($stringQuery);

      echo "Carregou query!";

   }catch(Exception $e){
      echo $e->getMessage();
      exit;
   }
?>

