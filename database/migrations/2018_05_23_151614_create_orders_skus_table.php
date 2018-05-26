<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersSkusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders_skus', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('orders_id')->unsigned();
            $table->foreign('orders_id')->references('id')->on('orders');
            $table->integer('goods_sku_id')->unsigned();
            $table->foreign('goods_sku_id')->references('id')->on('goods_sku');
            $table->integer('adult')->nullable();
            $table->integer('kids')->nullable();
            $table->string('user_name');
            $table->string('user_phone');
            $table->string('date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders_skus');
    }
}
