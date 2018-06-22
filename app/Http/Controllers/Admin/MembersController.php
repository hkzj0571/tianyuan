<?php

namespace App\Http\Controllers\Admin;

use App\Models\Members;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MembersController extends Controller
{
    public function index(Request $request)
    {
        $filters = get_by(['mobile', 'bind_mobile']);
        $members = Members::search('mobile', $filters['mobile'])->whor('bind_mobile', $filters['bind_mobile'])->paginate(10);
        return view('admin.members.index',compact('members','filters'));
    }




}
