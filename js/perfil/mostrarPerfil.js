let utilizadorId = "";
let utilizadorPassword = "";


carregaDados_mostarPerfil();

function carregaDados_mostarPerfil(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        
        this.readyState
        this.status
        this.responseText

        const mensagem = JSON.parse(this.responseText);
        //console.log(myObj);

        if (this.readyState == 4 && this.status == 200) {

          // aqui manda valores para textbox
          $(document.forms["formPerfil"]["txtObservacao"]).val(mensagem[1]);
          $(document.forms["formPerfil"]["txtEmail"]).val(mensagem[2]);
          $(document.forms["formPerfil"]["txtNome"]).val(mensagem[3]);
          $(document.forms["formPerfil"]["txtNomePerfil"]).val(mensagem[4]);
          $(document.forms["formPerfil"]["txtPassword"]).val(mensagem[5]);
          $(document.forms["formPerfil"]["txtCC"]).val(mensagem[6]);
          $(document.forms["formPerfil"]["txtDataNascimento"]).val(mensagem[7]);
          $(document.forms["formPerfil"]["txtAcesso"]).val(mensagem[8]);
          $(document.forms["formPerfil"]["txtPais"]).val(mensagem[9]);
          $(document.forms["formPerfil"]["txtDistrito"]).val(mensagem[10]);
          $(document.forms["formPerfil"]["txtConcelho"]).val(mensagem[11]);
          $(document.forms["formPerfil"]["txtMorada"]).val(mensagem[12]);
          $(document.forms["formPerfil"]["txtNif"]).val(mensagem[13]);
          $(document.forms["formPerfil"]["txtCodigoPostal"]).val(mensagem[14]);
          $(document.forms["formPerfil"]["txtTelemovel"]).val(mensagem[15]);


          document.getElementById('parametroUtilizadorPerfil').innerHTML = mensagem[4];
          carregaImagem_mostrarPerfil("parametroUtilizadorUrlFotoPerfil","imagens/perfil/"+mensagem[0])
          carregaImagem_mostrarPerfil("myImg","imagens/perfil/"+mensagem[0])

        }
        else{          
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    }
    //Encoding
    xhttp.open("POST", "php/perfil/mostraDados.php", false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();

}

function carregaImagem_mostrarPerfil(imgElement, imgURL){    
  // cria um novo timestamp 
  var timestamp = new Date().getTime();  
  var el = document.getElementById(imgElement);  
  var queryString = "?t=" + timestamp;    
  el.src = imgURL + queryString;    
} 

function mostrarPassword_mostrarPerfil() {
    var x = document.forms["formPerfil"]["txtPassword"];
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
