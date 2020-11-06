<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #div1 {
            float: left;
            height: 100px;
            width: 100px;
            background-color:crimson;
            position: relative;
            z-index: 3;
        }
        #div2 {
            float: left;
            height: 80px;
            width: 80px;
            background-color:aquamarine;
        }
        #div3 {
            float: left;
            height: 60px;
            width: 60px;
            background-color:cornsilk;
        }
    </style>

    <script type='text/javascript'>
        window.onload = function() {
            let div1 = document.getElementById('div1');
            let div2 = document.getElementById('div2');
            let div3 = document.getElementById('div3');
            let input = document.getElementById('input');
            input.onclick = function() {
                console.log(11111);
            }
            // 事件监听
            div1.addEventListener('click', () => {
                console.log('div1')
            }, true);
            // 解除事件绑定
            div1.removeEventListener('click', () => {
                console.log('div1')
            }, true)
            div2.addEventListener('click', () => {
                console.log('div2')
            });
            div3.addEventListener('click', () => {
                console.log('div3')
            });
           
            // function divSay(i) {
            //     console.log(i);
            // }
            // console.log('hhhhh');
        }
        
    </script>
    
</head>
<body>
    <div id = 'div1'>
        <div id = 'div2'>
            <div id = 'div3'>haode 
            </div>
        </div>
    </div>
    <input type='button' value='按钮' id ='input'>
</body>
</html>
