<?php
    include '../../../_config/config.php';

    //Check if cookie is set, and if so check if it is valid
    if (isset($_COOKIE[$auth->config->cookie_name]) && $auth->checkSession($_COOKIE[$auth->config->cookie_name])) {
        //Set $logged to true for !isset workaround (!isset not working)
        
        $uid = $auth->getPermission($_COOKIE[$auth->config->cookie_name]);
        // if ($uid == 100) {
            $logged = true;
        // }
    }else{
        //If it is not set or is not valid, redirect to homepage
        header("Location: ../../../../");
        exit();
    }

    //If $logged is true, display logged in page
    if ($logged = true) {
        $user = $auth->getUser($auth->getSessionUID($auth->getSessionHash()));
        if (isset($_POST['section'])) {
            setcookie("section", $_POST['section'], time() + (86400 * 30), "/"); // 86400 = 1 day
        }
        $query = $dbh->prepare("SELECT id FROM users WHERE email = ?");
        $uid = $query->execute(array($user));

        echo $_POST['a'];
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Webhunt Admin</title>
        <style type="text/css">
            *{ margin:0;padding:0}
            html, body{
                margin: 0;
                padding: 0;
                background: rgba(153,153,153,.3);
            }
            header{
                margin: 0;
                padding: 1%;
                top: 0;
                margin-top: 0;
                background-color: #424242;
                color: #fffee5;
            }
            table, th, td {
                border: 2px solid black;
                border-collapse: collapse;
            }
            main{
                padding: 1%;
            }
        </style>
        <script type="text/javascript">
            $("#submit").click(function() {
                $("#a").val($("#questionEditable").html());
            });
        </script>
    </head>
    <body>
        <header>
            <h1>Admin</h1>    
        </header>
        <main>
            <section>
                <h2>Teams</h2>
                <br>
                <table>
                    <tbody>
                        <tr>
                            <td><b>ID</b></td>
                            <td><b>Team Name</b></td>
                            <td><b>Team Members</b></td>
                            <td><b>Score</b></td>
                        </tr>
                        <?
                            $scores = $webhuntDBH->prepare("SELECT * FROM scores");
                            $scores->execute();

                            if ($scores->rowCount() == 0) {
                                echo "false";
                            }

                            $members1 = $dbh->prepare("SELECT members FROM users WHERE id = ? ORDER BY id DESC");
                            $members1->execute(array('4'));
                            $members2 = $dbh->prepare("SELECT members FROM users WHERE id = ? ORDER BY id DESC");
                            $members2->execute(array('5'));
                            $members3 = $dbh->prepare("SELECT members FROM users WHERE id = ? ORDER BY id DESC");
                            $members3->execute(array('6'));

                            // print_r($members1->fetchAll(\PDO::FETCH_ASSOC));

                            // var_dump($scores->fetchAll(\PDO::FETCH_ASSOC));
                            // while ($i <= 3) {
                            $i = 1;
                            while ($i <= 3) { 
                                foreach ($scores->fetchAll(\PDO::FETCH_ASSOC) as $user) {
                                    ?>
                                    <tr>
                                        <td> 
                                        <?
                                            echo $user['id']; 
                                        ?>
                                        </td>
                                        <td> 
                                        <?
                                            echo $user['name'];
                                            ${"user" . $i} = $user['name'];
                                        ?>
                                        </td>
                                        <td>
                                        <?
                                            echo ${"members".$i}->fetchAll(\PDO::FETCH_ASSOC)[0]['members'];
                                            $i++;
                                        
                                        ?></td>
                                        <td>
                                        <?
                                            echo $user['score'];
                                        ?>                                            
                                        </td>
                                    </tr> 
                                    <?
                                    }
                            } 
                             //}
                            // var_dump($users);
                        ?>
                    </tbody>
                </table>
            </section>

            <br><br><br><br><br><hr><br><br><br><br><br>
            <section>
                <h2>Questions</h2>
                <br>
                <table>
                    <tbody>
                        <tr>
                            <td><b>ID</b></td>
                            <td><b>Question</b></td>
                            <td><b>Answer</b></td>
                            <td><b><? echo $user1 ?></b></td>
                            <td><b><? echo $user2 ?></b></td>
                            <td><b><? echo $user3 ?></b></td>
                        </tr>
                        <?
                            $questions = $webhuntDBH->prepare("SELECT * FROM questions");
                            $questions->execute();

                            if ($scores->rowCount() == 0) {
                                echo "false";
                            }

                            foreach ($questions->fetchAll(\PDO::FETCH_ASSOC) as $question) {?>
                                <tr>
                                    <td><?= $question['id'] ?></td>

                                    <td><?= $question['question'] ?></td>

                                    <td><?= $question['answer'] ?></td>

                                    <td><?= $question[$user1] ?></td>

                                    <td><?= $question[$user2] ?></td>

                                    <td><?= $question[$user3] ?></td>

                                    
                                </tr>
                            <?}
                        ?>
                    </tbody>
                </table>
        </main>
    </body>
</html>
<?
}
?>