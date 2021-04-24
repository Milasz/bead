<!DOCTYPE html>
<html>
<!-- design -->
    <head>
    </head>
    <body style="margin: 0 auto;">
    
        <div class="container">
        Belépés
        <link href="{{asset('css/style.css')}}" rel="stylesheet">
        <form method="post"> 
            @csrf
            <input name="username" placeholder="Felhasználónév" type="text">
            <p></p>
            <input name="password" placeholder="Jelszó" type="password">
            <p></p>
            <button input type="submit" class="btn">Belépés</button>
            <a href="/reg" class="btn" style="text-decoration:none">Regisztráció</a>
            <p>Ha nem akarsz regisztrálni vagy csak ki szeretnéd próbálni a játékot a vendég üzemmódot ajánljuk neked.
            Csak pipáld ki itt és kattints a belépésre</p>
            Itt pipálj ki<input type="checkbox" onclick="autofillVendeg()">
        
        </form> 
        </div>  
    </body>
    <script>
    var msg = '{{Session::get("alert")}}';
        var exist = '{{Session::has("alert")}}';
        if(exist)
        {
            alert(msg);
        }

    function autofillVendeg(){
        document.getElementsByName('username')[0].value='Vendég';
    }

    </script>
</html>