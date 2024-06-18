<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tipo_servico', function (Blueprint $table) {
            $table->id();
            $table->string('ds_servico', 50);
            $table->decimal('vl_servico', 10, 2);
            $table->string('ds_unidade_custo', 50);
            $table->boolean('ic_gerar_ordem_servico')->default(false);
            $table->boolean('ic_ativo')->default(true);
            $table->decimal('vl_desconto_servico', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tipo_servico');
    }
};
