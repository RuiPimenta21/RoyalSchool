<?php
define('DB_HOST'        , "localhost");
define('DB_USER'        , "admin");
define('DB_PASSWORD'    , "admin");
define('DB_NAME'        , "RoyalSchoolDB");
define('DB_DRIVER'      , "sqlsrv");

require_once "Conexao.php";

try{

    $Conexao    = Conexao::getConnection();
    $query      = $Conexao->query("select top 1 tipoInscricao_id, tipoInscricao_descricao, tipoInscricao_valorIscricaoSemIva, tipoInscricao_valorLivroSemIva, tipoInscricao_valorMensalidadeSemIva from tipoInscricao");
    $tiposInscricoes   = $query->fetchAll();

 }catch(Exception $e){

    echo $e->getMessage();
    exit;

 }

?>
<!DOCTYPE html>
<html>
<head>
  <title>Conexão PDO SQL Server</title>
</head>
<body>
  <form>
        <table border=1>
            <tr>
               <td>ID</td>
               <td>DESCRICAO</td>
               <td>VALOR INSC</td>
               <td>VALOR LIV</td>
               <td>VALOR MENS</td>
            </tr>
            <?php
               foreach($tiposInscricoes as $tiposInscricao) {
            ?>
            <tr>
                <td><?php echo $tiposInscricao['tipoInscricao_id']; ?></td>
                <td>R$ <?php echo $tiposInscricao['tipoInscricao_descricao']; ?></td>
                <td><?php echo $tiposInscricao['tipoInscricao_valorIscricaoSemIva']; ?></td>
                <td><?php echo $tiposInscricao['tipoInscricao_valorLivroSemIva']; ?></td>
                <td><?php echo $tiposInscricao['tipoInscricao_valorMensalidadeSemIva']; ?></td>
            </tr>
            <?php
               }
            ?>
        </table>
    </form>
</body>
</html>