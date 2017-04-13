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
	<% 
  GomokuUser user = (GomokuUser) session.getAttribute("userProfile");%>
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
					<th scope="row">Game Record</th>
					<td><%out.print(user.getCredits()); %></td>
				</tr>
				<tr> 
					<th scope="row">Win Times</th>
					<td><%out.print(user.getWinNum()); %></td>
				</tr>
		
				</tbody>
				</table>

			</div>
		</div>
	</div>
		
  
</body> 
</html>