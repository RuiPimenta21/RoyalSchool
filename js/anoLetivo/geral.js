function getDados_geralAnoLetivo(){
    let id = document.forms["formAnoLetivo"]["txtId"].value;                                                            //[00]
    let descritivo = document.forms["formAnoLetivo"]["txtDescritivo"].value;                                            //[01]
    let dataInicio = document.forms["formAnoLetivo"]["txtDataInicio"].value                                             //[02]
    let dataFim = document.forms["formAnoLetivo"]["txtDataFim"].value                                                   //[03]

    let id1Periodo = document.forms["formAnoLetivo"]["txtId1Periodo"].value;                                            //[04]
    let descritivo1Periodo = document.forms["formAnoLetivo"]["txtDescritivo1Periodo"].value;                            //[05]
    let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;                             //[06]
    let dataFim1Periodo = document.forms["formAnoLetivo"]["txtDataFim1Perido"].value;                                   //[07]

    let id2Periodo = document.forms["formAnoLetivo"]["txtId2Periodo"].value;                                            //[08]
    let descritivo2Periodo = document.forms["formAnoLetivo"]["txtDescritivo2Periodo"].value;                            //[09]
    let dataInicio2Periodo = document.forms["formAnoLetivo"]["txtDataInicio2Perido"].value;                             //[10]
    let dataFim2Periodo = document.forms["formAnoLetivo"]["txtDataFim2Perido"].value;                                   //[11]

    let id3Periodo = document.forms["formAnoLetivo"]["txtId3Periodo"].value;                                            //[12]
    let descritivo3Periodo = document.forms["formAnoLetivo"]["txtDescritivo3Periodo"].value;                            //[13]
    let dataInicio3Periodo = document.forms["formAnoLetivo"]["txtDataInicio3Perido"].value;                             //[14]
    let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;                                   //[15]

    let id1Pausa = document.forms["formAnoLetivo"]["txtId1Pausa"].value;                                                //[16]
    let descritivo1PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"].value;                    //[17]
    let dataInicio1PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].value;                    //[18]
    let dataFim1PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].value;                          //[19]

    let id2Pausa = document.forms["formAnoLetivo"]["txtId2Pausa"].value;                                                //[20]
    let descritivo2PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"].value;                    //[21]
    let dataInicio2PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].value;                    //[22]
    let dataFim2PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].value;                          //[23]

    let id3Pausa = document.forms["formAnoLetivo"]["txtId3Pausa"].value;                                                //[24]
    let descritivo3PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"].value;                    //[25]
    let dataInicio3PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].value;                    //[26]
    let dataFim3PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].value;                          //[27]

    let valoresformAnoLetivo = [id,descritivo,dataInicio,dataFim,id1Periodo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,id2Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,id3Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,id1Pausa,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,id2Pausa,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,id3Pausa,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva];

    return valoresformAnoLetivo;
}

function validaFormulario_geralAnoLetivo(opcaoSelecionada){

    let valoresformAnoLetivo = getDados_geralAnoLetivo();

    if (valoresformAnoLetivo[1] == "") {
        faltaCampo_Geral("Descritivo");
        document.forms["formAnoLetivo"]["txtDescritivo"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[5] == "") {
        faltaCampo_Geral("Descritivo 1º Período");
        document.forms["formAnoLetivo"]["txtDescritivo1Periodo"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[6] == "") {
        faltaCampo_Geral("Data de Início 1º Período");
        document.forms["formAnoLetivo"]["txtDataInicio1Perido"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[7] == "") {
        faltaCampo_Geral("Data de Fim 1º Período");
        document.forms["formAnoLetivo"]["txtDataFim1Perido"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[9] == "") {
        faltaCampo_Geral("Descritivo 2º Período");
        document.forms["formAnoLetivo"]["txtDescritivo2Periodo"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[10] == "") {
        faltaCampo_Geral("Data de Início 2º Período");
        document.forms["formAnoLetivo"]["txtDataInicio2Perido"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[11] == "") {
        faltaCampo_Geral("Data de Fim 2º Período");
        document.forms["formAnoLetivo"]["txtDataFim2Perido"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[13] == "") {
        faltaCampo_Geral("Descritivo 3º Período");
        document.forms["formAnoLetivo"]["txtDescritivo3Periodo"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[14] == "") {
        faltaCampo_Geral("Data de Início 3º Período");
        document.forms["formAnoLetivo"]["txtDataInicio3Perido"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[15] == "") {
        faltaCampo_Geral("Data de Fim 3º Período");
        document.forms["formAnoLetivo"]["txtDataFim3Perido"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[17] == "") {
        faltaCampo_Geral("Descritivo do Natal");
        document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[18] == "") {
        faltaCampo_Geral("Data de Início do Natal");
        document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[19] == "") {
        faltaCampo_Geral("Data de Fim do Natal");
        document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[21] == "") {
        faltaCampo_Geral("Descritivo do Carnaval");
        document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[22] == "") {
        faltaCampo_Geral("Data de Início do Carnaval");
        document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[23] == "") {
        faltaCampo_Geral("Data de Fim do Carnaval");
        document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[25] == "") {
        faltaCampo_Geral("Descritivo da Páscoa");
        document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[26] == "") {
        faltaCampo_Geral("Data de Início da Páscoa");
        document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].focus();
        return false;
    }
    else if (valoresformAnoLetivo[27] == "") {
        faltaCampo_Geral("Data de Fim da Páscoa");
        document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].focus();
        return false;
    }
    else{
        intervaloDatasValidado = validaIntervaloDatas_geralAnoLetivo()
        if(intervaloDatasValidado == true){
            confirmaDados_geralAnoLetivo(opcaoSelecionada)
        }
    }
} 

function validaIntervaloDatas_geralAnoLetivo(){

    let valoresformAnoLetivo = getDados_geralAnoLetivo();

    //Periodo
    if(valoresformAnoLetivo[6] > valoresformAnoLetivo[7]){
        dataInvalida_geralAnoLetivo("A Data de Início do 1º Período não pode ser superior a Data de Fim do 1º Período.");
        return false;
    }
    else if(valoresformAnoLetivo[10] > valoresformAnoLetivo[11]){
        dataInvalida_geralAnoLetivo("A Data de Início do 2º Período não pode ser superior a Data de Fim do 2º Período.");
        return false;
    }
    else if(valoresformAnoLetivo[14] > valoresformAnoLetivo[15]){
        dataInvalida_geralAnoLetivo("A Data de Início do 3º Período não pode ser superior a Data de Fim do 3º Período.");
        return false;
    }
    else if(valoresformAnoLetivo[7] >= valoresformAnoLetivo[10]){
        dataInvalida_geralAnoLetivo("A Data de Fim do 1º Período não pode ser igual ou superior a Data de Início do 2º Período.");
        return false;
    }
    else if(valoresformAnoLetivo[11] >= valoresformAnoLetivo[14]){
        dataInvalida_geralAnoLetivo("A Data de Fim do 2º Período não pode ser igual ou superior a Data de Início do 3º Período.");
        return false;
    }
    //Pausa Letiva
    else if(valoresformAnoLetivo[18] > valoresformAnoLetivo[19]){
        dataInvalida_geralAnoLetivo("A Data de Início da 1º Pausa não pode ser superior a Data de Fim da 1º Pausa.");
        return false;
    }
    else if(valoresformAnoLetivo[22] > valoresformAnoLetivo[23]){
        dataInvalida_geralAnoLetivo("A Data de Início da 2º Pausa não pode ser superior a Data de Fim da 2º Pausa.");
        return false;
    }
    else if(valoresformAnoLetivo[26] > valoresformAnoLetivo[27]){
        dataInvalida_geralAnoLetivo("A Data de Início da 3º Pausa não pode ser superior a Data de Fim da 3º Pausa.");
        return false;
    }
    else if(valoresformAnoLetivo[19] >= valoresformAnoLetivo[22]){
        dataInvalida_geralAnoLetivo("A Data de Fim da 1º Pausa não pode ser igual ou superior a Data de Início 2º Pausa.");
        return false;
    }
    else if(valoresformAnoLetivo[23] >= valoresformAnoLetivo[26]){
        dataInvalida_geralAnoLetivo("A Data de Fim da 2º Pausa não pode ser igual ou superior a Data de Início 3º Pausa.");
        return false;
    }
    else if(valoresformAnoLetivo[6] >= valoresformAnoLetivo[18]){
        dataInvalida_geralAnoLetivo("A Data de Início do 1º Período não pode ser igual ou superior a Data de Início da 1º Pausa.");
        return false;
    }
    else if(valoresformAnoLetivo[27] >= valoresformAnoLetivo[15]){
        dataInvalida_geralAnoLetivo("A Data de Fim da 3º Pausa não pode ser igual ou superior Data de Fim do 3º Período.");
        return false;
    }
    else{
        return true;
    }
}

function confirmaDados_geralAnoLetivo(opcaoSelecionada){
    mostraInfo_geralAnoLetivo()
    
    let titulo = ""
    let botao = ""
    
    if(opcaoSelecionada == 1){
        titulo = "Predente registar?"
        botao = 'Sim, registar!'
    }
    else if(opcaoSelecionada == 2){
        titulo = "Predente editar?"
        botao = 'Sim, editar!'
    }
    else if(opcaoSelecionada == 3){
        titulo = "Predente eliminar?"
        botao = 'Sim, eliminar!'
    }
    
    Swal.fire({
        title: titulo,
        html: '<div id="txtTabela">Este texto vai ser substituido pela tabela</div>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: botao
    }).then((result) => {
        if (result.isConfirmed) {
            if(opcaoSelecionada == 1){
                registar_registarAnoLetivo()
            }
            else if(opcaoSelecionada == 2){

            }
            else if(opcaoSelecionada == 3){

            }
            //editar_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva);
        }
    })
}

function mostraInfo_geralAnoLetivo(campo) {
    let valoresformAnoLetivo = getDados_geralAnoLetivo();
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("POST", "php/anoLetivo/mostraInfo.php?"+
        "descritivo="+encodeURIComponent(valoresformAnoLetivo[1])+
        "&dataInicio="+encodeURIComponent(valoresformAnoLetivo[2])+
        "&dataFim="+encodeURIComponent(valoresformAnoLetivo[3]), 
    true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function dataInvalida_geralAnoLetivo(campo){
    Swal.fire({
        icon: 'error',
        title: 'Datas inválidas.',
        text: campo ,
    })
}