<!DOCTYPE html>
<html>
<head>
    <title>login</title>

    <link rel="stylesheet" href="style/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="example.css">
   

    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
   
    
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <div class="page-header">
                    <h2>Log In!</h2>
                </div>

                <form id="form" method="post" class="form-horizontal" action="LoginServlet">

                    <div class="form-group">
                        <label class="col-sm-2 control-label">Username</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" name="username" />
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

    <center><p>
    <% out.println(request.getAttribute("message")); %>
    </p></center>

</body>
</html>