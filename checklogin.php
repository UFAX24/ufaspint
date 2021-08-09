<?php 
session_start();
        if(isset($_POST['token'])){
                  include("connect.php");
                  $token = $_POST['token'];
                  $username = $_POST['username'];
 
                  $sql="SELECT * FROM admin 
                  WHERE  token='".$token."' 
                  AND  username='".$username."' ";
                  $result = mysqli_query($con,$sql);
				
                  if(mysqli_num_rows($result)==1){
                      $row = mysqli_fetch_array($result);
 
                      $_SESSION["token"] = $row["token"];
                      $_SESSION["id"] = $row["id"];
                      echo "<script> window.location.assign('index.html');</script>";                   
                                     
                  }else{
                    echo "<script>";
                        echo "alert(\" user หรือ  username ไม่ถูกต้อง\");"; 
                        echo "window.history.back()";
                    echo "</script>";
 
                  }
        }else{
 
            echo "<script>";
            echo "alert(\" กรุณากรองข้อมูลให้ครบ\");"; 
            
        echo "</script>";
 
        }
?>