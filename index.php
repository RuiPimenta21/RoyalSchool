<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Royal School</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="shortcut icon" href="imagens/logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/geral.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <div class="div1">
        <div class="div1_1">
            <div class="div1_1_1">
                <img src="imagens/index/logo1.png" alt="Royal School">
            </div>
            <div class="div1_1_2">
                <p>Bem-vindos à Royal College</p>
            </div>
        </div>
        <div class="div1_2">
            <div class="div1_2_1">
                <img src="imagens/index/logo2.png" alt="Royal School">
            </div>
            <div class="div1_2_2">
                <form name="formIndex" id="formIndex" method="post">
                    <div class="form-group">
                        <label for="email" class="txt1">Email</label>
                        <input type="email" id="email"  name="email" class="form-control" aria-describedby="emailHelp" placeholder="abc@gmail.com" autocomplete="on" maxlength="50" onkeypress="perdeFocus()" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="txt1">Password</label>
                        <div class="input-group">
                            <div class="input-group-prepend" onclick="mostrarPassword()">
                            <span class="input-group-text" id="inputGroupPrepend"><i class="fa fa-eye" style="font-size:16px"></i></span>
                            </div>
                            <input type="password" id="password" name="password" class="form-control" aria-describedby="inputGroupPrepend" placeholder="Password" autocomplete="off" maxlength="50" onkeypress="perdeFocus()" required>
                        </div>
                    </div>
                    <div class="bottaoEntrar"></div>
                    <button type="button" value="Entrar" title= "Entrar" class="btn btn-primary btn-lg btn-block" onclick="validaFormulario_Index()">Entrar</button>
                    <div class="div1_2_2_1">
                        <a href="" id="passwordAjuda" class="form-text">Recuperar password.</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  
    
    <div id="txtErro"></div>
    <!--JavaScript para BootStrap-->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    <!--Por página-->
    <script src="js/index/loginIndex.js"></script>

</body>
</html>

<?php
    //caso ele saia de qualquer pagina para o index encerra sessao

    // remove all session variables
    session_unset();

    // destroy the session
    session_destroy();
?>

