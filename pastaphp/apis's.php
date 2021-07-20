<?php
include_once('conexao.php');
 
// variável que recebe o conteúdo da requisição do app decodificando-a
$postjson = json_decode(file_get_contents('php://input'), true);
//var_dump($postjson);
 
if($postjson['requisicao']=='add'){
 $query = $pdo->prepare("INSERT INTO cliente SET nome=:nome, email=:email, senha=:senha, cpf=:cpf");
 $query->bindValue(":nome",$postjson['nome']);
 $query->bindValue(":email",$postjson['email']);
 $query->bindValue(":senha",md5($postjson['senha']));
 $query->bindValue(":cpf",$postjson['cpf']);
 
 $query->execute();
 $id = $pdo->lastInsertId();
 
 if($query){
 $result = json_encode(array('success'=>true,'id'=>$id));
 }else{
 $result = json_encode(array('success'=>false,'msg'=>'Falha ao inserir usuário.'));
 }
 echo $result;
//
}//final da requisição ADD
/*else if($postjson['requisicao']=='listar'){
 if($postjson['nome'] == ''){ 
 $query = $pdo->query("SELECT * FROM usuarios order by id desc limit $postjson[start], $postjson[limit]");
 }else{
 $busca = $postjson['nome'].'%';
 $query = $pdo->query("SELECT * FROM usuarios WHERE nome LIKE '$busca' or usuario LIKE '$busca' order by id desc limit $postjson[start], $postjson[limit]");
 }
 $res = $query->fetchAll(PDO::FETCH_ASSOC);
 for ($i=0; $i < count($res); $i++) { 
 foreach ($res[$i] as $key => $value) { 
 }
 $dados[] = array(
 'id'=> $res[$i]['id'],
 'nome'=> $res[$i]['nome'],
 'usuario'=> $res[$i]['usuario'],
 'senha'=> $res[$i]['senha'],
 'senha_original'=> $res[$i]['senha_original'],
 
 );
 } 
 if (count($res) > 0){
 $result = json_encode(array('success'=>true, 'result'=>$dados));
 }else{
 $result = json_encode(array('success'=>false, 'result'=>'0'));
 
 }
 echo $result;
 
}//final da requisição LISTAR*/
elseif($postjson['requisicao']=='editar'){
$query
//
}//final da requisição EDITAR
elseif($postjson['requisicao']=='atualizar'){
//
}//final da requisição ATUALIZAR
elseif($postjson['requisicao']=='excluir'){
//
}//final da requisição EXCLUIR
elseif($postjson['requisicao']=='login'){
 $query = $pdo->query("SELECT * FROM cliente where cliente = '$postjson[cliente]' and senha = md5('$postjson[senha]')");
 $res = $query->fetchAll(PDO::FETCH_ASSOC);
 for ($i=0; $i < count($res); $i++) { 
 foreach ($res[$i] as $key => $value) { 
 }
 $dados = array(
 //'id'=> $res[$i]['id'],
 //'nome'=> $res[$i]['nome'],
 'email'=> $res[$i]['email'],
 'senha'=> $res[$i]['senha'],
 //'cpf'=> $res[$i]['cpf'],

 );
 } 
 if (count($res) > 0){
 $result = json_encode(array('success'=>true, 'result'=>$dados));
 }else{
 $result = json_encode(array('success'=>false, 'msg'=>'Dados Incorretos para Usuario'));
 
 }
 echo $result;
}//final da requisição LOGIN
 
?>



