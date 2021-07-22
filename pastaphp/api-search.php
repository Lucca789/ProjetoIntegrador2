        <?php

        header("Content-Type: application/json");
        header("Acess-Control-Allow-Origin: *");

        $data = json_decode(file_get_contents("/login"), true);

        $email = $data["email"];

        $senha = $data ["senha"];

        require_once "dbconfig.php";

        echo $query = "SELECT * FROM mydb.cliente WHERE email, senha LIKE '%".$email."%', '%".$senha."%' ";

        $result = mysql_query($conn,$query) or die ("Seach Query Failed.");

        $count = mysqli_num_rows($result);

        if ($count > 0)

        { 
            $row = mysqli_fetch_all($result, MYSQL_ASSOC); 

            echo json_encode($row); 
        }
        else {
            echo json_encode(array("message" => "No Search Found.", "status" => false));

        }
        ?>
        