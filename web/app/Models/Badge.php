<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
    use HasFactory;

    // Define which fields are mass assignable
    protected $fillable = [
        'badge_name',
        'badge_type',
        'status',
    ];

    // Define the relationship: A Badge has many BadgePages

    public function badgePages()
    {
        return $this->hasMany(BadgePage::class, 'badge_id');
    }
    

}
