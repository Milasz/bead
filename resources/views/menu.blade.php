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
    <div > Üdvözlünk a játékban </div>
    <div  class="btn-grid">
    <a href="canvas4" style="text-decoration:none" class="btn">Új játék kezdése</a>
    <button class="btn">Mentett játék állás folytatása</button>    
    <a href="/logout" style="text-decoration:none" class="btn">Kilépés</a>
    </div>
</div>


</body>
<script>
    var msg = '{{Session::get("alert")}}';
        var exist = '{{Session::has("alert")}}';
        if(exist)
        {
            alert(msg);
        }
    </script>

</html>