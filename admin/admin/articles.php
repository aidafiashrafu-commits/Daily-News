<?php
include '../includes/db.php';
$result = mysqli_query($conn, "SELECT * FROM articles");
?>

<h2>All Articles</h2>

<table border="1">
<tr>
  <th>Title</th>
  <th>Status</th>
</tr>

<?php while($row = mysqli_fetch_assoc($result)) { ?>
<tr>
  <td><?= $row['title']; ?></td>
  <td><?= $row['status']; ?></td>
</tr>
<?php } ?>
</table>
