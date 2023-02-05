<?php
    session_start();

    //evita entrada forçada pelo link
    if(isset($_SESSION['nomeUtilizador'])){
        echo "Bem-vindo ".$_SESSION['nomeUtilizador']."<a href='logout.php'>Logout</a>";
    }else{
        header("location:index.html");
    }
?>
<h1>Obrigado pela Visita</h1>

