<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LogoutController extends Controller
{
    public function logout()
    {
        Auth::logout();
        return redirect('belepes');
    }
}
