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
      $stringQuery = "exec rpt_mostraTipoInscricao @numeroRegistos = '".$txtNumeroRegistos."',  @pesquisaDescritivo = '".$txtPesquisaDescritivo."', @ordenacaoRegistos = '".$txtOrdenacaoRegistos."'";
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
   <table id="tblTipoInscricao" class="table table-striped table table-bordered table-striped mb-0 tableFixHead">
      <thead class="tabelaCabecalho ">
         <tr>
            <th style="display:none;" scope="col">Id</th>
            <th scope="col">Nº</th>
            <th scope="col">Descrição</th>
            <th style="display:none;" scope="col">Inscrição s/iva</th>
            <th style="display:none;" scope="col">Livro s/iva</th>
            <th style="display:none;" scope="col">Mensalidade s/iva</th>
            <th style="display:none;" scope="col">Inscrição %</th>
            <th style="display:none;" scope="col">Livro %</th>
            <th style="display:none;" scope="col">Mensalidade %</th>
            <th scope="col">Inscrição c/iva</th>
            <th scope="col">Livro c/iva</th>
            <th scope="col">Mensalidade c/iva</th>
         </tr>
      </thead>
      <tbody>
         <?php $linha=0;
         foreach($dados as $dado) {
            $linha++;
         ?>
         <tr onclick="selecionaLinha_TipoInscricao(<?php echo(json_encode($linha));?>)">
            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['tipoInscricao_id'];?></td>
            <td scope="row"><?php echo $linha;?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['tipoInscricao_descricao'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorIscricaoSemIva'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorLivroSemIva'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorMensalidadeSemIva'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_percentagemIvaIscricao'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_percentagemIvaLivro'];?></td>
            <td style="display:none;" class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_percentagemIvaMensalidade'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorIscricaoComIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorLivroComIva'];?></td>
            <td class="tabelaDadosNumeros"><?php echo $dado['tipoInscricao_valorMensalidadeComIva'];?></td>
         </tr>
         <?php
         }
         ?>
      </tbody>
   </table>
