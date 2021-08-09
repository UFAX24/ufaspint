<?php 
session_start();
        if(isset($_POST['token'])){
                  include("connect.php");
                  $token = $_POST['token'];
                  $ufa_id = $_POST['username'];
                 
                 $sql="SELECT * FROM users 
                  WHERE  token ='$token' " ;               
                  $result = mysqli_query($con,$sql) or die("Error") ;
                  $row = mysqli_num_rows($result);     

                  if($row>=1){
                    
                      $row = mysqli_fetch_array($result);

                      $_SESSION["token"] = $row["token"];
                      $_SESSION["id"] = $row["id"];
                      $ufa_idx = $row["ufa_id"];
                      if(empty( $ufa_idx)){
                      $sql4 ="UPDATE users SET                       
                        ufa_id = '$ufa_id'
                        WHERE id = $row[id]";
                       $ch =  mysqli_query($con,$sql4) or die(mysqli_error($con));

                       if($ch){
                        echo "<script> window.location.assign('/spinner/index.html');</script>";              
                       }else{
                        echo "ไม่สามารเข้าได้";
                       }
                          
                    }else{
                      echo "<script>";
                      echo "alert(\"Token ถูกใข้ไปแล้ว\");"; 
                      echo "window.history.back()";
                      echo "</script>";
                    }               
                  }else{
                    echo "<script>";
                        echo "alert(\"Token ไม่ถูกต้อง \");"; 
                        echo "window.history.back()";
                    echo "</script>";
 
                  }
        }else{
 
            echo "<script>";
            echo "alert(\" กรุณากรองข้อมูลให้ครบ\");"; 
            
        echo "</script>";
 
        }
?>