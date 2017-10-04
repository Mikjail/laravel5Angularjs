<?php

namespace App\Http\Controllers;

use App\ContactUs;
use Illuminate\Http\Request;
use Mail;
class ContactUsController extends Controller
{
   public function contactUSPost(Request $request)
   {
        //  ContactUs::create($request->all());
        $this->store($request);
       
        $data= array(
        'calle' => $request->input('calle'),
        'altura' =>  $request->input('altura'),
        'localidad' => $request->input('localidad'),
        'piso' => $request->input('piso'),
        'depto' => $request->input('depto'),
        'nombre' => $request->input('nombre'),
        'apellido' => $request->input('apellido'),
        'email' => $request->input('email'),
        'telefono' => $request->input('telefono'),
        'comment' =>$request->input('comment'),
        'productoPedido' =>$request->input('productoPedido'),
        'productsType' =>$request->input('productsType'),
        'total' =>$request->input('total'),
        'hora' =>$request->input('hora'),
        'min' =>$request->input('min'),
        );

        $nombre = $request->input('nombre');
        $email = $request->input('email');
        $recipients = [["name" => $nombre, "email" =>  $email ],  ["name" => "Nicho", "email" => "nicholaisalazar@gmail.com"], ["name" => "Mika", "email" => "mikjailsalazar@gmail.com"], ["name" => "Ozzy", "email" => "oswaldosmoncricket@gmail.com"] ];
        
        foreach($recipients as $recipient) {
            Mail::send('email.pedidoForm', $data , function($message) use ($nombre, $email, $recipient){   
            $message->from("info@cambur-pinton.com", "Cambur Pintón");
            $message->to($recipient['email'], $recipient['name'])->subject('Contacto Cambur Pinton');
            });
        }
       return "Success";
   }
          /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
     public function store(Request $request) {
        $contact = new ContactUs;

        $contact->calle = $request->input('calle');
        $contact->altura = $request->input('altura');
        $contact->localidad = $request->input('localidad');
        $contact->piso = $request->input('piso');
        $contact->depto = $request->input('depto');
        $contact->nombre = $request->input('nombre');
        $contact->apellido = $request->input('apellido');
        $contact->email = $request->input('email');   
        $contact->telefono = $request->input('telefono');
        $contact->comment = $request->input('comment');
        $contact->save();

        return 'product record successfully created with id ' . $contact->id;
    }


}
