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
            <th scope="col" style=" text-align: center; vertical-align: middle; " rowspan="2">Nº</th>
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
         <?php 
         
         $linha=0;

         $linha1=1;
         $corLinha1="";
         $linha2=2;
         $corLinha2="";
         $linha3=3;
         $corLinha3="";


         foreach($dados as $dado) {
            $linha++;

            if ($linha1 % 2 == 0) {
               $corLinha1 = "border:0px;background-color:#FFFFFF;";
            } else {
               $corLinha1 = "border:0px;background-color:#F2F2F2;";
            }
            if ($linha2 % 2 == 0) {
               $corLinha2 = "border:0px;background-color:#FFFFFF;";
            } else {
               $corLinha2 = "border:0px;background-color:#F2F2F2;";
            }
            if ($linha3 % 2 == 0) {
               $corLinha3 = "border:0px;background-color:#FFFFFF;";
            } else {
               $corLinha3 = "border:0px;background-color:#F2F2F2;";
            } 
         
            
            $linha1 = $linha1 + 3;
            $linha2 = $linha2 + 3;
            $linha3 = $linha3 + 3;
              
           
         ?>
         <tr onclick="selecionaLinha_AnoLetivo(<?php echo(json_encode($linha));?>)">
            <td scope="row"><?php echo $linha;?></td>
            <td style="display:none;" class="tabelaDadosTexto"><?php echo $dado['idAnoLetivo'];?></td>
            <td class="tabelaDadosTexto" ><?php echo $dado['descritivoAnoLetivo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataInicioAnoLetivo'];?></td>
            <td class="tabelaDadosDatas"><?php echo $dado['dataFimAnoLetivo'];?></td>
            <td class="tabelaDadosDatas" style="padding: 0px;">
               <table style="width: 100%;">
                  <tbody>
                     <tr>
                        <td class="tabelaDadosTexto" style=<?php echo $corLinha1;?>><?php echo $dado['descritivo1Periodo'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosTexto" style=<?php echo $corLinha2;?>><?php echo $dado['descritivo2Periodo'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosTexto" style=<?php echo $corLinha3;?>><?php echo $dado['descritivo3Periodo'];?></td>
                     </tr>
                  </tbody>
               </table>
            </td>
            <td class="tabelaDadosTexto" style="padding: 0px;">
               <table style="width: 100%;">
               <tbody>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha1;?>><?php echo $dado['dataInicio1Periodo'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha2;?>><?php echo $dado['dataInicio2Periodo'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha3;?>><?php echo $dado['dataInicio3Periodo'];?></td>
                     </tr>
                  </tbody>
               </table>
            </td>
            <td class="tabelaDadosTexto" style="padding: 0px;">
               <table style="width: 100%;">
               <tbody>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha1;?>><?php echo $dado['dataFim1Periodo'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha2;?>><?php echo $dado['dataFim2Periodo'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha3;?>><?php echo $dado['dataFim3Periodo'];?></td>
                     </tr>
                  </tbody>
               </table>
            </td>
            <td class="tabelaDadosDatas" style="padding: 0px;">
               <table style="width: 100%;">
                  <tbody>
                     <tr>
                        <td class="tabelaDadosTexto" style=<?php echo $corLinha1;?>><?php echo $dado['descritivo1Pausa'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosTexto" style=<?php echo $corLinha2;?>><?php echo $dado['descritivo2Pausa'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosTexto" style=<?php echo $corLinha3;?>><?php echo $dado['descritivo3Pausa'];?></td>
                     </tr>
                  </tbody>
               </table>
            </td>
            <td class="tabelaDadosTexto" style="padding: 0px;">
               <table style="width: 100%;">
               <tbody>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha1;?>><?php echo $dado['dataInicio1Pausa'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha2;?>><?php echo $dado['dataInicio2Pausa'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha3;?>><?php echo $dado['dataInicio3Pausa'];?></td>
                     </tr>
                  </tbody>
               </table>
            </td>
            <td class="tabelaDadosTexto" style="padding: 0px;">
               <table style="width: 100%;">
               <tbody>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha1;?>><?php echo $dado['dataFim1Pausa'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha2;?>><?php echo $dado['dataFim2Pausa'];?></td>
                     </tr>
                     <tr>
                        <td class="tabelaDadosDatas" style=<?php echo $corLinha3;?>><?php echo $dado['dataFim3Pausa'];?></td>
                     </tr>
                  </tbody>
               </table>
            </td>
         <?php
         }
         ?>
      </tbody>
    </table>
