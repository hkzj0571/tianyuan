<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(PermissionsTableSeeder::class);
         $this->call(RolesTableSeeder::class);
         $this->call(MenusTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(Mini_classifiesTableSeeder::class);
         $this->call(GoodsTableSeeder::class);
         $this->call(BannerTableSeeder::class);
//         $this->call(KeywordsTableSeeder::class);
//         $this->call(CouponsTableSeeder::class);
    }
}
