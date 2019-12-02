<?php
    
    include '../../../_config/config.php';

    //Check if cookie is set, and if so check if it is valid
    if (isset($_COOKIE[$auth->config->cookie_name]) && $auth->checkSession($_COOKIE[$auth->config->cookie_name])) {
        //Set $logged to true for !isset workaround (!isset not working)
        $logged = true;
    }else{
        //If it is not set or is not valid, redirect to homepage
        header("Location: ../../../");
        exit();
    }

    //If $logged is true, display logged in page
    if ($logged = true) {
        if (!empty($_POST['activate-sumbit'])) {
            $activateUser = $auth->activate($_POST['activate-key']);
            if ($activateUser['error'] == false) {
                $activateSuccess =  'has-success has-feedback';
                $activateMessage = $activateUser['message'];
            } else{
                $activateSuccess = 'has-error has-feedback';
                $activateMessage = $activateUser['message'];
            }
        }
        
        if (!empty($_POST['add-sumbit'])) {
            $addUser = $auth->register($_POST['add-username'], $_POST['add-password'], $_POST['add-password-repeat']);
            if ($addUser['error'] == false) {
                $addSuccess =  'has-success has-feedback';
                $addMessage = $addUser['message'];
            } else{
                $addSuccess = 'has-error has-feedback';
                $addMessage = $addUser['message'];
            }
        }        

        if (!empty($_POST['password-sumbit'])) {
            $changeUserPassword = $auth->changePassword($auth->getUID($_POST['password-username']), $_POST['password-old-pass'], $_POST['password-new-pass'], $_POST['password-new-pass-repeat']);
            if ($changeUserPassword['error'] == false) {
                $passwordSuccess =  'has-success has-feedback';
                $passwordMessage = $changeUserPassword['message'];
            } else{
                $passwordSuccess = 'has-error has-feedback';
                $passwordMessage = $changeUserPassword['message'];
            }
        }

        if (!empty($_POST['permissions-sumbit'])) {
            $changeUserPermissions = $auth->changePermission($auth->getUID($_POST['permissions-username']), $_POST['permissions-level']);
            if ($changeUserPermissions['error'] == false) {
                $permissionsSuccess =  'has-success has-feedback';
                $permissionsMessage = $changeUserPermissions['message'];
            } else{
                $permissionsSuccess = 'has-error has-feedback';
                $permissionsMessage = $changeUserPermissions['message'];
            }
        }

        if (!empty($_POST['delete-sumbit'])) {
            $deleteUser = $auth->deleteUser($auth->getUID($_POST['delete-username']), $_POST['delete-password']);
            if ($deleteUser['error'] == false) {
                $deleteSuccess =  'has-success has-feedback';
                $deleteMessage = $deleteUser['message'];
            } else{
                $deleteSuccess = 'has-error has-feedback';
                $deleteMessage = $deleteUser['message'];
            }
        }

?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>1st Lytchett Scout Group Admin - User</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?
        if (isset($_GET["add"])) {
            ?>
                <style type="text/css">
                    .add{
                        display: block;
                    }

                    .activate, .change, .delete{
                        display: none;
                    }
                </style>
            <?
        }elseif (isset($_GET["change"])) {
            ?>
                <style type="text/css">
                    .change{
                        display: block;
                    }

                    .activate, .add, .delete{
                        display: none;
                    }
                </style>
            <?
        }elseif (isset($_GET["delete"])) {
            ?>
                <style type="text/css">
                    .delete{
                        display: block;
                    }

                    .activate, .add, .change{
                        display: none;
                    }
                </style>
            <?
        }elseif (isset($_GET["activate"])) {
            ?>
                <style type="text/css">
                    .activate{
                        display: block;
                    }

                    .add, .change, .delete{
                        display: none;
                    }
                </style>
            <?
        }else{
            ?>
                <style type="text/css">
                    .activate, .add, .change, .delete{
                        display: block;
                    }
                </style>
            <?
        }
    ?>

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">1st Lytchett Scout Group Admin</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i></a>
                    <ul class="dropdown-menu message-dropdown">
                        <!-- <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>Lytchett Admin</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>Lytchett Admin</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>Lytchett Admin</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p> 
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-footer">
                            <a href="#">Read All New Messages</a>
                        </li> -->
                    </ul>
                </li>
                <!-- <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
                    <ul class="dropdown-menu alert-dropdown">
                        <li>
                            <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">View All</a>
                        </li>
                    </ul>
                </li> -->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Lytchett Admin <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <!-- <li>
                            <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
                        </li> -->
                        <li>
                            <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="../../../_includes/auth/logout.php"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li>
                        <a href="index.php"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="../">Public Logged In Area</a>
                    </li>
                    <li class="active">
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Auth <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" class="collapse">
                            <li>
                                <a href="user.php?activate">Activate User</a>
                            </li>
                            <li>
                                <a href="user.php?add">Add User</a>
                            </li>
                            <li>
                                <a href="user.php?change">Change User Details</a>
                            </li>
                            <li>
                                <a href="user.php?delete">Delete User</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Users
                            <small>Change user settings</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li>
                                <i class="fa fa-dashboard"></i>  <a href="index.php">Dashboard</a>
                            </li>
                            <li class="active">
                                <i class="fa fa-file"></i> Auth
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

            <section class="activate" class="col-lg-12">
    
                <h1><small>Activate User</small></h1>

                <form method="POST" action="" name="activate">
                    <div class="form-group <?=$activateSuccess;?>">
                        <label class="control-label" for="activate-key"><?=$activateMessage;?></label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-flash"></i></div>
                            <input type="text" name="activate-key" class="form-control" placeholder="Activation Key" id="activate-key">
                        </div>
                        <br>
                        <input type="submit" name="activate-sumbit" class="btn btn-default btn-primary" value="Activate">
                    </div>
                </form>
                <br>
                <br>
            </section>

            <section class="add" class="col-lg-12">
    
                <h1><small>Add User</small></h1>

                <form method="POST" action="" name="add">
                    <div class="form-group <?=$addSuccess;?>">
                        <label class="control-label" for="add-username"><?=$addMessage;?></label>
                        <div class="input-group">
                            <span class="input-group-addon">@</span>
                            <input type="text" name="add-username" class="form-control" placeholder="Username">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input type="password" name="add-password" class="form-control" placeholder="Password">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input type="password" name="add-password-repeat" class="form-control" placeholder="Repeat Password">
                        </div>
                        <br>
                        <input type="submit" name="add-sumbit" class="btn btn-default btn-primary" value="Add">
                    </div>
                </form>
                <br>
                <br>
            </section>
            
            <section class="change" class="col-lg-12">
    
                <h1><small>Change User Details</small></h1>

                <form class="col-lg-6" method="post" action="" name="change-password">
                    <h3 class="panel-title">Password</h3>
                    <div class="form-group <?=$passwordSuccess;?>">
                        <label class="control-label" for="password-username"><?=$passwordMessage;?></label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-flash"></i></span>
                            <input type="text" name="password-username" class="form-control" placeholder="Username">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input type="password" name="password-old-pass" class="form-control" placeholder="Old Password">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input type="password" name="password-new-pass" class="form-control" placeholder="New Password">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input type="password" name="password-new-pass-repeat" class="form-control" placeholder="Repeat New Password">
                        </div>
                        <br>
                        <input type="submit" name="password-sumbit" class="btn btn-default btn-primary" value="Change">
                    </div>
                </form>

                <form class="col-lg-6" method="POST" action="" name="change-permissions">
                    <h3 class="panel-title">Permissions</h3>
                    <div class="form-group <?=$permissionsSuccess;?>">
                        <label class="control-label" for="permissions-username"><?=$permissionsMessage;?></label>
                        <div class="input-group">
                            <span class="input-group-addon">@</span>
                            <input type="text" name="permissions-username" class="form-control" placeholder="Username">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-flash"></i></span>
                            <input type="number" class="form-control" name="permissions-level" placeholder="New Permission Level">
                        </div>
                        <br>
                        <input type="submit" name="permissions-sumbit" class="btn btn-default btn-primary" value="Change">
                    </div>
                </form>
                <br>
                <hr>
                <br>
            </section>
            
            <section class="delete">
    
                <h1><small>Delete User</small></h1>


                <form class="col-lg-6" method="POST" action="" name="delete">
                    <div class="form-group <?=$deleteSuccess;?>">
                        <label class="control-label" for="delete-username"><?=$deleteMessage;?></label>
                        <div class="input-group">
                            <span class="input-group-addon">@</span>
                            <input type="text" name="delete-username" class="form-control" placeholder="Username">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <input type="password" name="delete-password" class="form-control" placeholder="Password">
                        </div>
                        <br>
                        <input type="submit" name="delete-sumbit" class="btn btn-default btn-primary" value="Delete">
                    </div>
                </form>
            </section>

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55858968-1', 'auto');
  ga('send', 'pageview');
</script>
</html>
<?php

    }

?>