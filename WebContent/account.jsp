<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="eud.pitt.webproject2.entities.GomokuUser"  %>
<html> 
<head> 
	<title>Account Profile </title>
	<link rel="stylesheet" href="style/bootstrap.min.css"/>
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>

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

	<% 
	Integer userWin = (Integer)session.getAttribute("userWin");
	Integer userLoss = (Integer)session.getAttribute("userLoss");
  %>
   <div class="container">
   		<div class="row">
    		<div class="col-lg-8 col-lg-offset-2">
                <div class="page-header">
                  <h2>Account Information</h2>
                </div>
				<table class="table table-bordered">
				<thead>
				<tr>
   					<th width=20%></th>
   					<th width=50%>User Information</th>
				</tr> 
				</thead>
				<tbody>
				<tr>
					<th scope="row">id</th>
					<td><%out.print(user.getId()); %></td>
				</tr>
				<tr>
					<th scope="row">Username</th>
					<td><%out.print(user.getUsername()); %></td>
				<tr>
					<th scope="row">Password</th>
					<td><a href="loginfinal.jsp"> Change Password</a></td>
				</tr>
				<tr>
					<th scope="row">Email</th>
					<td><%out.print(user.getEmail()); %></td>
				</tr>
				<tr>
					<th scope="row">Loss Times</th>
					<td><%out.print(userLoss); %></td>
				</tr>
				<tr> 
					<th scope="row">Win Times</th>
					<td><%out.print(userWin); %></td>
				</tr>
		
				</tbody>
				</table>

			</div>
		</div>
	</div>
		
  
</body> 
</html>