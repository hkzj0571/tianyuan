<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->integer('mini_classify_id')->unsigned();;
            $table->foreign('mini_classify_id')->references('id')->on('mini_classify');
            $table->string('image');
            $table->string('intro');
            $table->text('more');
            $table->decimal('price')->common('原价');
            $table->boolean('is_shelve')->default(false)->common('是否上架');
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
        Schema::dropIfExists('goods');
    }
}
