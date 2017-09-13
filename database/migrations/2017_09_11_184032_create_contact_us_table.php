<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactUsTable extends Migration
{
        /**
        * Run the migrations.
        *
        * @return void
        */
        public function up()
        {
            Schema::create('contactus', function (Blueprint $table) { 
                $table->increments('id'); 
                $table->string('calle');
                $table->string('altura'); 
                $table->string('localidad');
                $table->string('piso'); 
                $table->string('depto');
                $table->string('nombre');
                $table->string('apellido');
                $table->string('email');
                $table->string('telefono');
                 $table->string('comment');
                $table->timestamps(); });
        }
        
        /**
        * Reverse the migrations.
        *
        * @return void
        */
        public function down()
        {
            Schema::drop("contactus");
        }
}
