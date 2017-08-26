<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Products extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return Response
     */
     public function index($id = null) {
        if ($id == null) {
            return Product::orderBy('id', 'asc')->get();
        } else {
            return $this->show($id);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
     public function store(Request $request) {
        $product = new Product;

        $product->name = $request->input('name');
        $product->email = $request->input('description');
        $product->position = $request->input('img');
        $product->position = $request->input('price');
        $product->position = $request->input('cant');
        $product->position = $request->input('productstype_id');
        $product->save();

        return 'product record successfully created with id ' . $product->id;
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
     public function show($id) {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id) {
        $product = Product::find($id);

        $product->name = $request->input('name');
        $product->email = $request->input('description');
        $product->position = $request->input('img');
        $product->position = $request->input('price');
        $product->position = $request->input('cant');
        $product->position = $request->input('productstype_id');
        $product->save();

        return "Sucess updating user #" . $product->id;
    }

     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
     public function destroy(Request $request) {
        $product = Product::find($request->input('id'));

        $product->delete();

        return "product record successfully deleted #" . $request->input('id');
    }
}
