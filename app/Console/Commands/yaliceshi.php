<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Pool;

class yaliceshi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $client = new Client();
        $api          = new Api();
        $this->config = config('hangyang');
        $options      = array_filter([
            'query' => [
                'uid' => array_get($this->config, 'uid'),
                'sid' => array_get($this->config, 'sid'),
                'format' => array_get($this->config, 'format'),
                'ts' =>Carbon::now()->toDateTimeString(),
                'sig' => $this->get_sig(),
            ],
            'form_params' => [
                "is_inter" => 2,
                "res_id" => 5593,
                "ck_in" => "2018-03-02",
                "ck_out" => "2018-03-10",
                "adults" => 2,
                "childs" => 1,
                "rooms" => 1,
            ],
        ]);

        $times    = [];
        $requests = function () use ($client, $api, $options, &$times) {
            for ($i = 0; $i < 100000; $i++) {
                yield function () use ($client, $options, &$times, $i) { $times[$i] = microtime(true);
                    return $client->postAsync('http://hf.17eu.com/Api/Hotel/price', $options);
                };
            }
        };

        $pool = new Pool($client, $requests(100000), [ 'concurrency' => 100,
            'fulfilled' => function ($response, $index) use (&$times) {

                $times[$index] = microtime(true) - $times[$index];
                $str = "第{$index}次请求，耗时 ".$times[$index];
                $this->info($str);
            },
            'rejected' => function ($reason, $index) {

            },
        ]);

        // 开始发送请求
        $promise = $pool->promise();
        $promise->wait();
        dd($times);
    }
    protected function get_sig()
    {
        $needs = [
            array_get($this->config, 'uid'),
            array_get($this->config, 'sid'),
            Carbon::now()->toDateTimeString(),
            strtoupper(md5(array_get($this->config, 'appsecret'))),
        ];
        return strtoupper(md5(implode(',', array_filter($needs))));

    }
}
