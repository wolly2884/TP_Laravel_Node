<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = ['id','cd_produto','ds_produto','dt_compra','qt_quantidade','vl_unitario','vl_total','ds_observacao'];

}
