<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductstypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->timestamps();
        });

        DB::table('product_types')->insert([
            [
                'name'=>'arepaMaiz',
                'description'=>  "Arepas de Maiz"
            ],
            [
                'name'=>'arepaTrigo',
                'description'=>  "Arepas de Trigo"
            ],
            [
                'name'=>'empanadas',
                'description'=>  "Empanadas"
            ],
            [
                'name'=>'tequenos',
                'description'=>  "Tequenos"
            ],
            [
                'name'=> "patacones",
                'description'=>  "Patacones"
            ],
            [
                'name'=>"salsas",
                'description'=>  "Salsas"
            ]
        ]);
            
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_types');
    }
}
