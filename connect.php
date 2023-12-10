<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$database = "myportfoliodb";

$connect = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($connect->connect_error) {
    die('Connection failed: ' . $connect->connect_error);
}

// Uncomment the line below if you want to confirm successful connection
// echo "Connected Successfully";
?>