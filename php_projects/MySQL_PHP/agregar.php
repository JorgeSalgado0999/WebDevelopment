<?php

    include('conexion.php');

    error_reporting(E_ERROR);
    
            $agregar=$_POST['agregar'];
    
                if ($agregar == TRUE) {
                
                $ident = $_POST['ident'];
                $nom = $_POST['nom'];
                $ape = $_POST['ape'];
    
                $res = $mysqli->query("INSERT INTO usuarios SET ident='$ident', nom='$nom', ape='$ape'");
                
    
                }
    
    header('Location: https://www.facebook.com');

?> 