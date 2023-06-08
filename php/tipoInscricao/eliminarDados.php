<?php
   define('DB_HOST'        , "FIXO\SQLEXPRESS");
   define('DB_USER'        , "admin");
   define('DB_PASSWORD'    , "admin");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");

   //decoding 
   $txtId = rawurldecode($_REQUEST["id"]);
   $txtDescritivo = rawurldecode($_REQUEST["descritivo"]);
   $txtValorInscricao = rawurldecode($_REQUEST["valorInscricao"]);
   $txtValorLivro = rawurldecode($_REQUEST["valorLivro"]);
   $txtValorMensalidade = rawurldecode($_REQUEST["valorMensalidade"]);
   $txtIvaInscricao = rawurldecode($_REQUEST["ivaInscricao"]);
   $txtIvaLivro = rawurldecode($_REQUEST["ivaLivro"]);
   $txtIvaMensalidade = rawurldecode($_REQUEST["ivaMensalidade"]);

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery="";
      $stringQuery = "exec eliminaTipoInscricao @id = '".$txtId."',  @descritivo = '".$txtDescritivo."', @valorInscricao = '".$txtValorInscricao."', @valorLivro = '".$txtValorLivro."', @ivaInscricao = '".$txtIvaInscricao."', @ivaLivro = '".$txtIvaLivro."', @ivaMensalidade = '".$txtIvaMensalidade."', @valorMensalidade = '".$txtValorMensalidade."'";
      //echo $stringQuery . " \n" ;

      $query = $Conexao->query($stringQuery);
      $dados = $query->fetchAll();

      $linha=0;
      foreach($dados as $dado) {
         $dado[$linha];
         $linha++;
      }
      $myArr = $dado;
      $myJSON = json_encode($myArr);
      echo $myJSON;

   }catch(Exception $e){
      echo $e->getMessage();
      exit;
   }
?>



