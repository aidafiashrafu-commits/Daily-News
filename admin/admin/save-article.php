<?php
include '../includes/db.php';

$title = $_POST['title'];
$subtitle = $_POST['subtitle'];
$content = $_POST['content'];
$category = $_POST['category'];
$status = $_POST['status'];

$slug = strtolower(str_replace(' ', '-', $title));

$image = $_FILES['featured_image']['name'];
move_uploaded_file($_FILES['featured_image']['tmp_name'], "../uploads/$image");

$sql = "INSERT INTO articles 
(title, subtitle, content, category, featured_image, status, slug)
VALUES 
('$title','$subtitle','$content','$category','$image','$status','$slug')";

mysqli_query($conn, $sql);

header("Location: articles.php");
?>
