<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members_coupons', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('members_id')->unsigned();
            $table->foreign('members_id')->references('id')->on('members');
            $table->integer('coupons_id')->unsigned();
            $table->foreign('coupons_id')->references('id')->on('coupons');
            $table->boolean('status')->default(false);
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
        Schema::dropIfExists('members_coupons');
    }
}
