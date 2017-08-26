<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->string('ingredients');
            $table->string('img');
            $table->string('price');
            $table->string('cant');
            $table->string('total');
            $table->integer('productstype_id');
            $table->timestamps();
        });

        DB::table('products')->insert([
            ['name' => 'Palta con Pollo"', 
            'description' => "La Reina Pepeada!",
            "ingredients"=>"['Palta','Pollo', 'Mayonesa']",
            "img"=>"img/arepas/ReinaPepiada.jpg",
            "price"=>75,
            "cant"=>0,
            "productstype_id"=>1,
            "total"=>0
            ],
            ['name' => 'Carne Mechada', 
            'description' => "Vacio bien picante!",
            "ingredients"=>"['Vacio','Picadillo']",
            "img"=> "img/arepas/Mechada.jpg",
            "price"=>75,
            "cant"=>0,
            "productstype_id"=>1,
            "total"=>0
            ],
            ['name' => "Poroto y Queso", 
            'description' => "Domino!",
            "ingredients"=>"['Poroto Negro','Queso Rallado']",
            "img"=>"img/arepas/domino.jpg",
            "price"=>75,
            "cant"=>0,
            "productstype_id"=>1,
            "total"=>0
            ],['name' =>"Perico",
            'description' =>"Huevo revuelto!",
            "ingredients"=>"['Huevo','Tomate', 'Cebolla']",
            "img"=>"img/arepas/Perico.jpg",
            "price"=>75,
            "cant"=>0,
            "productstype_id"=>1,
            "total"=>0
            ],['name' => "Jamon, queso, huevo",
            'description' => "Bien Argentina!",
            "ingredients"=>"['Jamon','Queso', 'Huevo']",
            "img"=>  "img/arepas/JamonyQueso.jpg",
            "price"=>75,
            "cant"=>0,
            "productstype_id"=>1,
            "total"=>0
        ],['name' => 'Palta con Pollo"', 
        'description' => "La Reina Pepeada!",
        "ingredients"=>"['Palta','Pollo', 'Mayonesa']",
        "img"=>"img/arepas/ReinaPepiada.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
        "total"=>0
        ],
        ['name' => 'Carne Mechada', 
        'description' => "Vacio bien picante!",
        "ingredients"=>"['Vacio','Picadillo']",
        "img"=> "img/arepas/Mechada.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
        "total"=>0
        ],
        ['name' => "Poroto y Queso", 
        'description' => "Domino!",
        "ingredients"=>"['Poroto Negro','Queso Rallado']",
        "img"=>"img/arepas/domino.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
        "total"=>0
        ],['name' =>"Perico",
        'description' =>"Huevo revuelto!",
        "ingredients"=>"['Huevo','Tomate', 'Cebolla']",
        "img"=>"img/arepas/Perico.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
        "total"=>0
        ],['name' => "Jamon, queso, huevo",
        'description' => "Bien Argentina!",
        "ingredients"=>"['Jamon','Queso', 'Huevo']",
        "img"=>  "img/arepas/JamonyQueso.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
        "total"=>0
        ]]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

