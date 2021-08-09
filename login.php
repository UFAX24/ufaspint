<?php session_start();?>
<?php
include('connect.php');
?>
<!DOCTYPE html>
<!--  This site was created in Webflow. http://www.webflow.com  -->
<!--  Last Published: Sun Apr 19 2020 21:30:16 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="5e9cb3491ceb3e226b60e744" data-wf-site="5e96e9f031cf495f5f232afb">
<head>
  <meta charset="utf-8">
  <title>UFAPRO888S</title>
  <meta content="login" property="og:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta content="Webflow" name="generator">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/ufacasino.webflow.css" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Prompt:regular,italic:latin,thai"]  }});</script>
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">
  <!-- <link href="images/webclip.png" rel="apple-touch-icon"> -->
  <style>
          .pure-1{
          font-size: 12px;
        }

        .p-absolute{
          position: absolute;
        }

        .p-relative{
          position: relative;
        }

        .img-ball{
          z-index: 0;
          top: 200px;
          left: 20px;
          max-width: 16%;
          animation: rollIn 1s alternate;
        }
        .img-card{
          top: 0px;
          top: -30px;
          left: 300px;
          max-width: 26%;
          z-index: 0;
          animation: flip .5s  alternate
        }
        .img-dice{
            bottom: 0;
          top: -30px;
          left: 300px;
          z-index: 1;
          max-width: 26%;
          animation: jackInTheBox 1s  alternate;	
        }

        .img-zoom{
          transition: all .2s;
        }
        .img-zoom:hover{
          transform: scale(1.125);
        }
  </style>
</head>
<body>
  <div data-include="navbar"></div>
  <div class="main_content" style="height: 137vh;">
    <div class="section-header">
      <div class="container-warp-login inner-wrapper">
      
        <div class="container-logo">
        <div class="p-relative">
        <img src="images/logo-ufacasino.png" width="100%" alt="">
       <img src="images/มือถือ2.png" alt="มือถือ2" width="80px" class="p-absolute img-ball logo-brand grow" />
       <img src="images/เงิน.png" alt="เงิน" width="60px" class="p-absolute img-card logo-brand grow" />
       <img src="images/มือถือ1.png" alt="มือถือ1" width="50px" class="p-absolute img-dice logo-brand grow" />
        </div>
         </div>
        <div class="container-login">
          <div class="w-form">
            <form name="formlogin" id="login" method="POST" action="checkuser.php">
              <input type="text" class="field-login w-input" autofocus="true" placeholder="TOKEN" id="token" required="required">
              <input type="text" class="field-login w-input" name="USERNAME" data-name="USERNAME" placeholder="username" id="username" required="required">
              <!-- <input type="submit" value="เข้าสู่ระบบ" data-wait="Please wait..." class="btn-login w-button"> -->
              <button id="btn-login-submit" type="submit" class="btn-login w-button">เข้าสู่ระบบ</button>
              <p class="text-register">ยังไม่มี รหัสใช่ไหม? <a href="register.html" target="_self" class="link"><span class="text-span-7">ติดต่อพนักงาน</span></a></p>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
     <!--  <div data-include="mobile" ></div> -->
    </div>
    
   <footer id="footer" class="footer">
      <div class="w-container">
       <!--  <div class="div-footer"><img src="images/tbank.svg" width="75" alt="" class="logo-bank grow"><img src="images/bbl.svg" width="75" alt="" class="logo-bank grow"><img src="images/kbank.svg" width="75" alt="" class="logo-bank grow"><img src="images/ktb.svg" width="75" alt="" class="logo-bank grow"><img src="images/tmb.svg" width="75" alt="" class="logo-bank grow"><img src="images/scb.svg" width="75" alt="" class="logo-bank grow"><img src="images/bay.svg" width="75" alt="" class="logo-bank grow"></div> -->
        <div class="text-footer">Copyright 2099 © <strong>UFAPRO888S</strong>.COM All Rights Reserved.<br>Powered by <a href="https://ufax24.com/" target="_blank" class="link-ufax24">UFAX TEAM</a></div>
      </div>
    </footer>
  </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e96e9f031cf495f5f232afb" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <script src="js/login.js" type="text/javascript"></script>
  <script src="./js/global.js"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>