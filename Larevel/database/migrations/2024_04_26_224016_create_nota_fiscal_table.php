<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('nota_fiscal', function (Blueprint $table) {
            $table->id();
            $table->string('cd_numero_nota', 20);
            $table->date('dt_emissao');
            $table->date('dt_execucao_servico')->nullable();
            $table->string('nm_emitente', 100);
            $table->string('nm_executante', 100);
            $table->decimal('vl_servico_nota_fiscal', 10, 2);
            $table->decimal('vl_unitario_nota_fiscal', 10, 2);
            $table->decimal('vl_desconto_nota_fiscal', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('nota_fiscal');
    }
};

