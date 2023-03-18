<?php
   define('DB_HOST'        , "FIXO\SQLEXPRESS");
   define('DB_USER'        , "admin");
   define('DB_PASSWORD'    , "admin");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");

   //decoding 
   $txtId = rawurldecode($_REQUEST["utilizadorId"]);
   $txtPassword = rawurldecode($_REQUEST["utilizadorPassword"]);

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery="";
      $stringQuery = "exec rpt_mostraPerfil @id = '".$txtId."',  @password = '".$txtPassword."'";
      
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

