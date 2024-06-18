<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('Clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nm_cliente', 100);
            $table->date('dt_nascimento');
            $table->string('cd_cpf', 11)->nullable();
            $table->string('cd_registro_geral', 20)->nullable();
            $table->string('ds_orgao_emissor', 50)->nullable();
            $table->string('ds_telefone_cliente', 20)->nullable();
            $table->string('ds_email_cliente', 100)->nullable();
            $table->string('ds_lougradouro_cliente', 100)->nullable();
            $table->string('cd_cep_cliente', 20)->nullable();
            $table->string('cd_numero_lougradouro_cliente', 20)->nullable();
            $table->string('ds_complemento_lougradouro_cliente', 100)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
