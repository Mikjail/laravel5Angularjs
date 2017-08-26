<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = array(
    'id', 
    'name',
     'description',
     'img', 
     'price', 
     'cant',
      'productstype_id');


}
