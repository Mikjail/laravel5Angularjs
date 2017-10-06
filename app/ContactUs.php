<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    public $table = 'contactus';
 
    protected $fillable = array(
    'nombre',
    'apellido',
    'email',
    'telefono');

}
