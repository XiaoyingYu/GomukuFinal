<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="eud.pitt.webproject2.entities.GomokuUser"  %>
<!DOCTYPE html>
<html>
<head>
<title>Main Page</title>

<style type="text/css">
h1.logo { 
font-family:"Arial Black", Gadget, sans-serif 
}
#userbar {
    float: right;
    width: 200px;
    height:35px;
    color: #0d9adb;
    font-size: 15px;
    background-color: #DFF6F5;
}

</style>
<link rel="stylesheet" href="style/bootstrap.min.css"/>


</head>

<body>
<div class = "header">
	<h1 class="logo"><center>GOMOKU MASTER</center></h1>
	<div class = "userbar">
	<% 
	GomokuUser user = (GomokuUser) session.getAttribute("userProfile");
	
	if(user == null){
		out.print("<a href='register.jsp'>Register</a> / <a href='loginfinal.jsp'>Log in</a>");
	} else {
		out.print("Hello " + user.getUsername() + "! <a href='account.jsp'>My Account</a> or <a href='logout.jsp'>Log out</a>");
	}
	%>
	</div>
</div>

<h2><center>Main Page</center></h2>


<div class="link">
<p>
<a href="#" class="btn btn-default btn-lg active" role="button">Start A Game</a>
<a href="#" class="btn btn-default btn-lg active" role="button">My Account</a>
</p>
</div>





</body>
</html>