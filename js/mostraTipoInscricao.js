let DefaultNumeroRegistos = "opc1_NumeroRegistos";
let DefaultOrdenacaoRegistos = "opc1_OrdenacaoRegistos";

//carrega a tabela com os 10 primeiros dados e ordenado asc ao abrir a pagina
carregaTabela(DefaultNumeroRegistos, DefaultOrdenacaoRegistos);



function mostraNumeroRegistos(str) {
    numeroRegistos = str
    //console.log(numeroRegistos, ordenacaoRegistos)
    carregaTabela(numeroRegistos, ordenacaoRegistos)
}

function mostraOrdenacaoRegistos(str) {
    ordenacaoRegistos = str
    //console.log(numeroRegistos, ordenacaoRegistos)
    carregaTabela(numeroRegistos, ordenacaoRegistos)
}


//funcao que carrega query para ir buscar os dados
function carregaTabela(numero, ordenacao){
    if (numero == "opc1_NumeroRegistos") {
        numeroRegistos = "top 10"
    } else if (numero == "opc2_NumeroRegistos") {
        numeroRegistos = "top 20"
    } else if (numero == "opc3_NumeroRegistos"){
       numeroRegistos = ""
    }
    else{
        numeroRegistos = "asassas"
    }



    if (ordenacao == "opc1_OrdenacaoRegistos") {
        ordenacaoRegistos = "order by 1 asc"
    } else if(ordenacao == "opc2_OrdenacaoRegistos"){
        ordenacaoRegistos = "order by 1 desc"
    } else {
        ordenacaoRegistos = "asasasasa"
    }

    console.log(numeroRegistos, ordenacaoRegistos)

    /*
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        console.log(this.readyState)
        console.log(this.responseText)
        console.log(this.responseText)
        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200 && this.responseText == "Carregou com sucesso!") {
            console.log("Carregou Tabela com dados")
        }
        else{
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    xhttp.open("GET", "php/mostraTipoInscricao/mostraDados.php?numeroRegistos="+numeroRegistos+"&ordenacaoRegistos="+ordenacaoRegistos, true);
    xhttp.send();
    */
   
    //limpa dados

}








