<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'api/products/count',
        'api/products',
        'api/graphql',
        'api/webhooks',
        'api/productslist',
        '/badges', // Ensure this line is here
        
    ];
}
