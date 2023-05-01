<?php
$_SESSION['utilizador_nomePerfil'] = "rui";
/*
    session_start();
    
    if (!isset($_SESSION["utilizador_id"])){
        header("Location: ./index.php");
    }

    if (!empty($_POST['fname'])) {
        $_SESSION['utilizador_nomePerfil'] = $_POST['fname'];
    }
*/    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Royal School</title>
    <!-- ********************************************  Ico  ********************************************  -->
    <link rel="shortcut icon" href="imagens/logo.ico" type="image/x-icon">

    <!-- ********************************************  Style  ********************************************  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> <!-- Bootrap -->
    <link rel="stylesheet" href="css/geral.css"><!-- CSS Geral-->
    <link rel="stylesheet" href="css/turma.css"><!-- CSS Ano Letivo-->
    
    <!-- ********************************************  Icons  ********************************************  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/> <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Icons -->
    
    <!-- ********************************************  JavaScript  ********************************************  -->
    <script src="js/geral.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- Alert -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <!-- Icons -->
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="navbar-overlay" onclick="toggleMenuOpen()"></div>
            <button type="button" class="buttonNavBar navbar-burger" onclick="toggleMenuOpen()">
                <span class="material-icons">menu</span>
            </button>
            <h1 class="navbar-title">Turma</h1>
            <nav class="navbar-menu">
                <button type="button" class="buttonNavBar buttonHover">Home</button>
                <button type="button" class="buttonNavBar buttonHover" href="#">Incrição</button>
                <div class="btn-group">
                    <button class="dropdown-toggle buttonNavBar" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Utilizadores</button>
                    <div class="dropdown-menu dropdownBotao">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Professor</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Aluno</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Enc. Educação</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Funcionário</a>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="dropdown-toggle buttonNavBar" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ano Escolar</button>
                    <div class="dropdown-menu dropdownBotao">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Ano Letivo</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Nível</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao selecionado" href="#">Turma</a>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="dropdown-toggle buttonNavBar" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tesouraria</button>
                    <div class="dropdown-menu dropdownBotao">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Tipo Incrição</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Mensalidade</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Desconto</a>
                    </div>
                </div>
                <div class="btn-group dropdownBotaoPerfil active">
                    <button class="dropdown-toggle buttonNavBar iconDropDown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="imagens/Pessoas.png" alt="fotoPerfil">
                        <a id="parametroUtilizadorPerfil" name="txtParametroUtilizadorPerfil"><?php echo $_SESSION['utilizador_nomePerfil'];?></a>
                    </button>
                    <div class="dropdown-menu dropdownBotao1">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#"><i class="fa fa-solid fa-user iconBotao"></i>Perfil</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#"><i class="fa fa-solid fa-language iconBotao"></i>Idioma</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#"><i class="fa fa-sign-out iconBotao"></i>Terminar Sessão</a>
                    </div>
                </div>  
            </nav>
        </nav>
    </header>
    <main>
        <section>
            <h4>Criar registo</h4>
            <form name="formPerfil" id= "formPerfil" method="post" enctype="multipart/form-data">
                <div class="form-row">
                    <div class="form-group col-md-12" style="display:none;">
                        <label for="id">Id</label>
                        <input type="text" id="id" name="txtId" class="form-control" value="<?php echo $_SESSION['utilizador_id'];?>" autocomplete="off" readonly required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="descritivo">Descrição</label>
                        <input type="text" id="descritivo" name="txtDescritivo" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="dropdown col-md-2">
                        <label for="inputState">Ano Letivo</label>
                        <select id="inputState" class="form-control">
                            <option selected></option>
                            <option>Adultos 2020</option>
                            <option>Crianças 2021</option>
                            <option>Adolescentes 2022</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="dataInicioPeriodo">Data de Início</label>
                        <input type="month" id="dataInicioPeriodo" name="txtDataInicioPeriodo" class="form-control" readonly required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="dataFimPeriodo">Data de Início</label>
                        <input type="month" id="dataFimPeriodo" name="txtDataFimPeriodo" class="form-control" readonly required>
                    </div>
                </div>
                <div class=form-row>
                    <div class="dropdown col-md-2">
                        <label for="inputState">Nível</label>
                        <select id="inputState" class="form-control">
                            <option selected></option>
                            <option>A1</option>
                            <option>A2</option>
                            <option>B1</option>
                            <option>B2</option>
                            <option>C1</option>
                            <option>C2</option>
                        </select>
                    </div>
                    <div class="dropdown col-md-2">
                        <label for="inputState">Idioma</label>
                        <select id="inputState" class="form-control">
                            <option selected></option>
                            <option>Inglês</option>
                            <option>Françês</option>
                            <option>Alemão</option>
                            <option>Mandarim</option>
                            <option>Portugês</option>
                        </select>
                    </div>
                </div>
                <hr/>
                <h5>Horário</h5>
                <div class="form-row">
                    <div class="form-group col-md-6">     
                        <label for="observacao">Observações</label>                  
                        <textarea type="textarea" id="observacao"  name="txtObservacao" rows="8" class="form-control" autocomplete="off"></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputState">Professor</label>
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Prof. Patrícia</option>
                                    <option>Prof. Gabi</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Dia</label>
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Segunda-Feira</option>
                                    <option>Terça-Feira</option>
                                    <option>Quarta-Feira</option>
                                    <option>Quinta-Feira</option>
                                    <option>Sexta-Feira</option>
                                    <option>Sábado</option>
                                    <option>Domingo</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="dataInicioPeriodo">Hora de Início</label>
                                <input type="time" id="dataInicioPeriodo" name="txtDataInicioPeriodo" class="form-control" required>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="dataInicioPeriodo">Hora de Fim</label>
                                <input type="time" id="dataFimPeriodo" name="txtDataFimPeriodo" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Prof. Patrícia</option>
                                    <option>Prof. Gabi</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Segunda-Feira</option>
                                    <option>Terça-Feira</option>
                                    <option>Quarta-Feira</option>
                                    <option>Quinta-Feira</option>
                                    <option>Sexta-Feira</option>
                                    <option>Sábado</option>
                                    <option>Domingo</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="time" id="dataInicioPeriodo" name="txtDataInicioPeriodo" class="form-control" required>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="time" id="dataFimPeriodo" name="txtDataFimPeriodo" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Prof. Patrícia</option>
                                    <option>Prof. Gabi</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Segunda-Feira</option>
                                    <option>Terça-Feira</option>
                                    <option>Quarta-Feira</option>
                                    <option>Quinta-Feira</option>
                                    <option>Sexta-Feira</option>
                                    <option>Sábado</option>
                                    <option>Domingo</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="time" id="dataInicioPeriodo" name="txtDataInicioPeriodo" class="form-control" required>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="time" id="dataFimPeriodo" name="txtDataFimPeriodo" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Prof. Patrícia</option>
                                    <option>Prof. Gabi</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected></option>
                                    <option>Segunda-Feira</option>
                                    <option>Terça-Feira</option>
                                    <option>Quarta-Feira</option>
                                    <option>Quinta-Feira</option>
                                    <option>Sexta-Feira</option>
                                    <option>Sábado</option>
                                    <option>Domingo</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="time" id="dataInicioPeriodo" name="txtDataInicioPeriodo" class="form-control" required>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="time" id="dataFimPeriodo" name="txtDataFimPeriodo" class="form-control" required>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h5>Alunos</h5>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="tabelaFiltrosDiv50Perc">
                            <div class="filtrosNav">
                                <form name="formMostraRegistos" id= "formMostraRegistos" method="post" onchange="recebeFiltrosTabela_mostrarTipoInscricao(1)">
                                    <div class="divRadioGroup">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesOrdenacaoAlinhamento">
                                            <label class="btn btn-secondary active" >
                                                <input type="radio" id="ordeAsc" name="txtOrdenacaoRegistos" value="order by 2 asc" checked> Asc
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" id="ordeDesc" name="txtOrdenacaoRegistos" value="order by 2 desc"> Desc
                                            </label>
                                        </div>
                                    </div>
                                    <div class="divRadioGroup">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesNumeroRegistosAlinhamento">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" id="numRegistos10" name="txtNumeroRegistos" value="top 10" checked> Top10
                                            </label>
                                                <label class="btn btn-secondary">
                                            <input type="radio" id="numRegistos20" name="txtNumeroRegistos" value="top 20" > Top20
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" id="numRegistosTodos" name="txtNumeroRegistos" value=""> Todos
                                            </label>
                                        </div> 
                                    </div>
                                    <div class="divRadioGroup form-group col-md-4">
                                        <input class="form-control" type="text" id="pesquisaDescritivo" name="txtPesquisaDescritivo" placeholder="Procurar descritivo.." title= "Filtrar Descritivo">
                                    </div>
                                </form>
                            </div>
                            <div class="tabelaEncolheX">
                                <div class="tabelaEncolheY">
                                    <div id="tabelaTipoInscricao"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="tabelaFiltrosDiv50Perc">
                            <div class="filtrosNav">
                                <form name="formMostraRegistos" id= "formMostraRegistos" method="post" onchange="recebeFiltrosTabela_mostrarTipoInscricao(1)">
                                    <div class="divRadioGroup">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesOrdenacaoAlinhamento">
                                            <label class="btn btn-secondary active" >
                                                <input type="radio" id="ordeAsc" name="txtOrdenacaoRegistos" value="order by 2 asc" checked> Asc
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" id="ordeDesc" name="txtOrdenacaoRegistos" value="order by 2 desc"> Desc
                                            </label>
                                        </div>
                                    </div>
                                    <div class="divRadioGroup">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesNumeroRegistosAlinhamento">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" id="numRegistos10" name="txtNumeroRegistos" value="top 10" checked> Top10
                                            </label>
                                                <label class="btn btn-secondary">
                                            <input type="radio" id="numRegistos20" name="txtNumeroRegistos" value="top 20" > Top20
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" id="numRegistosTodos" name="txtNumeroRegistos" value=""> Todos
                                            </label>
                                        </div> 
                                    </div>
                                    <div class="divRadioGroup form-group col-md-4">
                                        <input class="form-control" type="text" id="pesquisaDescritivo" name="txtPesquisaDescritivo" placeholder="Procurar descritivo.." title= "Filtrar Descritivo">
                                    </div>
                                </form>
                            </div>
                            <div class="tabelaEncolheX">
                                <div class="tabelaEncolheY">
                                    <div id="tabelaTipoInscricao"></div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div> 
                <button type="button" value="Editar" title= "Editar" onclick="validaFormulario_editarPerfil()" class="btn btn-warning" id="botaoEditar" name="submit">Editar<i class="fa fa-edit"></i></button>
            </form>
        </section>
        <section class="sectionSeguintes">
            <h4>Consultar registo</h4>
            <div class="tabelaFiltrosDiv">
                <div class="filtrosNav">
                    <div class="divRadioGroup">                              
                        <button type="button" class="btn btn-success"  title= "Imprimir" onclick="recebeFiltrosTabela_mostrarTipoInscricao(2)">ReportViwer <i class="fa fa-print"></i></button>
                    </div>
                    <form  name="formMostraRegistos" id= "formMostraRegistos" method="post" onchange="recebeFiltrosTabela_mostrarTipoInscricao(1)">
                        <div class="divRadioGroup">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesOrdenacaoAlinhamento">
                                <label class="btn btn-secondary active" >
                                    <input type="radio" id="ordeAsc" name="txtOrdenacaoRegistos" value="order by 2 asc" checked> Asc
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" id="ordeDesc" name="txtOrdenacaoRegistos" value="order by 2 desc"> Desc
                                </label>
                            </div>
                        </div>
                        <div class="divRadioGroup">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesNumeroRegistosAlinhamento">
                                <label class="btn btn-secondary active">
                                    <input type="radio" id="numRegistos10" name="txtNumeroRegistos" value="top 10" checked> Top10
                                </label>
                                    <label class="btn btn-secondary">
                                <input type="radio" id="numRegistos20" name="txtNumeroRegistos" value="top 20" > Top20
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" id="numRegistosTodos" name="txtNumeroRegistos" value=""> Todos
                                </label>
                            </div> 
                        </div>
                        <div class="divRadioGroup form-group col-md-4">
                            <input class="form-control" type="text" id="pesquisaDescritivo" name="txtPesquisaDescritivo" placeholder="Procurar descritivo.." title= "Filtrar Descritivo">
                        </div>
                    </form>
                </div>
                <div class="tabelaEncolheX">
                    <div class="tabelaEncolheY">
                        <div id="tabelaTipoInscricao"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div>
            <p>RoyalSchool | 2022</p>
        </div>
        <div>
            <a href="https://www.facebook.com/RoyalCollegeVizela" target="_blank" rel="extern"><i class="fa fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/royalcollegevizela/" target="_blank" rel="extern"><i class="fa fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send?phone=351915809197" target="_blank" rel="extern"><i class="fa fa-whatsapp"></i></a>
        </div>
        <div>
            <a href="https://royalcollege.pt/"><img src="imagens/logoFooter.png" alt="Royal School Rodapé"></a>
        </div>
    </footer>
    <div id="txtErro"></div>

    <!--JavaScript para BootStrap-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!--Por página-->
    <script src="js/perfil/mostrarPerfil.js"></script>
    <script src="js/perfil/editarPerfil.js"></script>
</body>
</html>