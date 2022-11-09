<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fim.css">
    <title>Game Over</title>
</head>
<body>  
    <div class="Tela">
        <div class="Gam">
            <h1>Game Over</h1>
        </div>

        <div class="Play">
            <h1>Jogar Novamente?</h1>
        </div>

        <div class="Palavras">
        <div class="Yes">
            <h1> <button class="bot1_over" onclick="sendStrings()"><a href="game.php" class="Yes" >Sim</a></button></h1>
        </div>

        <div class="No">
            <h1> <button class="bot2_over" onclick="sendStrings()"> <a href="../jogos.php" class="No" >Nao</a></h1>
        </div>
        
    </div>
    <h1><p id="resultado" name="Resultado" ></p></h1>

    <div id="demo"></div>

    <script>
        function queryString(parameter) {  
              var loc = location.search.substring(1, location.search.length);   
              var param_value = false;   
              var params = loc.split("&");   
              for (i=0; i<params.length;i++) {   
                  param_name = params[i].substring(0,params[i].indexOf('='));   
                  if (param_name == parameter) {                                          
                      param_value = params[i].substring(params[i].indexOf('=')+1)   
                  }   
              }   
              if (param_value) {   
                  return param_value;   
              }   
              else {   
                  return undefined;   
              }   
        }
        var variavel = queryString("minhaVariavel");
        console.log(variavel)

        document.getElementById("resultado").innerHTML = "PTS:"+ variavel

        let nome = variavel;
        ponto = parseInt(nome)

        const xhttp = new XMLHttpRequest(); 

        xhttp.onload = function() { 
        document.getElementById("demo").innerHTML = this.responseText;
        }

        xhttp.open("POST","fim.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("ponto="+ponto); 

    </script>

    <?php
        include_once('connect.php');
        session_start();

        $ponto = filter_input(INPUT_POST, 'ponto', FILTER_SANITIZE_SPECIAL_CHARS);

        $gravId = mysqli_query($conn,"SELECT id_user FROM usuarios WHERE email_user = '{$_SESSION['email_login']}' and senha_user = '{$_SESSION['senha_login']}'");
        $grav = mysqli_fetch_array($gravId);
        $_SESSION['idUser'] = $grav['id_user'];
        echo $_SESSION['idUser'];

        $res_gravar = "INSERT INTO score(pontos,id_user) VALUES ('$ponto','{$grav['id_user']}')";
        $resposta_gravar = mysqli_query($conn,$res_gravar);

        
    ?>   


</body>
</html>