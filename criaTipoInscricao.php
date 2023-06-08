<?php
    session_start();
    
    if (!isset($_SESSION["utilizador_id"])){
        header("Location: ./index.php");
    }
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Royal School</title>
    <!-- ********************************************  Ico  ********************************************  -->
    <link rel="shortcut icon" href="imagens/logo.ico" type="image/x-icon">

    <!-- ********************************************  Style  ********************************************  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> <!-- Bootrap -->
    <link rel="stylesheet" href="css/geral.css"><!-- CSS Geral-->
    <link rel="stylesheet" href="css/tipoInscricao.css"><!-- CSS Perfil-->
    
    <!-- ********************************************  Icons  ********************************************  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/> <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Icons -->
    
    <!-- ********************************************  JavaScript  ********************************************  -->
    <script src="js/geral.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- Alert -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <!-- Icons -->
    <script type="text/javascript">
        //Permitir introdução de apenas valores com duas casas decimais
        $(document).ready(function () {
            $(".floatNumberField").change(function() {
                $(this).val(parseFloat($(this).val()).toFixed(2));
            });
        });
    </script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="navbar-overlay" onclick="toggleMenuOpen()"></div>
            <button type="button" class="buttonNavBar navbar-burger" onclick="toggleMenuOpen()">
                <span class="material-icons">menu</span>
            </button>
            <h1 class="navbar-title">Tipo Inscrição</h1>
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
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="anoLetivo.php">Ano Letivo</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Nível</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="turma.php">Turma</a>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="dropdown-toggle buttonNavBar active" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tesouraria</button>
                    <div class="dropdown-menu dropdownBotao">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao selecionado" href="tipoInscricao.php">Tipo Incrição</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Mensalidade</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Desconto</a>
                    </div>
                </div>
                <div class="btn-group dropdownBotaoPerfil">
                    <button class="dropdown-toggle buttonNavBar iconDropDown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img id="parametroUtilizadorUrlFotoPerfil" class="fotoPerfilNavBar" src=<?php echo "./imagens/perfil/".$_SESSION['utilizador_urlFotografia'];?> alt="fotoPerfil">
                        <a id="parametroUtilizadorPerfil" name="txtParametroUtilizadorPerfil"><?php echo $_SESSION['utilizador_nomePerfil'];?></a>
                    </button>
                    <div class="dropdown-menu dropdownBotao1">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="perfil.php"><i class="fa fa-solid fa-user iconBotao"></i>Perfil</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#"><i class="fa fa-solid fa-language iconBotao"></i>Idioma</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="terminaSessao.php"><i class="fa fa-sign-out iconBotao"></i>Terminar Sessão</a>
                    </div>
                </div>  
            </nav>
        </nav>
    </header>
    <main>
        <section>
            <h4>Criar registo</h4>
            <form name="formTipoInscricao" id= "formTipoInscricao" method="post">
                <div class="form-row">
                    <div class="form-group col-md-12" style="display:none;">
                        <label for="id">Id</label>
                        <input type="text" id="id" name="txtId" class="form-control" placeholder="Id"  required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="descritivo">Descrição</label>
                        <input type="text" id="descritivo" name="txtDescritivo" class="form-control" placeholder="Abc"  autocomplete="off" required>
                    </div>
                </div>
                <hr/>
                <h5>Valor s/IVA</h5>    
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <p><u>Taxa de IVA não aplicada</u> nos valores apresentados.</p>                       
                    </div>
                    <div class="form-group col-md-2">
                        <label for="valorInscricao">Inscrição</label>
                        <input type="number" id="valorInscricao" name="txtValorInscricao" min="0.00" step="0.01" class="floatNumberField form-control" placeholder="0" autocomplete="off" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="valorLivro">Livro</label>
                        <input type="number" id="valorLivro" name="txtValorLivro" min="0.00" step="0.01" class="floatNumberField form-control" placeholder="0" autocomplete="off" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="valorMensalidade">Mensalidade</label>
                        <input type="number" id="valorMensalidade" name="txtValorMensalidade" min="0.00" step="0.01" class="floatNumberField form-control" placeholder="0" autocomplete="off" required>
                    </div>
                </div>
                <hr/>
                <h5>IVA %</h5>    
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <p><u>Percentagem de IVA aplicada</u> nos valores apresentados.</p>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="aplicarIvaTodos" name=txtAplicarIvaTodos>
                            <label class="form-check-label" for="aplicarIvaTodos">Aplicar taxa de IVA a todos os tipos de inscrições</label>
                        </div>                       
                    </div>
                    <div class="form-group col-md-2">
                        <label for="ivaInscricao">Inscrição</label>
                        <input type="number" id="ivaInscricao" name="txtIvaInscricao" min="0.00" step="0.01" class="floatNumberField form-control" placeholder="0" autocomplete="off" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="ivaLivro">Livro</label>
                        <input type="number" id="ivaLivro" name="txtIvaLivro" min="0.00" step="0.01" class="floatNumberField form-control" placeholder="0" autocomplete="off" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="ivaMensalidade">Mensalidade</label>
                        <input type="number" id="ivaMensalidade" name="txtIvaMensalidade" min="0.00" step="0.01" class="floatNumberField form-control" placeholder="0" autocomplete="off" required>
                    </div>
                </div>
                    <div class="row botoesTabela1">
                        <div class="form-group col-lg-7 botoesTabelaDivisoria1">
                            <div class="row"></div> 
                        </div>
                        <div class="form-group col-lg-5 botoesTabelaDivisoria1">
                            <div class="row ">
                                <div class="form-group col-lg-4 botoesTabelaDivisoria2_1">
                                    <button  type="button" id="eliminar" name="eliminar" value="Eliminar" title= "Eliminar" onclick="validaFormulario_eliminarTipoInscricao()" class="btn btn-danger btn-block" id="botaoEliminar" style="margin: auto;">Eliminar <i class="fa fa-trash-o"></i></button>
                                </div>
                                <div class="form-group col-lg-4 botoesTabelaDivisoria2_2">
                                    <button type="button" id="editar" name="editar" value="Editar" title= "Editar" onclick="validaFormulario_editarTipoInscricao()" class="btn btn-warning btn-block" id="botaoEditar" style="margin: auto;" >Editar <i class="fa fa-edit"></i></button>
                                </div>
                                </form>
                                <div class="form-group col-lg-4 botoesTabelaDivisoria2_3">
                                    <button type="button" id="registar" name="registar"  value="Gravar" title= "Registar" onclick="validaFormulario_registarTipoInscricao()" class="btn btn-primary btn-block" id="botaoGravar" style="margin: auto;">Registar <i class="fa fa-save"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </form>
        </section>
        <section class="sectionSeguintes">
            <h4>Consultar registo</h4>
            <form  name="formMostraRegistos" id= "formMostraRegistos" method="post" onchange="recebeFiltrosTabela_mostrarTipoInscricao(1)">
                <div class="tabelaFiltrosDiv">
                    <div class="filtrosNav">
                        <div class="row filtrosTabela1">
                            <div class="form-group col-lg-5 filtrosTabelaDivisoria1">
                                <input class="form-control" type="text" id="pesquisaDescritivo" name="txtPesquisaDescritivo" placeholder="Procurar descritivo.." title= "Filtrar Descritivo">
                            </div>
                            <div class="form-group col-lg-7 filtrosTabelaDivisoria1">
                                <div class="row filtrosTabela2">
                                    <div class="form-group col-lg-5 filtrosTabelaDivisoria2_1">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesNumeroRegistosAlinhamento">
                                            <label class="btn btn-secondary active" for="btnradio1">
                                                <input type="radio" id="ordeDesc" name="txtOrdenacaoRegistos" value="order by 2 desc"> Desc
                                            </label>
                                            <label class="btn btn-secondary" for="btnradio2">
                                                <input type="radio" id="numRegistos20" name="txtNumeroRegistos" value="top 20" > Top20
                                            </label>
                                            <label class="btn btn-secondary" for="btnradio3">
                                                <input type="radio" id="numRegistosTodos" name="txtNumeroRegistos" value=""> Todos
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-4 filtrosTabelaDivisoria2_2">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="botoesOrdenacaoAlinhamento">
                                            <label class="btn btn-secondary active" for="btnradio1">
                                                <input type="radio" id="ordeAsc" name="txtOrdenacaoRegistos" value="order by 2 asc" checked> Asc
                                            </label>
                                            <label class="btn btn-secondary" for="btnradio2">
                                                <input type="radio" id="ordeDesc" name="txtOrdenacaoRegistos" value="order by 2 desc"> Desc
                                            </label>      
                                        </div>
                                    </div>
                                    </form>
                                    <div class="form-group col-lg-3 filtrosTabelaDivisoria2_3">
                                        <button type="button" id="imprimir" name="imprimir"  value="Gravar" title= "Imprimir" onclick="recebeFiltrosTabela_mostrarTipoInscricao(2)" class="btn btn-success btn-block" id="botaoImprimir">Imprimir <i class="fa fa-print"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabelaEncolheX">
                            <div class="tabelaEncolheY">
                                <div id="tabelaTipoInscricao"></div>
                            </div>
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
    <script src="js/tipoInscricao/mostrarTipoInscricao.js"></script>
    <script src="js/tipoInscricao/registarTipoInscricao.js"></script>
    <script src="js/tipoInscricao/editarTipoInscricao.js"></script>
    <script src="js/tipoInscricao/eliminarTipoInscricao.js"></script>
    
</body>
</html>

