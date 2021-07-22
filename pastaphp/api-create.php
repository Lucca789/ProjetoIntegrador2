<?php 

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: POST");
header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type, Acess-Control-Allow-Methods, Authorization");

$data = json_decode(file_get_contents("/cadastro"), true);

$id = $data["id"];
$name = $data["name"];
$email = $data["email"];
$senha = $data["senha"];
$cpf = $data["cpf"];

require_once "dbconfig.php";

$query = "INSERT INTO mydb.cliente(idCliente, Nome, Email, Senha, Cpf)
                        VALUES ('".$id."', '".$name."', '".$email."', '".$senha."', '".$cpf."')";

if(mysql_query($conn, $query) or die("Insert Query Failed"))
{
    echo json_encode(array("message" => "Product Inserted Succesfully", "status" => true));
}                        
else
{
    echo json_encode(array("message" => "Failed Product Not Insert", "status" => false)); 
}

?>
