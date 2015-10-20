<?php
 

 $email = $_POST['email'];
 $user = "root";
 $pass = "buLop2RE6x";

try {
  $dbh = new PDO('mysql:host=localhost;dbname=MilsimPaintball', $user, 'root');
} catch (Exception $e) {
  die("Impossible de se connecter: " . $e->getMessage());
}

try {  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $dbh->beginTransaction();
  $dbh->exec("insert into newsletter (id, email) values ('', '$email')");
  $dbh->commit();

  readfile("index.html");

} catch (Exception $e) {
  $dbh->rollBack();
  echo "Failed: " . $e->getMessage();
}

?>