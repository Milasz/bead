<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Mentes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mentes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('Player ID')->unsigned();
            $table->foreign('Player ID')->references('id')->on('users');
            $table->integer('Kaszt');
            $table->integer('Pálya');
            $table->boolean('Elsődleges Fegyver');
            $table->boolean('Elsődleges Fegyver Fejlesztett');
            $table->boolean('Elsődleges Fegyver Nincs');
            $table->boolean('Másodlagos Fegyver');
            $table->boolean('Másodlagos Fegyver Fejlesztett');
            $table->boolean('Másodlagos Fegyver Nincs');
            $table->boolean('Különleges Képesség');
            $table->boolean('Különleges 1 Fegyver');
            $table->boolean('Különleges 1 Fegyver Használt');
            $table->boolean('Különleges 1 Fegyver Nincs');
            $table->boolean('Különleges 2 Fegyver');
            $table->boolean('Különleges 2 Fegyver Használt');
            $table->boolean('Különleges 2 Fegyver Nincs');
            $table->boolean('Szerencse');
            $table->boolean('Szellem');
            $table->boolean('Xp');
        }
    );
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
