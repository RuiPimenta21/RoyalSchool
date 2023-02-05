<?php
    session_start();

    define('DB_HOST'        , "FIXO\SQLEXPRESS");
    define('DB_USER'        , "admin");
    define('DB_PASSWORD'    , "admin");
    define('DB_NAME'        , "RoyalSchoolDB");
    define('DB_DRIVER'      , "sqlsrv");

   //decoding 
    $txtEmail = rawurldecode($_REQUEST["email"]);
    $txtPassword = rawurldecode($_REQUEST["password"]);

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery="";
      $stringQuery = "exec loginIndex @email = '".$txtEmail."',  @password = '".$txtPassword."'";
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



   if($myArr[1] == 3){
        $_SESSION['nomeUtilizador']= $myArr[1];
        header("location:admin.php");
   }
?>

