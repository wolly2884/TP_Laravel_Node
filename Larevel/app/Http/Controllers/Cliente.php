<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use Illuminate\Http\Request;
use App\Http\Resources\ClienteResources;

class Cliente extends Controller

{
    public function index()
    {
        //$produtos = Produto::all();
        // return ProdutoResource::collection($produtos);
        return clientes::all();
    }

    public function store(Request $request)
    {
        // Obter os dados
        $dados = $request->all(); // retorna array com os dados
        $objetoCriado = Clientes::create($dados);
        return $objetoCriado;
    }

    public function show(Clientes $Clientes)
    {
        return $Clientes;
    }

    public function update(Request $request, Clientes $Clientes)
    {
        $Clientes->update($request->all());
        return $Clientes;
    }

    public function destroy(Clientes $Clientes)
    {
        $Clientes->delete();
        return $Clientes;
    }
}
