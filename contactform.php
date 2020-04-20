<?php 
    if (isset($_POST['submit'])){
    $name=$_POST['first-name'];
    $subject=$_POST['subject']; 
    $mailfrom=$_POST['email']; 
    $message=$_POST['message']; 

    $mailto = "kevinoooey@gmail.com";
    $headers = "from: ".$mailfrom;
    $txt ="you have received an e-mail from ".$name.".\n\n".$message;


    mail($mailto, $subject, $txt, $headers);
    header("Location: contactus?mailsend");
    }    
?> 