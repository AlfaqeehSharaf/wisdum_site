<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quotes_db";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $quote_id = $_POST['quote_id'];
    $comment = $_POST['comment'];

    $sql = "INSERT INTO comments (quote_id, comment) VALUES ('$quote_id', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo "Comment added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
