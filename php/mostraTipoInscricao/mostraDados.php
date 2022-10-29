<?php
   define('DB_HOST'        , "FIXO\SQLEXPRESS");
   define('DB_USER'        , "admin");
   define('DB_PASSWORD'    , "admin");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");


   $txtNumeroRegistos = $_REQUEST["numeroRegistos"];
   $txtOrdenacaoRegistos = $_REQUEST["ordenacaoRegistos"];

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery="";
      $stringQuery = "select ".$txtNumeroRegistos." tipoInscricao_descricao, tipoInscricao_valorIscricaoSemIva, tipoInscricao_valorLivroSemIva, tipoInscricao_valorMensalidadeSemIva from tipoInscricao ".$txtOrdenacaoRegistos;
      $query = $Conexao->query($stringQuery);
      $dados = $query->fetchAll();
   }catch(Exception $e){
      echo $e->getMessage();
      exit;
   }
?>

<!DOCTYPE html>
<html>
<body>
   <table class="table table-striped table table-bordered table-striped mb-0">
      <thead class="thead-dark">
         <tr>
         <th scope="col">Nº</th>
         <th scope="col">Descrição</th>
         <th scope="col">Valor Inscrição Sem Iva</th>
         <th scope="col">Valor Livro Sem Iva</th>
         <th scope="col">Valor Mensalidade Sem Iva</th>

         <th scope="col">Descrição</th>
         <th scope="col">Valor Inscrição Sem Iva</th>
         </tr>
      </thead>
      <tbody>
         <?php $linha=0;
         foreach($dados as $dado) {
            $linha++;
         ?>
         <tr>
               <th scope="row"><?php echo $linha;?></th>
               <td><?php echo $dado['tipoInscricao_descricao'];?></td>
               <td><?php echo $dado['tipoInscricao_valorIscricaoSemIva'];?></td>
               <td><?php echo $dado['tipoInscricao_valorLivroSemIva'];?></td>
               <td><?php echo $dado['tipoInscricao_valorMensalidadeSemIva'];?></td>

               <td><?php echo $dado['tipoInscricao_descricao'];?></td>
               <td><?php echo $dado['tipoInscricao_valorIscricaoSemIva'];?></td>
         </tr>
         <?php
         }
         ?>
      </tbody>
   </table>
</body>
</html>


