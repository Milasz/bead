<!DOCTYPE html>
<html>
<!-- design -->
    <head>
    </head>
    <body  style="margin: 0 auto;">
    <div class="container" >
    Regisztráció
        <link href="{{asset('css/style.css')}}" rel="stylesheet">
        <form method="post"> 
            @csrf
            <input name="username" placeholder="Felhasználónév" type="text">
            <input name="password" placeholder="Jelszó" type="password">
            <input name="passwordcheck" placeholder="Jelszó ismét" type="passwordcheck">
            <button>Regisztráció</button>  
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
    </script>
</html>