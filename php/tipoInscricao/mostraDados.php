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

      if ($txtPesquisaDescritivo == "") {
         $stringQuery = "select ".$txtNumeroRegistos." tipoInscricao_id, tipoInscricao_descricao, tipoInscricao_valorIscricaoSemIva, tipoInscricao_valorLivroSemIva, tipoInscricao_valorMensalidadeSemIva from tipoInscricao ".$txtOrdenacaoRegistos;
      } else {
         $stringQuery = "select ".$txtNumeroRegistos." tipoInscricao_id, tipoInscricao_descricao, tipoInscricao_valorIscricaoSemIva, tipoInscricao_valorLivroSemIva, tipoInscricao_valorMensalidadeSemIva from tipoInscricao where tipoInscricao_descricao like '%".$txtPesquisaDescritivo."%' ".$txtOrdenacaoRegistos;
      }
      //$stringQuery = "exec criaTipoInscricao @descritivo = '".$txtDescritivo."' , @valorInscricao = '".$txtValorInscricao."', @valorLivro = '".$txtValorLivro."' , @valorMensalidade = '".$txtValorMensalidade."'";

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
   <table id="tblTipoInscricao" class="table table-striped table table-bordered table-striped mb-0 tableFixHead">
      <thead class="tabelaCabecalho ">
         <tr>
            <th scope="col">Id</th>
            <th scope="col">Nº</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor Inscrição Sem Iva</th>
            <th scope="col">Valor Livro Sem Iva</th>
            <th scope="col">Valor Mensalidade Sem Iva</th>
         </tr>
      </thead>
      <tbody>
         <?php $linha=0;
         foreach($dados as $dado) {
            $linha++;
         ?>
         <tr onclick="selecionaLinha_editarTipoInscricao(<?php echo(json_encode($linha));?>)">
            <td class="tabelaDadosTexto" ><?php echo $dado['tipoInscricao_id'];?></td>
            <td scope="row"><?php echo $linha;?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['tipoInscricao_descricao'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorIscricaoSemIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorLivroSemIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorMensalidadeSemIva'];?></td>
         </tr>
         <?php
         }
         ?>
      </tbody>
   </table>
