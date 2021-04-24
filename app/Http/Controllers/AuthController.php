<?php



namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


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

    if( $username == 'Vendég')
    {
        //dd(DB::table('users')->get());
        if(Auth::attempt(['name'=>$username, 'password'=> 'csicskavagy1'])){           
        
            return view('menu');
        }
    }   

        if(Auth::attempt(['name'=>$username, 'password'=> $password])){           
            return view('menu');
        }
        return "sikertelen";

    }
}
