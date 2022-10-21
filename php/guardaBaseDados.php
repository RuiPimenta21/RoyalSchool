<?php
$servername = "FIXO\SQLEXPRESS";
$username = "admin";
$password = "admin";
$database = "RoyalSchoolDB";


try
 {
  $conn = new PDO("sqlsrv:Server=$servername;Database=$database;ConnectionPooling=0", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  echo "entrou";
}
catch(PDOException $e)
{
  echo ($e->getMessage());
 
}
?>
