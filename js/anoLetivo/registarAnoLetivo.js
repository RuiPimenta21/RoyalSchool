function registar_registarAnoLetivo(){ 
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
            //carregaTabela_mostrarAnoLetivo(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);   
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
    xhttp.open("POST", "php/anoLetivo/registarDados.php?descritivo="+encodeURIComponent(descritivo)+
        "&descritivo1Periodo="+encodeURIComponent(descritivo1Periodo)+
        "&dataInicio1Periodo="+encodeURIComponent(dataInicio1Periodo)+
        "&dataFim1Periodo="+encodeURIComponent(dataFim1Periodo)+
        "&descritivo2Periodo="+encodeURIComponent(descritivo2Periodo)+
        "&dataInicio2Periodo="+encodeURIComponent(dataInicio2Periodo)+
        "&dataFim2Periodo="+encodeURIComponent(dataFim2Periodo)+
        "&descritivo3Periodo="+encodeURIComponent(descritivo3Periodo)+
        "&dataInicio3Periodo="+encodeURIComponent(dataInicio3Periodo)+
        "&dataFim3Periodo="+encodeURIComponent(dataFim3Periodo)+
        "&descritivo1PausaLetiva="+encodeURIComponent(descritivo1PausaLetiva)+
        "&dataInicio1PausaLetiva="+encodeURIComponent(dataInicio1PausaLetiva)+
        "&dataFim1PausaLetiva="+encodeURIComponent(dataFim1PausaLetiva)+
        "&descritivo2PausaLetiva="+encodeURIComponent(descritivo2PausaLetiva)+
        "&dataInicio2PausaLetiva="+encodeURIComponent(dataInicio2PausaLetiva)+
        "&dataFim2PausaLetiva="+encodeURIComponent(dataFim2PausaLetiva)+
        "&descritivo3PausaLetiva="+encodeURIComponent(descritivo3PausaLetiva)+
        "&dataInicio3PausaLetiva="+encodeURIComponent(dataInicio3PausaLetiva)+
        "&dataFim3PausaLetiva="+encodeURIComponent(dataFim3PausaLetiva), 
    false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();   
}

function mostraTipoAlerta_registarAnoLetivo(tipoAlerta){
    if (tipoAlerta == true){
        //gravado
        Swal.fire(
            'A Gravar!',
            'O seu registo foi gravado com sucesso!',
            'success'
        )
        limpaDados_registarAnoLetivo();    
    }
    else{
        //nao gravado
        Swal.fire(
            'Erro!',
            'Erro ao gravar registo!',
            'error'
        )
    }
}

function limpaDados_registarAnoLetivo(){
    document.getElementById("formAnoLetivo").reset();
}