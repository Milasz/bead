<!DOCTYPE html>
<html lang="hun">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{asset('css/style.css')}}" rel="stylesheet">
    <title>Csapatnév</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
</head>
<body style="margin: 0 auto;">
<div class="container">
    <!-- <div id="image" class="image"></div> -->
    <div id="text"> Text </div>
   
    <div id="option-buttons" class="btn-grid">
        <button class="btn">Option 1</button>
        <button class="btn">Option 2</button>
        <button class="btn">Option 3</button>
        <button class="btn">Option 4</button>        
    </div>
</div>

<div class="image" id = "kep">
    <img  id="image">
    </div>
    


<script type="text/javascript" src="{{asset('js/jatek.js')}}" ></script>
</body>
<script>
    function mentes(){
        alert('Elmentettem');
        $.ajax({
               type:'get',
               url:'/mentes',  
                            
               success:function(data) {
                  alert(data);
               }
            });
    }
</script>
</html>