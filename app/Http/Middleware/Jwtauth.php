<?php

namespace App\Http\Middleware;

use Closure;

class Jwtauth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return member()->check() ? $next($request) : response()->json(['error' => 'Please to login'], 401);
    }
}
