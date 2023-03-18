<?php
   // Start the session
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
      
      if($myArr[0] == 3){
         //Atribui variaveis de sessão
         $_SESSION["utilizador_id"] =  $myArr[1];
         $_SESSION["utilizador_perfil"] = $myArr[2];
         $_SESSION["acesso_password"] = $myArr[3];  
      }
      
      echo $myJSON;

   }catch(Exception $e){
      echo $e->getMessage();
      exit;
   }

?>

