<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('no');
            $table->string('body');
            $table->unsignedInteger('members_id');
            $table->unsignedInteger('goods_id');
            $table->integer('coupons_id')->default(0)->common('优惠券ID');;
            $table->decimal('price');
            $table->boolean('is_payed')->default(false);
            $table->timestamp('payed_at')->nullable();
            $table->string('prepay_id')->nullable();
            $table->integer('state')->default(0)->common('状态');
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
        Schema::dropIfExists('orders');
    }
}
