function validaFormulario_Index() {

    let email = document.forms["formIndex"]["email"].value;
    let password = document.forms["formIndex"]["password"].value;
 
    if(validaEmailExterno(email) == false){
        faltaCampoEmail_loginIndex();
        document.forms["formIndex"]["email"].focus();
    }
    else{
        //valida validaEmailInterno agora
        validaEmailInterno(email, password)
    }
}

function validaEmailExterno(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

function validaEmailInterno(email, password){
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        this.readyState
        this.status
        this.responseText

        const mensagemLogin = JSON.parse(this.responseText);
        //console.log(myObj);

        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200) {
            if(mensagemLogin[0] == 1){
                faltaCampoEmail_loginIndex()
            }
            else if(mensagemLogin[0] == 2){
                dadosInternosErrados_loginIndex()
            }
        }
        else{   
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("GET", "php/index/loginIndex.php?email="+encodeURIComponent(email)+"&password="+encodeURIComponent(password), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function faltaCampoEmail_loginIndex(){
    Swal.fire({
        icon: 'error',
        title: "Email",
        text: 'Por favor introduza uma email válido.',
    })
}

function dadosInternosErrados_loginIndex(){
    Swal.fire({
        icon: 'error',
        title: 'Dados de acesso errados!',
        text: 'Por favor introduza email e passord válidos!',
        footer: '<a href="">Recuperar passord.</a>'
      })
}




