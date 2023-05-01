<?php
    session_start();
    
    if (!isset($_SESSION["utilizador_id"])){
        header("Location: ./index.php");
    }

    if (!empty($_POST['fname'])) {
        $_SESSION['utilizador_nomePerfil'] = $_POST['fname'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina2</title>
</head>
<body>
    
    <?php
        echo "Olá " . $_SESSION["utilizador_nomePerfil"] . ".<br>";
    ?>


    <form action="./index2.php"  method='post'>
        <label for="fname">Novo nome:</label><br>
        <input type="text" id="fname" name="fname"><br><br>
        <input type="submit" value="Gravar">
    </form> 

    <a href="index3.php" class="button">Pagina 3</a>
    <br>
    <a href="index4.php" class="button">Encerrar sessão!</a>

</body>
</html>