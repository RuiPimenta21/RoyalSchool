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
    <link rel="stylesheet" href="css/perfil.css"><!-- CSS Geral-->
    
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
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Ano Letivo</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Nível</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Turma</a>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="dropdown-toggle buttonNavBar active" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tesouraria</button>
                    <div class="dropdown-menu dropdownBotao">
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao selecionado" href="#">Tipo Incrição</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Mensalidade</a>
                        <a class="dropdown-item buttonNavBarDropdown dropdownSubBotao" href="#">Desconto</a>
                    </div>
                </div>
                <div class="btn-group dropdownBotaoPerfil">
                    <button class="dropdown-toggle buttonNavBar iconDropDown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="imagens/Pessoas.png" alt="fotoPerfil">
                        Rui Pimenta</button>
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
            <h1>Primeira Section</h1>
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