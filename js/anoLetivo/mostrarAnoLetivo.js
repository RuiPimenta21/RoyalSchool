let DefaultPesquisaDescritivo = "";
let DefaultNumeroRegistos = "top 10";
let DefaultOrdenacaoRegistos = "order by 2 asc";

//carrega a tabela com os 10 primeiros dados e ordenado asc ao abrir a pagina
carregaTabela_mostrarAnoLetivo(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
//console.log (DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo)

function recebeFiltrosTabela_mostrarAnoLetivo(opcao){
    let pesquisaDescritivo = document.forms["formAnoLetivoMostraRegistos"]["txtPesquisaDescritivo"].value;
    let numeroRegistos = document.forms["formAnoLetivoMostraRegistos"]["txtNumeroRegistos"].value;
    let ordenacaoRegistos = document.forms["formAnoLetivoMostraRegistos"]["txtOrdenacaoRegistos"].value;

    if(opcao == 1){
        carregaTabela_mostrarAnoLetivo(numeroRegistos, ordenacaoRegistos, pesquisaDescritivo)
    }
    else if(opcao == 2){
        imprimeReportViwer_mostarAnoLetivo(numeroRegistos, ordenacaoRegistos, pesquisaDescritivo)
    }  
}


//funcao que carrega query para ir buscar os dados
function carregaTabela_mostrarAnoLetivo(numeroRegistos, ordenacaoRegistos, pesquisaDescritivo){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        this.readyState
        this.status
        this.responseText
      
        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("tabelaAnoLetivo").style.display = "inline";
            document.getElementById("tabelaAnoLetivo").style.visibility = "visible";
            document.getElementById("tabelaAnoLetivo").innerHTML = this.responseText;
        }else{          
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    }
    //Encoding
    xhttp.open("POST", "php/anoLetivo/mostraDados.php?numeroRegistos="+encodeURIComponent(numeroRegistos)+"&ordenacaoRegistos="+encodeURIComponent(ordenacaoRegistos)+"&pesquisaDescritivo="+encodeURIComponent(pesquisaDescritivo), false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function imprimeReportViwer_mostarAnoLetivo(numeroRegistos, ordenacaoRegistos, pesquisaDescritivo){
    let reportUrl = "http://fixo/ReportServer?%2frpt_mostraAnoLetivo_mostraperiodoLetivo_mostraPausaLetiva"
    // Para o numero de registos
    if(numeroRegistos != ""){
        reportUrl = reportUrl + "&numeroRegistos=" + numeroRegistos
    }
    else{
        reportUrl = reportUrl + "&numeroRegistos="
    }
    // Para o descrtivo
    if(pesquisaDescritivo != "" ){
        reportUrl = reportUrl + "&pesquisaDescritivo=" + pesquisaDescritivo
    }
    else{
        reportUrl = reportUrl + "&pesquisaDescritivo="
    }
    // Para a ordenacao
    if(ordenacaoRegistos != "" ){
        reportUrl = reportUrl + "&ordenacaoRegistos=" + ordenacaoRegistos
    }
    else{
        reportUrl = reportUrl + "&ordenacaoRegistos="
    }
    reportUrl= reportUrl+ "&rc:Toolbar=true&rc:Parameters=false&rs:Command=Render"
    window.open (reportUrl,"ReportService","menubar=1,resizable=1,left=auto,top=auto,width=auto,height=auto");
}









