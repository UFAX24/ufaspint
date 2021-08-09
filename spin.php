<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="author" content="marendu">
    <title>Spin Ufa</title>
    <!--  Here is the css part -->
    <style>
    body {
          background-image: url("bg11.png");
        }
      
        #bg {
            width: 50%;
            height: 1000px;
            /* top: 90px; */
            /* width: 650px;
            height: 600px; */
            margin: 0 auto;
            background:url(bgss.png) no-repeat;
            /* background-color: black; */
            position: relative;
            
        }
        img[src^="spinh"]{
            position: relative;
            height: 200px;
            left: 470px;
            /* top: 50px; */
        }

        img[src^="pointer"] {
            position: absolute;
            z-index: 10;
            /* height: 150px; */
            top: 140px;
            left: 420px;
        }

        img[src^="spinufa"] {
            position: absolute;
            z-index: 5;
            top: 225px;
            left: 270px;
            transition: all 4s;
        }
        
   
        
       
    </style>
</head>
<body>
    
    <!--  here isHTMLStructure part -->
    
    <div id="bg"><img src="pointer1.png" alt="pointer"><img src="spinufa.png" alt="turntable"><img src="spinh.png" alt="spinh"></div>
    
    <input type="hidden" id="num" value="0">
    <input type="hidden" id="idTest" value="<?php echo  $_SESSION["id"];?>">
    <!-- <button onclick="btn()">Probability statistics</button>
    <button onclick="test()">test100Draws</button> -->
    <!--  Here is the js part -->
    <script type="text/javascript" src="assets/js/jquery/jquery.min.js"></script>

    <script>
        var oPointer = document.getElementsByTagName("img")[0];
        var oTurntable = document.getElementsByTagName("img")[1];
        var oPointer1 = document.getElementsByTagName("img")[2];
        
        var cat = 36; //A total of 7 fan-shaped areas, each area is about 51.4 degrees
        var offOn = true; //Whether it is drawing
        var transformRotate = 0 //Number of turns
        var randmArr = [0,0.1,0.15,0.5,0.8,10,15,25,30,100] //The probability is calculated as between randmArr[i-1] and randmArr[i]
        // print probability

        function btn(){
            // console.log(form);
            // console.log(obj);
            let num = 0
          Object.keys(obj).map(item=>{
            num += obj[item]
          })
          // console.log(num);

        }
        
          oPointer1.onclick = function () {
            if (offOn == true) {
                offOn = !offOn;
                if($('#num').val() == 0){
                  ratating();
                }else if($('#num').val() >= 1){
                  alert('หมุนได้ครั้งเดียว " นะจ๊ะ " ')
                }
            }
          }
          let n= 0
          var testTime = null
        function test(){
          testTime = setInterval(()=>{
                n++
                if(n>99){
            clearInterval(testTime)
         }
               ratating();
        
           },300);
        }
        //Rotate
        //TODO: Specify the winning interval and pass the interval judgment value
        var prevrdm = 0; //Cache the last rotation
        var obj ={} //Number of random numbers generated
        var form = {} //Statistics on the probability of winning
        var timer = null
        function ratating() {
            var timer = null;
            const rdm =parseInt(Math.random() * (100 - 1) + 1);//Random number
            var num = 10
            var nextrdm = 0; //This rotation
            // console.log('rdm='+rdm);
            // Count the number of random numbers
            if (!obj[rdm]) {
                  obj[rdm] = 1;
                } else {
                  obj[rdm] ++;
                }
            for(var i = 0;i<randmArr.length;i++){
              if(i===0){
                  if(rdm>=0&&rdm<=randmArr[0]){
                    num = i+1
                    break
                  }
              } else {
                if(rdm>randmArr[i-1]&&rdm<=randmArr[i]){
                  num = i+1
                    break
                  }
              }

          }
          // console.log('num='+num);
            clearTimeout(timer);
            timer = null
            timer = setTimeout(function () {
              nextrdm = Math.floor((num* cat)-24); //Define the result of this draw
              var biginRotate = 2*360+(347-prevrdm) //Define the default number of rotations, and at the same time complete the wheel to zero,
              prevrdm = nextrdm

              transformRotate=nextrdm+biginRotate+transformRotate //The degree of this rotation
            // When testing the probability of winning, comment out the following and set the timeout time to 0
              oTurntable.style.transform = "rotate(" +transformRotate+ "deg)";
                    setTimeout(function () {
                        offOn = !offOn;
                        // Count the probability of winning
                          if ( !form['a'+num]) {
                            form['a'+num] = 1;
                          } else {
                            form['a'+num]++
                          }
                          let price = 0
                          var type = 3
                          var id = $('#idTest').val()
                          console.log("id", id)
                        if (nextrdm <= cat * 1) {  }
                        else if (nextrdm <= cat * 2) { price=10000}
                        else if (nextrdm <= cat * 3) { price=8000}
                        else if (nextrdm <= cat * 4) { price=5000}
                        else if (nextrdm <= cat * 5) { price=3000}
                        else if (nextrdm <= cat * 6) { price=1000}
                        else if (nextrdm <= cat * 7) { price=500}
                        else if (nextrdm <= cat * 8) { price=300}
                        else if (nextrdm <= cat * 9) { price=100}
                        else if (nextrdm <= cat * 10) { price=50}
                        $.ajax({
                            type:'POST',
                            data:{id:id,price:price,type:type},
                            url: 'updatetoken.php',
                            success:function(data)
                            {
                                // window.location.assign('index.php')
                            }
                        });
                        $('#num').val(1)
                    }, 0);
            }, 30);
        }
    </script>
    
</body>
</html>
