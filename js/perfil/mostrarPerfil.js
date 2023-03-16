let utilizadorId = "";


carregaDados_mostarPerfil();

function carregaDados_mostarPerfil(){
    utilizadorId = document.forms["formPerfil"]["txtId"].value;

    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

    document.getElementById("txtErro").style.display = "none";
    document.getElementById("txtErro").style.visibility = "none";
    document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
    this.readyState
    this.status
    this.responseText

    const mensagem = JSON.parse(this.responseText);
    //console.log(myObj);

    //operacao está CONCLUIDA e resposta está OK
    if (this.readyState == 4 && this.status == 200) {
        console.lo(mensagem[0]);
    }
    else{    
        document.getElementById("txtErro").style.display = "block";
        document.getElementById("txtErro").style.visibility = "visible";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";  
    };
    //Encoding
    xhttp.open("GET", "php/perfil/mostrarDados.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
    }

}
