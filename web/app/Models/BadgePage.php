<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BadgePage extends Model
{
    use HasFactory;

    // Define which fields are mass assignable
    protected $fillable = [
        'badge_id',
        'title',
        'subheading',
        'icon_name',
        'call_to_action',
        'button_text',
        'product_id',
        'product_json',
        'collection_id',
        'collection_json',
        'external_url',
    ];
    

    // Define the relationship: A BadgePage belongs to a Badge
    public function badge()
    {
        return $this->belongsTo(Badge::class, 'badge_id');
    }
    
}
