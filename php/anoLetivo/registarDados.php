<?php
   session_start();
   
   define('DB_HOST'        , "FIXO\SQLEXPRESS");
   define('DB_USER'        , "admin");
   define('DB_PASSWORD'    , "admin");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");
   
//decoding
$txtDescritivo = rawurldecode($_REQUEST["descritivo"]);
$txtDescritivo1Periodo = rawurldecode($_REQUEST["descritivo1Periodo"]);
$txtDataInicio1Periodo = rawurldecode($_REQUEST["dataInicio1Periodo"]);
$txtDataFim1Periodo = rawurldecode($_REQUEST["dataFim1Periodo"]);
$txtDescritivo2Periodo = rawurldecode($_REQUEST["descritivo2Periodo"]);
$txtDataInicio2Periodo = rawurldecode($_REQUEST["dataInicio2Periodo"]);
$txtDataFim2Periodo = rawurldecode($_REQUEST["dataFim2Periodo"]);
$txtDescritivo3Periodo = rawurldecode($_REQUEST["descritivo3Periodo"]);
$txtDataInicio3Periodo = rawurldecode($_REQUEST["dataInicio3Periodo"]);
$txtDataFim3Periodo = rawurldecode($_REQUEST["dataFim3Periodo"]);
$txtDescritivo1PausaLetiva = rawurldecode($_REQUEST["descritivo1PausaLetiva"]);
$txtDataInicio1PausaLetiva = rawurldecode($_REQUEST["dataInicio1PausaLetiva"]);
$txtDataFim1PausaLetiva = rawurldecode($_REQUEST["dataFim1PausaLetiva"]);
$txtDescritivo2PausaLetiva = rawurldecode($_REQUEST["descritivo2PausaLetiva"]);
$txtDataInicio2PausaLetiva = rawurldecode($_REQUEST["dataInicio2PausaLetiva"]);
$txtDataFim2PausaLetiva = rawurldecode($_REQUEST["dataFim2PausaLetiva"]);
$txtDescritivo3PausaLetiva = rawurldecode($_REQUEST["descritivo3PausaLetiva"]);
$txtDataInicio3PausaLetiva = rawurldecode($_REQUEST["dataInicio3PausaLetiva"]);
$txtDataFim3PausaLetiva = rawurldecode($_REQUEST["dataFim3PausaLetiva"]);
$txUtilizador = rawurldecode($_SESSION["utilizador_id"]);

require_once "../Conexao.php";
try{
   $Conexao = Conexao::getConnection();

   $stringQuery = "exec criaAnoLetivo_criaPeridoLetivo_criaPausaLetiva 
        @descritivo = '".$txtDescritivo."' , 
        @descritivo1Periodo = '".$txtDescritivo1Periodo."', 
        @dataInicio1Periodo = '".$txtDataInicio1Periodo."', 
        @dataFim1Periodo = '".$txtDataFim1Periodo."', 
        @descritivo2Periodo = '".$txtDescritivo2Periodo."', 
        @dataInicio2Periodo = '".$txtDataInicio2Periodo."', 
        @dataFim2Periodo = '".$txtDataFim2Periodo."', 
        @descritivo3Periodo = '".$txtDescritivo3Periodo."', 
        @dataInicio3Periodo = '".$txtDataInicio3Periodo."', 
        @dataFim3Periodo = '".$txtDataFim3Periodo."', 
        @descritivo1PausaLetiva = '".$txtDescritivo1PausaLetiva."', 
        @dataInicio1PausaLetiva = '".$txtDataInicio1PausaLetiva."', 
        @dataFim1PausaLetiva = '".$txtDataFim1PausaLetiva."', 
        @descritivo2PausaLetiva = '".$txtDescritivo2PausaLetiva."', 
        @dataInicio2PausaLetiva = '".$txtDataInicio2PausaLetiva."', 
        @dataFim2PausaLetiva = '".$txtDataFim2PausaLetiva."', 
        @descritivo3PausaLetiva = '".$txtDescritivo3PausaLetiva."', 
        @dataInicio3PausaLetiva = '".$txtDataInicio3PausaLetiva."', 
        @dataFim3PausaLetiva = '".$txtDataFim3PausaLetiva."',
        @utilizador = '".$txUtilizador."'"; 

   //echo $stringQuery . " \n" ;
   $query = $Conexao->query($stringQuery);
   echo "Carregou query!";
}catch(Exception $e){
   echo $e->getMessage();
   exit;
}

?>
