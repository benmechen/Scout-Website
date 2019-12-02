<?php

$path = realpath('pages/private/');

$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach($objects as $name => $object){
    if (is_file($name)) {
        $file = fopen($name, "r+");
        $file_contents = file_get_contents($name);
        $contents1 = str_replace('header("Location: ../../");', 
            ' $ref = "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"
            header("Location: $_PUBLIC_DIR?ref=$ref");
            ', $file_contents);
        // $contents2 = str_replace('header("Location: ../../../");', 
        //     ' $ref = "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"
        //     header("Location: $_PUBLIC_DIR?ref=$ref");
        //     ', $file_contents);
        // $contents3 = str_replace('header("Location: ../../../../");', 
        //     ' $ref = "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"
        //     header("Location: $_PUBLIC_DIR?ref=$ref");
        //     ', $file_contents); 
        file_put_contents($name, $contents1);
        // file_put_contents($file, $contents2);
        // file_put_contents($file, $contents3);
    }
}
echo "Done";


// ini_set('max_execution_time', 300); //300 seconds = 5 minutes
// echo "Changing...";

// function rglob($pattern, $flags = 0, $path = '') {
//     if (!$path && ($dir = dirname($pattern)) != '.') {
//         if ($dir == '\\' || $dir == '/') $dir = '';
//         return rglob(basename($pattern), $flags, $dir . '/');
//     }
//     $paths = glob($path . '*', GLOB_ONLYDIR | GLOB_NOSORT);
//     $files = glob($path . $pattern, $flags);
//     foreach ($paths as $p) $files = array_merge($files, rglob($pattern, $flags, $p . '/'));
//     return $files;
// }


// // $files = glob('pages/private/sections/*.{php}');
// // foreach(rglob("*.php", 0, 'pages/private/sections/') as $file) {
// // 	echo $file;
// // 	$file_contents = file_get_contents($file);
// // 	// var_dump($file_contents);
// // 	if (!strpos($file_contents, '$uid == 2 || $uid == 100') && !strpos($file_contents, '$uid == 2 || $uid == 100')) {
// // 		// echo "\$uid == 2";
// // 		$file_contents = str_replace('$uid == 2', '$uid == 2 || $uid == 100', $file_contents);
// // 		file_put_contents($file, $file_contents);
// // 	}
	
// // }

// foreach(rglob("*.php", 0, '/') as $file) {
//     echo $file;
//     $file_contents = file_get_contents($file);
//     // var_dump($file_contents);
//     if (strpos($file_contents, '</body>')) {
//         // echo "\$uid == 2";
//         $file_contents = str_replace('header("Location: ../../");', 'header("Location: https://1stlytchettscoutgroup.co.uk/pages/private/login.php");', $file_contents);
//         file_put_contents($file, $file_contents);
//     }
    
// }

// var_dump(rglob("*.php", 0, '/'));

// echo "Changed";