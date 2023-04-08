<?php
    session_start();
    
    if (!isset($_SESSION["utilizador_id"])){
        header("Location: ./index.php");
    }

    if (!empty($_POST['fname'])) {
        $_SESSION['utilizador_perfil'] = $_POST['fname'];
    }
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
    <link rel="stylesheet" href="css/perfil.css"><!-- CSS Perfil-->
    
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

        //Permitir que a imagem apareça de imediato quando selecionado
        window.addEventListener('load', function() {
            document.querySelector('input[type="file"]').addEventListener('change', function() {
                if(validaFotografia_editarPerfil()){
                    if (this.files && this.files[0]) {
                        var img = document.querySelector('img.imagemPerfilUpload');
                        img.onload = () => {
                            URL.revokeObjectURL(img.src); 
                        }
                        img.src = URL.createObjectURL(this.files[0]);
                    }
                }
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
            <h1 class="navbar-title">Perfil</h1>
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
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Turma</a>
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
                        <a id="parametroUtilizadorPerfil" name="txtParametroUtilizadorPerfil"><?php echo $_SESSION['utilizador_perfil'];?></a>
                    </button>
                    <div class="dropdown-menu dropdownBotao1">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao selecionado" href="#"><i class="fa fa-solid fa-user iconBotao"></i>Perfil</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#"><i class="fa fa-solid fa-language iconBotao"></i>Idioma</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#"><i class="fa fa-sign-out iconBotao"></i>Terminar Sessão</a>
                    </div>
                </div>  
            </nav>
        </nav>
    </header>
    <main>
        <section class="sectionUnica">
            <h4>Editar Perfil</h4>
            <form name="formPerfil" id= "formPerfil" method="post">
                <div class="form-row">
                    <div class="form-group col-md-12" style="display:true;">
                        <label for="id">Id</label>
                        <input type="text" id="id" name="txtId" class="form-control" value="<?php echo $_SESSION['utilizador_id'];?>" autocomplete="off" readonly required>
                    </div>
                </div>
                <div class="form-row">
                    <!--
                    <div class="form-group col-md-2">
                        <p style="margin-bottom: 0.5rem; visibility: hidden;">Fotografia</p>
                        <p><label style="text-align: center; display: block;"  for="customFile2"><img src="./imagens/utilizadores/WhatsApp Image 2021-09-10 at 16.50.07.jpeg" alt="example placeholder" class="imagemPerfilUpload"/></label></p>
                        <p><input type="file" class="form-control d-none" id="customFile2"/></p>
                    </div>
                    -->
                      <!--
                    <div class="form-group col-md-2">
                        <img id="myImg" class="imagemPerfilUpload" src="./imagens/perfil/perfilStandard.png">
                        <br>
                        <input type="file"  id="fileToUpload" accept=".jpg,.jpeg,.png" onchange="validateFileType()"/>
                        <br>
                    </div>

                    -->
                    <div class="form-group col-md-2">
                        <p style="margin-bottom: 0.5rem; visibility: hidden;">Fotografia</p>
                        <p><label style="text-align: center; display: block;"  for="fotografia"><img id="myImg" src="./imagens/perfil/perfilStandard.png" alt="example placeholder" class="imagemPerfilUpload"/></label></p>
                        <p><input type="file" id="fotografia" name="txtFotografia" accept=".jpg,.jpeg,.png" class="form-control d-none"/></p>
                    </div>
                    <div class="form-group col-md-10">
                        <label for="observacao">Observações</label>
                        <textarea type="textarea" id="observacao"  name="txtObservacao" rows="8" class="form-control" autocomplete="off"></textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="txtEmail" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="nomePerfil">Nome Perfil</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend"><i class="fa fa-user-o" style="font-size:16px"></i></span>
                            </div>
                            <input type="text" id="nomePerfil" name="txtNomePerfil" class="form-control" value="<?php echo $_SESSION['utilizador_perfil'];?>" aria-describedby="inputGroupPrepend" autocomplete="off" readonly required>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="password">Password</label>
                        <div class="input-group">
                            <div class="input-group-prepend" onclick="mostrarPassword()">
                                <span class="input-group-text" id="inputGroupPrepend"><i class="fa fa-eye" style="font-size:16px"></i></span>
                            </div>
                            <input type="password" id="password" name="txtPassword" class="form-control" value="<?php echo $_SESSION["acesso_password"];?>" aria-describedby="inputGroupPrepend" autocomplete="off" maxlength="50" required>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome"  name="txtNome" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="cc">Cartão de Cidadão (CC)</label>
                        <input type="text" id="cc" name="txtCC" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="dataNascimento">Data Nascimento</label>
                        <input type="date" id="dataNascimento" name="txtDataNascimento" class="form-control" autocomplete="off" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="acesso">Tipo de Acesso</label>
                        <input type="text" id="acesso" name="txtAcesso" class="form-control" autocomplete="off" readonly required>
                    </div>
                </div>             
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="pais">País</label>
                        <input type="text" id="pais" name="txtPais" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="distrito">Distrito</label>
                        <input type="text" id="distrito" name="txtDistrito" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="concelho">Concelho</label>
                        <input type="text" id="concelho" name="txtConcelho" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                </div>             
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="morada">Morada</label>
                        <input type="text" id="morada" name="txtMorada" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="nif">Identificação Fiscal (NIF)</label>
                        <input type="text" id="nif" name="txtNif" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="codigoPostal">Código-Postal</label>
                    <input type="text" id="codigoPostal" name="txtCodigoPostal" class="form-control" autocomplete="off" maxlength="50" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="telemovel">Telemóvel</label>
                        <input type="tel" id="telemovel" name="txtTelemovel" class="form-control" autocomplete="off" maxlength="9" required>
                    </div>
                </div>
                <button type="button" value="Editar" title= "Editar" onclick="validaFormulario_editarPerfil()" class="btn btn-warning" id="botaoEditar">Editar <i class="fa fa-edit"></i></button>
            </form>
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