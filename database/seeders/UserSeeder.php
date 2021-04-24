<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    // @return void
    public function run()
    {
        DB::table('users')->insert([
            'name'=> "Bagi Milász",
            'email' => "asdsad@gmail.com",
            'password' => Hash::make("csicskavagy1")

        ]);
        DB::table('users')->insert([
            'name'=> "Vendég",
            'password' => Hash::make("csicskavagy1")
        ]);
        
    }
}
