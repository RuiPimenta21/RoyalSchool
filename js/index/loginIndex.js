function validaFormulario_Index() {

    let email = document.forms["formIndex"]["email"].value;
    let password = document.forms["formIndex"]["password"].value;
 
    if(validaEmailExterno(email) == false){
        faltaCampoEmail_loginIndex();
    }
    else if (password == ""){
        faltaCampoPassword_loginIndex();
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
                dadosInternosErrados_loginIndex()
            }
            else if(mensagemLogin[0] == 2){
                dadosInternosErrados_loginIndex()
            }
            else if (mensagemLogin[0] == 3){
                //console.log("Login com sucesso")
                //console.log("utilizador_id" + mensagemLogin[1])
                //console.log("utilizador_nome" + mensagemLogin[2])
                
                window.location.replace("./index2.php");
                exit(); 
            }
            else if (mensagemLogin[0] == 4){
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
    xhttp.open("POST", "php/index/loginIndex.php?email="+encodeURIComponent(email)+"&password="+encodeURIComponent(password), false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function perdeFocus(){
    let email = document.forms["formIndex"]["email"];
    let password = document.forms["formIndex"]["password"];

    email.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            
            email.blur();
            password.blur();

            validaFormulario_Index()
        }
    });
    password.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {

            email.blur();
            password.blur();

            validaFormulario_Index()
        }
    });
}

function faltaCampoEmail_loginIndex(){
    Swal.fire({
        icon: 'error',
        title: "Email",
        text: 'Por favor introduza uma email válido.',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            document.forms["formIndex"]["email"].focus();
        }
    })
}

function faltaCampoPassword_loginIndex(){
    Swal.fire({
        icon: 'error',
        title: "Password",
        text: 'Por favor introduza uma password válida.',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            document.forms["formIndex"]["password"].focus();
        }
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




