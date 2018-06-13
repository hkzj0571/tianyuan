<?php

namespace App\Listeners;

use App\Events\GoodsBuyed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendTemplateInform
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  GoodsBuyed  $event
     * @return void
     */
    public function handle(GoodsBuyed $event)
    {
        sleep(5);

        $order = $event->order;

        $page = 'pages/markorder/markorder?oid='.$order->id;

        $info = [
            'touser' => $order->member->openid,
            'template_id' => 'nJxJ4bHoASXM8-i5eRUd9frE_1nJup0yDbMoucuxii8',
            'page' => $page,
            'form_id' => $order->prepay_id,
            'data' => [
                'keyword1' => (string) $order->no,
                'keyword2' => $order->body,
                'keyword3' => $order->price,
                'keyword4' => $order->payed_at,
            ],
        ];

        \EasyWeChat::miniProgram()->template_message->send($info);
    }
}
