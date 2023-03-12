<?php
   define('DB_HOST'        , "34.175.23.173");
   define('DB_USER'        , "sqlserver");
   define('DB_PASSWORD'    , "@OversystemS7276");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");

   //decoding 
   $txtId = rawurldecode($_REQUEST["id"]);
   $txtDescritivo = rawurldecode($_REQUEST["descritivo"]);
   $txtValorInscricao = rawurldecode($_REQUEST["valorInscricao"]);
   $txtValorLivro = rawurldecode($_REQUEST["valorLivro"]);
   $txtValorMensalidade = rawurldecode($_REQUEST["valorMensalidade"]);

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery = "exec editaTipoInscricao @id = '".$txtId."',  @descritivo = '".$txtDescritivo."', @valorInscricao = '".$txtValorInscricao."', @valorLivro = '".$txtValorLivro."' , @valorMensalidade = '".$txtValorMensalidade."'";
      
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
