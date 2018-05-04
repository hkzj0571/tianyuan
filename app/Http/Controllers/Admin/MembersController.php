<?php

namespace App\Http\Controllers\Admin;

use App\Models\Members;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MembersController extends Controller
{
    public function index()
    {
        $members = Members::paginate();
        return view('admin.members.index',compact('members'));
    }




}
