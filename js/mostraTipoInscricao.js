let DefaultNumeroRegistos = "top 10";
let DefaultOrdenacaoRegistos = "order by 1 asc";

//carrega a tabela com os 10 primeiros dados e ordenado asc ao abrir a pagina
carregaTabela(DefaultNumeroRegistos, DefaultOrdenacaoRegistos);



function recebeFiltrosTabela(){
    var numeroRegistos = document.forms["formMostraRegistos"]["txtNumeroRegistos"].value;
    var ordenacaoRegistos = document.forms["formMostraRegistos"]["txtOrdenacaoRegistos"].value;

    carregaTabela(numeroRegistos,ordenacaoRegistos)
}



//funcao que carrega query para ir buscar os dados
function carregaTabela(numeroRegistos, ordenacaoRegistos){
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
            document.getElementById("tabelaTipoInscricao").style.display = "inline";
            document.getElementById("tabelaTipoInscricao").style.visibility = "visible";
            document.getElementById("tabelaTipoInscricao").innerHTML = this.responseText;
        }else{          
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    }
    xhttp.open("GET", "php/mostraTipoInscricao/mostraDados.php?numeroRegistos="+numeroRegistos+"&ordenacaoRegistos="+ordenacaoRegistos, true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
    
    
    
    
    
    
    
    
    
    
    
    /*const xhttp = new XMLHttpRequest();
   
    xhttp.onreadystatechange = function() {

        document.getElementById("tabelaTipoInscricao").style.display = "none";
        document.getElementById("tabelaTipoInscricao").style.visibility = "none";
        document.getElementById("tabelaTipoInscricao").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
              
        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200) {
            console.log("Carregou Tabela com dados")
            xhttp.onload = function() {
                document.getElementById("tabelaTipoInscricao").innerHTML = this.responseText;
            }
        }
        else{
            document.getElementById("tabelaTipoInscricao").style.display = "block";
            document.getElementById("tabelaTipoInscricao").style.visibility = "visible";
            document.getElementById("tabelaTipoInscricao").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    xhttp.open("GET", "php/mostraTipoInscricao/mostraDados.php?numeroRegistos="+numeroRegistos+"&ordenacaoRegistos="+ordenacaoRegistos, true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();

    */
}








