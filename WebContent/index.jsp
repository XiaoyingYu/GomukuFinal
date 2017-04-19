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
a:link {
    text-decoration: underline;
    color: black;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:active {
    text-decoration: underline;
}
.userbar {
    float: right;
    /* width: 200px;
    height:35px; */
    color: black;
    font-size: 20px;
    font-family: "Verdana", Geneva, sans-serif
}

.btn-primary {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    border-radius: 12px;
    font-size: 24px;
    padding: 15px 32px;
    font-family:"Arial Black", Gadget, sans-serif; 
    text-decoration: none
}

</style>


</head>

<body>
<div class = "header">
	<h1 class="logo"><center>GOMOKU MASTER</center></h1>
	<br>
	<div class = "userbar">
	<% 
	GomokuUser user = (GomokuUser) session.getAttribute("userProfile");
	
	if(user == null){
		out.print("<a href='register.jsp'>Register</a> / <a href='loginfinal.jsp'>Log in</a>");
	} else {
		out.print("Hello " + user.getUsername() + " ! <a href='account.jsp'>My Account</a> or <a href='logout.jsp'>Log out</a>");
	}
	%>
	</div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


<div class="link">
<p>
<%
if(user == null){
	out.print("Want start a game? /n Please <a href='register.jsp'>Register</a> or <a href='loginfinal.jsp'>Log in</a>.");
} else {
	out.print("<center><a href='game.jsp' class='btn-primary' role='button'>Start A Game</a></center>");
}
%>
</p>
</div>





</body>
</html>