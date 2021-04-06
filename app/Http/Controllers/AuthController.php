<?php



namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function betoltes()
    {
        return view('belepes');
    }
    public function Auth(Request $request)
    {
        $username = request()->input('username');
        $password = request()->input('password');

        if(Auth::attempt(['name'=>$username, 'password'=> $password])){           
            return view('welcome');
        }
        return "sikertelen";

    }
}
