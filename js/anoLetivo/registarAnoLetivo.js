function validaFormulario_registarAnoLetivo() {
    let descritivo = document.forms["formAnoLetivo"]["txtDescritivo"].value;
    let valorInscricao = document.forms["formAnoLetivo"]["txtValorInscricao"].value;
    let valorLivro = document.forms["formAnoLetivo"]["txtValorLivro"].value;
    let valorMensalidade = document.forms["formAnoLetivo"]["txtValorMensalidade"].value;
    let aplicarIvaTodos = document.forms["formAnoLetivo"]["txtAplicarIvaTodos"];
    let ivaInscricao = document.forms["formAnoLetivo"]["txtIvaInscricao"].value;
    let ivaLivro = document.forms["formAnoLetivo"]["txtIvaLivro"].value;
    let ivaMensalidade = document.forms["formAnoLetivo"]["txtIvaMensalidade"].value;
    
    
    if (descritivo == "") {
        faltaCampo_registarCustoInscricao("Descritivo");
        document.forms["formCustoInscricao"]["txtDescritivo"].focus();
    }
    else if (valorInscricao == "") {
        faltaCampo_registarCustoInscricao("Valor Inscrição");
        document.forms["formCustoInscricao"]["txtValorInscricao"].focus();
    }
    else if(valorLivro == "") {
        faltaCampo_registarCustoInscricao("Valor Livro");
        document.forms["formCustoInscricao"]["txtValorLivro"].focus();
    }
    else if(valorMensalidade == "") {
        faltaCampo_registarCustoInscricao("Valor Mensalidade");
        document.forms["formCustoInscricao"]["txtValorMensalidade"].focus();
    }
    else if(ivaInscricao == "") {
        faltaCampo_registarCustoInscricao("IVA Incrição");
        document.forms["formCustoInscricao"]["txtIvaInscricao"].focus();
    }
    else if(ivaLivro == "") {
        faltaCampo_registarCustoInscricao("IVA Livro");
        document.forms["formCustoInscricao"]["txtIvaLivro"].focus();
    }
    else if(ivaMensalidade == "") {
        faltaCampo_registarCustoInscricao("IVA Mensalidade");
        document.forms["formCustoInscricao"]["txtIvaMensalidade"].focus();
    }
    else{

        if(aplicarIvaTodos.checked == true){
            aplicarIvaTodos = "Sim"
        }
        else{
            aplicarIvaTodos = "Não"
        }
        confirmaDados_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
    }  
}