<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fornecedores', function (Blueprint $table) {
            $table->id();
            $table->string('nm_fantasia', 100);
            $table->date('dt_fundacao');
            $table->string('cd_cpf_cnpj', 14)->nullable();
            $table->string('ds_telefone_fornecedor', 20)->nullable();
            $table->string('ds_email_fornecedor', 100)->nullable();
            $table->string('ds_lougradouro_fornecedor', 100)->nullable();
            $table->string('cd_cep_fornecedor', 20)->nullable();
            $table->string('cd_numero_lougradouro_fornecedor', 20)->nullable();
            $table->string('ds_complemento_lougradouro_fornecedor', 100)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fornecedores');
    }
};

