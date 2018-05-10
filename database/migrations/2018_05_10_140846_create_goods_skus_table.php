<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsSkusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods_sku', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('goods_id')->unsigned();
//            $table->foreign('goods_id')->references('id')->on('goods');
            $table->string('sku_name');
            $table->decimal('price')->common('默认价格');
            $table->decimal('kid_price')->default(0)->nullable()->common('儿童价格');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goods_skus');
    }
}
