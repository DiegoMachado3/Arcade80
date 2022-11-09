<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tela de login</title>
</head>
<body class="body_login">
<form action="login_proc.php" method="post">

    <div class="elipse_img" ><img src="Ellipse 1.png"></div>
    <div class="elipse_img2" ><img src="Ellipse 1.png"></div>
    <div class="elipse_img3" ><img src="Ellipse 1.png"></div>
    <div class="elipse_img4" ><img src="Ellipse 1.png"></div>

    <div class="div_textLogin">
    <h1 class="text_login">Login</h1>
    </div>

  <div class="tela">
      
    <div class="inputs_login">
        <div class="email">
            <label for="email"><b>Email:</b></label><br>
            <input type="text" name="email_login" id="email_login1"><br>
        </div>

        <div class="senha">
            <label for="senha"><b>Senha:</b></label><br>
            <input type="password" name="senha_login" id="senha_login1"><br>
        </div>
    </div>
    <div class='botoes_login'>
        <input class='botao' type="submit" name="logar" value="Logar"><br/>
    </div>
    
</div>
<h3 class="voltcadastro" ><a href="cadastro.php" class="volt" >Nao possui cadastro?</a></h3>
</form>

</body>
</html>