<!DOCTYPE html>
<html>
<head>
  <title>Write Article</title>
</head>
<body>

<h2>Write New Article</h2>

<form action="save-article.php" method="POST" enctype="multipart/form-data">

  <input type="text" name="title" placeholder="Article Title" required><br><br>

  <input type="text" name="subtitle" placeholder="Subtitle"><br><br>

  <select name="category">
    <option>Politics</option>
    <option>Entertainment</option>
    <option>Sports</option>
    <option>Viral</option>
  </select><br><br>

  <textarea name="content" id="editor"></textarea><br><br>

  <input type="file" name="featured_image"><br><br>

  <select name="status">
    <option value="draft">Save as Draft</option>
    <option value="published">Publish</option>
  </select><br><br>

  <button type="submit">Save Article</button>

</form>

<script src="https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js"></script>
<script>
  CKEDITOR.replace('editor');
</script>

</body>
</html>
