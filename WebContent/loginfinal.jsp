<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>login</title>

    <link rel="stylesheet" href="style/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="example.css">
    <link rel="stylesheet" href="style/bootstrapValidator.min.css"/>

    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/bootstrapValidator.min.js"></script>
    
     <style>
    p {background-color: #FFCCCC;
      font-family:sans-serif
    }
    </style>
   
    
</head>
<body>
<p>
 <%
    if (request.getAttribute("message") != null) {
    	out.println(request.getAttribute("message"));
    }
    %>
    </p></center>
    
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <div class="page-header">
                    <h2>Log In!</h2>
                </div>

                <form id="form" method="post" class="form-horizontal" action="LoginServlet">

                    <div class="form-group">
                        <label class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" name="email" />
                        </div>
                    </div>

                     

                    <div class="form-group">
                        <label class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-5">
                            <input type="password" class="form-control" name="password" />
                        </div>
                    </div>

                  

                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
   <script type="text/javascript">
	$(document).ready(function() {
    	$('#form').bootstrapValidator({
        message: 'This value is not valid',
        	feedbackIcons: {
            	valid: 'glyphicon glyphicon-ok',
            	invalid: 'glyphicon glyphicon-remove',
            	validating: 'glyphicon glyphicon-refresh'
       	 },
        //group: '.form-group',
        fields: {
           
            email: {
                validators: {
                	
                	 notEmpty: {
                         message: 'The email is required and cannot be empty'
            		 },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
               	      message: 'The password is required and cannot be empty' 
           		 } 
            }
        }
       }
     });
});
</script>

    <center><p>
   
    <p><a href="account.jsp">Account Information! </a>

</body>
</html>