<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="eud.pitt.webproject2.entities.GomokuUser"  %>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gomuku Page</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Gomuku Master</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                <% 
	GomokuUser user = (GomokuUser) session.getAttribute("userProfile");
	
	if(user == null){
		out.print("<a href='register.jsp'>Register</a> / <a href='loginfinal.jsp'>Log in</a>");
	} else {
		out.print("<li><a href='account.jsp'>" + user.getUsername() + "</a></li>");
		out.print("<li style='visibility:hidden' id='currentUserId'>" + user.getId() + "</li>");
		
		out.print("<li><a href='index.jsp'>Main Page</a></li>");
		out.print("<li><a href='logout.jsp'>Log Out</a></li>");
	

	}
	%>
                </ul>
                
                

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<div class="container" align="center">
    <div class="row main">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <span class="glyphicon glyphicon-time"></span>
                    <label id="minutes">00</label>:<label id="seconds">00</label>
                    <button type="button" onclick="isSaveGame()" id="save" >Save</button>
                    <button type="button" onclick="isNewGameButton()" id="newgame" >New Game</button>
                    <button type="button" onclick="loadGameFromRecord()" id="loadgame" >Load Game</button>
                </div>
<!--
                <div>
                    <button type="button" onclick="" id="save" >Save</button>
                </div>
                <div>
                    <button type="button" onclick="isNewGameButton()" id="newgame" >New Game</button>
                </div>
-->
            </div>
            <div class="row">
                <div class="col-md-12">
                    <canvas width="720" id="canvas" onmousedown="play(event)" height="520"></canvas>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <hr>
            <p class="text-center">
                &copy; 2017. xxx class,
                All Rights Reserved.
            </p>
        </div>
    </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script src="js/gomuku.js"></script>
<script src="js/index.js"></script>
</body>
</html>

