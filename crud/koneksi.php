<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'crud_penjualan';

$conn = mysqli_connect($host, $user, $pass, $db);

if ($conn ->connect_error) {
    die ("Koneksi gagal: " . $conn->connect_error);
}
?>