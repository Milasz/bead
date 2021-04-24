<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MentesController extends Controller
{
    public function mentes()
    {     
        DB::table('mentes')->insert(
            ['Player ID'=> $PID,
             'ID'=> $ID, 
             'Kaszt'=> $Kaszt,
             'Pálya'=> $Palya,
             'Elsődleges Fegyver'=> $EF,
             'Elsődleges Fegyver Fejlesztett'=> $EFF,
             'Elsődleges Fegyver Fejlesztett'=> $EFF,
             'Elsődleges Fegyver Nincs'=> $EFN,
             'Másodlagos Fegyver'=> $MF,
             'Másodlagos Fegyver Nincs'=> $MFN,
             'Másodlagos Fegyver Fejlesztett'=> $MFF,
             'Különleges Képesség'=> $KKP,
             'Különleges 1 Fegyver'=> $K1F,
             'Különleges 1 Fegyver Használt'=> $K1H,
             'Különleges 1 Fegyver Nincs'=> $K1N,
             'Különleges 2 Fegyver'=> $K2F,
             'Különleges 2 Fegyver Használt'=> $K2H,
             'Különleges 2 Fegyver Nincs'=> $K2N,
             'Szerencse'=> $Szerencse,
             'Szellem'=> $Szellem,
             'Xp'=> $Xp
            ]);
        DB::table('mentes')->where('Player ID', $PID)->update(
            [ 
             'ID'=> $ID, 
             'Kaszt'=> $Kaszt,
             'Pálya'=> $Palya,
             'Elsődleges Fegyver'=> $EF,
             'Elsődleges Fegyver Fejlesztett'=> $EFF,
             'Elsődleges Fegyver Fejlesztett'=> $EFF,
             'Elsődleges Fegyver Nincs'=> $EFN,
             'Másodlagos Fegyver'=> $MF,
             'Másodlagos Fegyver Nincs'=> $MFN,
             'Másodlagos Fegyver Fejlesztett'=> $MFF,
             'Különleges Képesség'=> $KKP,
             'Különleges 1 Fegyver'=> $K1F,
             'Különleges 1 Fegyver Használt'=> $K1H,
             'Különleges 1 Fegyver Nincs'=> $K1N,
             'Különleges 2 Fegyver'=> $K2F,
             'Különleges 2 Fegyver Használt'=> $K2H,
             'Különleges 2 Fegyver Nincs'=> $K2N,
             'Szerencse'=> $Szerencse,
             'Szellem'=> $Szellem,
             'Xp'=> $Xp
            ]
        );
        return 'asd';
    }
}
