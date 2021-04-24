<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegController extends Controller
{

    public function betoltes()
    {
        return view('reg');
    }

    public function letrehoz(Request $request)
    {
        if( $request->input('username') == '' || ($request->input('password')) == '')
        {
            return redirect('/reg')->with('alert','Agyjá meg adatokat pls!');
        }
        if(DB::table('users')->where('name',$request->input('username'))->value('id') != '')
        {            
            return redirect('/belepes')->with('alert','Felhasználó létezik!'); 
        }

        DB::table('users')->insert([
            'name' => $request->input('username'),
            'password' => Hash::make($request->input('password')),
        ]);
        

        return redirect('/belepes');
    }
}
