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
      $stringQuery = "exec rpt_mostraCustoInscricao @numeroRegistos = '".$txtNumeroRegistos."',  @pesquisaDescritivo = '".$txtPesquisaDescritivo."', @ordenacaoRegistos = '".$txtOrdenacaoRegistos."'";
      //echo $stringQuery . " \n" ;
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
   <table id="tblCustoInscricao" class="table table-striped table table-bordered table-striped mb-0 tableFixHead">
      <thead class="tabelaCabecalho ">
         <tr>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Nº</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Inscrição s/iva</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Livro s/iva</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Mensalidade s/iva</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Inscrição %</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Livro %</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Mensalidade %</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Inscrição c/iva</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Livro c/iva</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Mensalidade s/iva</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Mensalidade c/iva</th>
         </tr>
      </thead>
      <tbody>
         <?php $linha=0;
         foreach($dados as $dado) {
            $linha++;
         ?>
         <tr onclick="selecionaLinha_CustoInscricao(<?php echo(json_encode($linha));?>)">
            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['custoInscricao_id'];?></td>
            <td scope="row"><?php echo $linha;?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['custoInscricao_descricao'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorIscricaoSemIva'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorLivroSemIva'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorMensalidadeSemIva'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_percentagemIvaIscricao'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_percentagemIvaLivro'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_percentagemIvaMensalidade'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorIscricaoComIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorLivroComIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorMensalidadeSemIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['custoInscricao_valorMensalidadeComIva'];?></td>
         </tr>
         <?php
         }
         ?>
      </tbody>
   </table>
