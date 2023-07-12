<?php
   define('DB_HOST'        , "FIXO\SQLEXPRESS");
   define('DB_USER'        , "admin");
   define('DB_PASSWORD'    , "admin");
   define('DB_NAME'        , "RoyalSchoolDB");
   define('DB_DRIVER'      , "sqlsrv");

   //decoding 
   $txtNumeroRegistos = rawurldecode($_REQUEST["numeroRegistos"]);
   $txtOrdenacaoRegistos = rawurldecode($_REQUEST["ordenacaoRegistos"]);
   $txtPesquisaDescrição = rawurldecode($_REQUEST["pesquisaDescritivo"]);

   require_once "../Conexao.php";
   try{
      $Conexao = Conexao::getConnection();

      $stringQuery="";
      $stringQuery = "exec rpt_mostraAnoLetivo_mostraPeriodoLetivo_mostraPausaLetiva @numeroRegistos = '".$txtNumeroRegistos."',  @pesquisaDescritivo = '".$txtPesquisaDescrição."', @ordenacaoRegistos = '".$txtOrdenacaoRegistos."'";
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
   <table id="tblAnoLetivo" class="table table-striped table table-bordered table-striped mb-0 tableFixHead">
      <thead class="tabelaCabecalho ">
         <tr style="display:none;">
            <th scope="col" style=" text-align: center; vertical-align: middle;" rowspan="2">Nº</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;" colspan="4">Ano</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;" colspan="4">Período</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;" colspan="4">Pausa</th>
         </tr>
         <tr>
            <th scope="col" style=" text-align: center; vertical-align: middle;" rowspan="2">Nº</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;" colspan="3">Ano</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;" colspan="3">Período</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;" colspan="3">Pausa</th>
         </tr>
         <tr>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id Ano Letivo</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Data de Início</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Data de Fim</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id Período</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Data de Início</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Data de Fim</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id Pausa</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Data de Início</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Data de Fim</th>
         </tr>
      </thead>
      <tbody>
         <?php $linha=0;
         foreach($dados as $dado) {
            $linha++;
         ?>
         <tr style="vertical-align: middle;" onclick="selecionaLinha_CustoInscricao(<?php echo(json_encode($linha));?>)">
            <tr>
               <td scope="row" style="vertical-align: middle;" rowspan="3"><?php echo $linha;?></td>
               <td style="display:none;" class="tabelaDadosTexto" rowspan="3"><?php echo $dado['idAnoLetivo'];?></td>
               <td class="tabelaDadosTexto" style="vertical-align: middle;" rowspan="3"><?php echo $dado['descritivoAnoLetivo'];?></td>
               <td class="tabelaDadosDatas" style="vertical-align: middle;" rowspan="3"><?php echo $dado['dataInicioAnoLetivo'];?></td>
               <td class="tabelaDadosDatas" style="vertical-align: middle;" rowspan="3"><?php echo $dado['dataFimAnoLetivo'];?></td>


               <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['id1Periodo'];?></td>
               <td class="tabelaDadosTexto"><?php echo $dado['descritivo1Periodo'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataInicio1Periodo'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataFim1Periodo'];?></td>
               <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['id1Pausa'];?></td>
               <td class="tabelaDadosTexto"><?php echo $dado['descritivo1Pausa'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataInicio1Pausa'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataFim1Pausa'];?></td>
            </tr>
            <tr>
               <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['id2Periodo'];?></td>
               <td class="tabelaDadosTexto"><?php echo $dado['descritivo2Periodo'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataInicio2Periodo'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataFim2Periodo'];?></td>
               <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['id2Pausa'];?></td>
               <td class="tabelaDadosTexto"><?php echo $dado['descritivo2Pausa'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataInicio2Pausa'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataFim2Pausa'];?></td>
            </tr>
            <tr>
               <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['id3Periodo'];?></td>
               <td class="tabelaDadosTexto"><?php echo $dado['descritivo3Periodo'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataInicio3Periodo'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataFim3Periodo'];?></td>
               <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['id3Pausa'];?></td>
               <td class="tabelaDadosTexto"><?php echo $dado['descritivo3Pausa'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataInicio3Pausa'];?></td>
               <td class="tabelaDadosDatas"><?php echo $dado['dataFim3Pausa'];?></td>
            </tr>
         </tr>
         <?php
         }
         ?>
      </tbody>
    </table>











<!--
   <table id="tblAnoLetivo" class="table table-striped table table-bordered table-striped mb-0 tableFixHead">
      <thead class="tabelaCabecalho ">
         <tr>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id AnoLetivo</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Nº</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Início</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Fim</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id Período</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Início</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Fim</th>
            <th style="display:none;" scope="col" style=" text-align: center; vertical-align: middle;">Id Pausa</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Descrição</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Início</th>
            <th scope="col" style=" text-align: center; vertical-align: middle;">Fim</th>
         </tr>
      </thead>
      <tbody>
         <?php $linha=0;
         foreach($dados as $dado) {
            $linha++;
         ?>
         <tr onclick="selecionaLinha_AnoLetivo(<?php echo(json_encode($linha));?>)">
            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['idAnoLetivo'];?></td>
            <td scope="row"><?php echo $linha;?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['DescriçãoAnoLetivo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicioAnoLetivo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFimAnoLetivo'];?></td>

            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['id1Periodo'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['Descrição1Periodo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicio1Periodo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFim1Periodo'];?></td>

            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['id2Periodo'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['Descrição2Periodo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicio2Periodo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFim2Periodo'];?></td>

            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['id3Periodo'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['Descrição3Periodo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicio3Periodo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFim3Periodo'];?></td>

            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['id1Pausa'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['Descrição1Pausa'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicio1Pausa'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFim1Pausa'];?></td>

            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['id2Pausa'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['Descrição2Pausa'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicio2Pausa'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFim2Pausa'];?></td>

            <td style="display:none;" class="tabelaDadosTexto" ><?php echo $dado['id3Pausa'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['Descrição3Pausa'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicio3Pausa'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFim3Pausa'];?></td>

         </tr>
         <?php
         }
         ?>
      </tbody>
   </table>
      -->
      