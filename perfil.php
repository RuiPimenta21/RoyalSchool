<?php
    session_start();
    
    if (!isset($_SESSION["utilizador_id"])){
        header("Location: ./index.php");
    }

    if (!empty($_POST['fname'])) {
        $_SESSION['utilizador_nome'] = $_POST['fname'];
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
                        Rui Pimenta</button>
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
        <section>
            <h4>Editar Perfil</h4>
            <form name="formPerfil" id= "formPerfil" method="post">
            <div class="form-row">
                    <div class="form-group col-md-10">
                        <label for="inputEmail4">Observações</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="customFile2"><img src="./imagens/utilizadores/WhatsApp Image 2021-09-10 at 16.50.07.jpeg" alt="example placeholder" class="imagemPerfilUpload"/></label>
                        <input type="file" class="form-control d-none" id="customFile2"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <label for="inputEmail4">Nome Completo</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Cartão de Cidadão (CC)</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustomUsername">Nome Perfil</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend"><i class="fa fa-user-o" style="font-size:16px"></i></span>
                            </div>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputState">País</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Distrito</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Concelho</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCity">Morada</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Código-Postal</label>
                    <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Telemóvel</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                </div>
                

                <button type="button" value="Editar" title= "Editar" onclick="validaFormulario_editarPerfil()" class="btn btn-warning" id="botaoEditar">Editar <i class="fa fa-edit"></i></button>
            </form>













            <?php
                echo "Olá " . $_SESSION["utilizador_nome"] . ".<br>";
            ?>
            <form action="./index2.php"  method='post'>
                <label for="fname">Novo nome:</label><br>
                <input type="text" id="fname" name="fname"><br><br>
                <input type="submit" value="Gravar">
            </form> 
            <a href="index3.php" class="button">Pagina 3</a>
            <br>
            <a href="index4.php" class="button">Encerrar sessão!</a>
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
</body>
</html>