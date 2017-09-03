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
            $table->float('price');
            $table->integer('cant');
            $table->float('total');
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
        ],['name' => "Pernil",
        'description' => "Pierna de Cerdo",
        "ingredients"=>"['Pierna de Cerdo','Tomate']",
        "img"=>  "img/arepas/.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>1,
        "total"=>0
        ],['name' => "Asado Negro",
        'description' => "Peceto en salsa de vino",
        "ingredients"=>"['Peceto','Vino']",
        "img"=>  "img/arepas/.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>1,
        "total"=>0
        ],['name' => "Asado Negro",
        'description' => "Peceto en salsa de vino",
        "ingredients"=>"['Peceto','Vino']",
        "img"=>  "img/arepas/.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
        "total"=>0
        ],['name' => "Pernil",
        'description' => "Pierna de Cerdo",
        "ingredients"=>"['Pierna de Cerdo','Tomate']",
        "img"=>  "img/arepas/JamonyQueso.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>2,
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
        ],['name' => "24 Unidades",
        'description' => "Queso envuelto en masa frita",
        "ingredients"=>"['Queso', 'Harina de Trigo']",
        "img"=> "img/arepas/Tequenos24.jpg",
        "price"=>175,
        "cant"=>0,
        "productstype_id"=>4,
        "total"=>0
        ],['name' => "12 Unidades",
        'description' => "Queso envuelto en masa frita",
        "ingredients"=>"['Queso', 'Harina de Trigo']",
        "img"=> "img/arepas/Tequenos12.jpg",
        "price"=>100,
        "cant"=>0,
        "productstype_id"=>4,
        "total"=>0
        ],['name' => "6 Unidades",
        'description' => "Queso envuelto en masa frita",
        "ingredients"=>"['Queso', 'Harina de Trigo']",
        "img"=>  "img/arepas/.jpg",
        "price"=>75,
        "cant"=>0,
        "productstype_id"=>4,
        "total"=>0
        ],['name' => "Carne de Res",
        'description' => "Carne mechada, vegetales y platano frito",
        "ingredients"=>"['Carne mechada', 'vegetales', 'platano']",
        "img"=>  "img/arepas/.jpg",
        "price"=>45,
        "cant"=>0,
        "productstype_id"=>5,
        "total"=>0
        ],['name' => "Pollo",
        'description' => "Pollo, vegetales y platano frito",
        "ingredients"=>"['Pollo', 'vegetales', 'platano']",
        "img"=>  "img/arepas/.jpg",
        "price"=>45,
        "cant"=>0,
        "productstype_id"=>5,
        "total"=>0
        ],['name' => "Mixto",
        'description' => "Carne, Pollo, vegetales y platano frito",
        "ingredients"=>"['Carne','Pollo', 'vegetales', 'platano']",
        "img"=>  "img/arepas/.jpg",
        "price"=>45,
        "cant"=>0,
        "productstype_id"=>5,
        "total"=>0
        ],['name' =>  "Pollo",
        'description' => "Pollo, vegetales",
        "ingredients"=>"['Pollo', 'vegetales']",
        "img"=>  "img/arepas/.jpg",
        "price"=>45,
        "cant"=>0,
        "productstype_id"=>3,
        "total"=>0
        ],['name' =>  "Carne",
        'description' => "Carne, vegetales, Harina de Maiz",
        "ingredients"=>"['Carne','vegetales']",
        "img"=>  "img/arepas/.jpg",
        "price"=>45,
        "cant"=>0,
        "productstype_id"=>3,
        "total"=>0
        ],['name' => "Mixto",
        'description' => "Carne, Pollo, vegetales, Harina de Maiz",
        "ingredients"=>"['Carne','Pollo', 'vegetales']",
        "img"=>  "img/arepas/.jpg",
        "price"=>45,
        "cant"=>0,
        "productstype_id"=>3,
        "total"=>0
    ],['name' => "Poroto y Queso",
    'description' => "Empanada de Domino, Harina de Maiz",
    "ingredients"=>"['Poroto','Queso']",
    "img"=>  "img/arepas/.jpg",
    "price"=>45,
    "cant"=>0,
    "productstype_id"=>3,
    "total"=>0
],['name' => "Queso",
'description' => "Queso, Harina de Maiz",
"ingredients"=>"['Queso', 'Harina de Maiz']",
"img"=>  "img/arepas/.jpg",
"price"=>45,
"cant"=>0,
"productstype_id"=>3,
"total"=>0
],['name' => "Tartara",
'description' => "",
"ingredients"=>"",
"img"=>  "img/arepas/.jpg",
"price"=>15,
"cant"=>0,
"productstype_id"=>6,
"total"=>0
],['name' => "Picante",
'description' => "",
"ingredients"=>"",
"img"=>  "img/arepas/.jpg",
"price"=>15,
"cant"=>0,
"productstype_id"=>6,
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

