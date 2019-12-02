<?php

    //Define database and directory for configs
    const HOST = 'localhost';
    const USER = '*********';
    const PASS = '*********';
    $DIR = $_SERVER['DOCUMENT_ROOT'] . '/';
    $_PUBLIC_DIR = '/';

    //Set default timezone for all date/time functions
    date_default_timezone_set('Europe/London');


    //Class autoloader
    // function application_autoloader($class) {
    //     $class = strtolower($class);
    //     $class_filename = 'class.'.strtolower($class).'.php';
    //     $class_root = $DIR . '_includes';
    //     $cache_file = $DIR . "_cache/classpaths.cache";
    //     $path_cache = (file_exists($cache_file)) ? unserialize(file_get_contents($cache_file)) : array();
    //     if (!is_array($path_cache)) { $path_cache = array(); }

    //     if (array_key_exists($class, $path_cache)) {
    //         /* Load class using path from cache file (if the file still exists) */
    //         if (file_exists($path_cache[$class])) { require_once $path_cache[$class]; }

    //     } else {
    //          Determine the location of the file within the $class_root and, if found, load and cache it
    //         $directories = new RecursiveDirectoryIterator($class_root);
    //         foreach(new RecursiveIteratorIterator($directories) as $file) {
    //             if (strtolower($file->getFilename()) == $class_filename) {
    //                 $full_path = $file->getRealPath();
    //                 $path_cache[$class] = $full_path;
    //                 require_once $full_path;
    //                 break;
    //             }
    //         }

    //     }

    //     $serialized_paths = serialize($path_cache);
    //     if ($serialized_paths != $path_cache) { file_put_contents($cache_file, $serialized_paths); }
    // }

    // spl_autoload_register('application_autoloader');


    // Set up PHPAuth system
    include $DIR . "_includes/auth/auth-call.php";
    $dbh = new PDO("mysql:host=localhost;dbname=WEB_AUTH", USER, PASS);
    $config = new PHPAuth\Config($dbh);
    $auth   = new PHPAuth\Auth($dbh, $config, $lang);

    // Set up News system
    include $DIR . "_includes/news/class.news.php";
    $newsDBH = new PDO("mysql:host=localhost;dbname=WEB_NEWS", USER, PASS);

    // Set up Directory system
    include $DIR . "_includes/dir/class.dir.php";
    $photosDBH = new PDO("mysql:host=localhost;dbname=WEB_PHOTOS", USER, PASS);

    // Set up Notifications system
    include $DIR . "_includes/notifications/class.notifications.php";

    // Set up Documents system
    $documentsDBH = new PDO("mysql:host=localhost;dbname=WEB_DOCUMENTS", USER, PASS);

    // Set up Calendar system
    include $DIR . "_includes/calendar/class.calendar.php";
    include $DIR . '_includes/google/client library/src/Google/autoload.php';

    //TELL GOOGLE WHAT WE'RE DOING
    $client = new Google_Client();
    $client->setApplicationName("Scout Website"); //DON'T THINK THIS MATTERS
    $client->setDeveloperKey('*********'); //GET AT AT DEVELOPERS.GOOGLE.COM
    $cal = new Google_Service_Calendar($client);

    // Set up Comments system
    include $DIR . "_includes/comments/class.comments.php";
    $commentsDBH = new PDO("mysql:host=localhost;dbname=WEB_COMMENTS", USER, PASS);

    // Webhunt Database connection
    $webhuntDBH = new PDO("mysql:host=localhost;dbname=WEB_HUNT", USER, PASS);

    // Set up Groups system
    include $DIR . "_includes/groups/class.groups.php";
    $groupsDBH = new PDO("mysql:host=localhost;dbname=WEB_MAILLIST", USER, PASS);
