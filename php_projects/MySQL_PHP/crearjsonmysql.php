<?php 

$server = "localhost";
$user = "id11134103_root";
$pass = "12345678";
$bd = "id11134103_lista";

//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass, $bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

//generamos la consulta
$sql = "SELECT * FROM usuarios";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$clientes = array(); //creamos un array



while($row = mysqli_fetch_array($result)) 
{ 
    $id=$row['id'];
    $ident=$row['ident'];
    $nom=$row['nom'];
    $ape=$row['ape'];
    

    $clientes[] = array('id'=> $id, 'ident'=> $ident, 'nom'=> $nom, 'ape'=> $ape);

}
    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON
$json_string = json_encode($clientes);
echo $json_string;

 
?>
