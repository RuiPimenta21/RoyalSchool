const toggleMenuOpen = () => document.body.classList.toggle("open");

function mostrarPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }






  //*************************************************************************************************
function faltaCampo_Geral(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function mostraTipoAlerta_Geral(formulario, opcaoSelecionada, resultado, mensagem){
    if (mensagem !== "" && resultado !== ""){
        Swal.fire(
            'A ' + opcaoSelecionada + '!',
            mensagem,
            resultado
        )
        if(resultado = "success"){
          limpaDados_editarCustoInscricao(formulario); 
        }     
    }
    else{
        Swal.fire(
            'Erro!',
            'Ocorreu um erro durante o processo, atualize a página!',
            'error'
        )
    }
}

function limpaDados_Geral(formulario){
  document.getElementById(formulario).reset();
}