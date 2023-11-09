<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApplicationController extends Controller
{
    //
    public function paginaIndex() {

        if(!is_connected()) die("<h3>Internet connection is absent, please check it before continue.</h3>");
        $response = Http::get('https://rickandmortyapi.com/api');

        $dataAPI = array();
        $dataAPI = $response->json();

        return view("index")->with("jsonValue", $dataAPI);
    }
}
