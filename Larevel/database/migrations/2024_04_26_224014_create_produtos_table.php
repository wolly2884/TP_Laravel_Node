<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('cd_produto', 10);
            $table->string('ds_produto', 100);
            $table->date('dt_compra');
            $table->integer('qt_quantidade')->unsigned();
            $table->decimal('vl_unitario', 14, 2); 
            $table->decimal('vl_total', 14, 2);
            $table->text('ds_observacao')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
