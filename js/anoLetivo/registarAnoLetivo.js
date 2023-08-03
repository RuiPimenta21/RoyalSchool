function registar_registarAnoLetivo(){ 

    let valoresformAnoLetivo = getDados_geralAnoLetivo();

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        this.readyState
        this.status
        this.responseText

        let mensagem = JSON.parse(this.responseText);
        //console.log(myObj);

        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200) {
            mostraTipoAlerta_Geral("formAnoLetivo", "registar", mensagem[0], mensagem[1]);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            carregaTabela_geralAnoLetivo(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);   
            //linhaPintada = false;
        }
        else{
            mostraTipoAlerta_Geral("formAnoLetivo", "registar", "", "");
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("POST", "php/anoLetivo/registarDados.php?"+
        "descritivo="+encodeURIComponent(valoresformAnoLetivo[1])+
        "&descritivo1Periodo="+encodeURIComponent(valoresformAnoLetivo[5])+
        "&dataInicio1Periodo="+encodeURIComponent(valoresformAnoLetivo[6])+
        "&dataFim1Periodo="+encodeURIComponent(valoresformAnoLetivo[7])+
        "&descritivo2Periodo="+encodeURIComponent(valoresformAnoLetivo[9])+
        "&dataInicio2Periodo="+encodeURIComponent(valoresformAnoLetivo[10])+
        "&dataFim2Periodo="+encodeURIComponent(valoresformAnoLetivo[11])+
        "&descritivo3Periodo="+encodeURIComponent(valoresformAnoLetivo[13])+
        "&dataInicio3Periodo="+encodeURIComponent(valoresformAnoLetivo[14])+
        "&dataFim3Periodo="+encodeURIComponent(valoresformAnoLetivo[15])+
        "&descritivo1PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[17])+
        "&dataInicio1PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[18])+
        "&dataFim1PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[19])+
        "&descritivo2PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[21])+
        "&dataInicio2PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[22])+
        "&dataFim2PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[23])+
        "&descritivo3PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[25])+
        "&dataInicio3PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[26])+
        "&dataFim3PausaLetiva="+encodeURIComponent(valoresformAnoLetivo[27]), 
    false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();   
}
