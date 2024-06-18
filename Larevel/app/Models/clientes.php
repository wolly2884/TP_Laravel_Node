<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    use HasFactory;

    protected $fillable = ['id','nm_cliente','dt_nascimento','cd_cpf','cd_registro_geral','ds_orgao_emissor','ds_lougradouro_cliente', 'cd_cep_cliente','cd_numero_lougradouro_cliente','ds_telefone_cliente','ds_email_cliente','ds_complemento_lougradouro_cliente'];

}
