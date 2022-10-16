function validaFormularioTipoIncricao() {
    var descritivo = document.forms["formTipoInscricao"]["txtDescritivo"].value;
    var valorInscricao = document.forms["formTipoInscricao"]["txtValorInscricao"].value;
    var valorLivro = document.forms["formTipoInscricao"]["txtValorLivro"].value;
    var valorMensalidade = document.forms["formTipoInscricao"]["txtValorMensalidade"].value;
    
    
    if (descritivo == "") {
        faltaCampo("Descritivo");
        document.forms["formTipoInscricao"]["txtDescritivo"].focus();
    }
    else if (valorInscricao == "") {
        faltaCampo("Valor Inscrição");
        document.forms["formTipoInscricao"]["txtValorInscricao"].focus();
    }
    else if(valorLivro == "") {
        faltaCampo("Valor Livro");
        document.forms["formTipoInscricao"]["txtValorLivro"].focus();
    }
    else if(valorMensalidade == "") {
        faltaCampo("Valor Mensalidade");
        document.forms["formTipoInscricao"]["txtValorMensalidade"].focus();
    }
    else{
        guardaCampo(descritivo, valorInscricao, valorLivro, valorMensalidade);
        mostraTipoInscricaoGravar(descritivo, valorInscricao, valorLivro, valorMensalidade);
    }  
}
function faltaCampo(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}
function guardaCampo(descritivo, valorInscricao, valorLivro, valorMensalidade){
    Swal.fire({
        title: 'Pretende gravar?',
        html: '<div id="txtTabela">Este texto vai ser substituido pela tabela</div>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, gravar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Gravar!',
            'O seu registo foi gravado com sucesso!',
            'success'
            )
        }
        limpaDados();
    })
}
function mostraTipoInscricaoGravar(descritivo, valorInscricao, valorLivro, valorMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    xhttp.open("GET", "php/getDadosFormularioTipoInscricao.php?descritivo="+descritivo+"&valorInscricao="+valorInscricao+"&valorLivro="+valorLivro+"&valorMensalidade="+valorMensalidade, true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();

    console.log (xhttp);
}
function limpaDados(){
    document.getElementById("formTipoInscricao").reset();
}
