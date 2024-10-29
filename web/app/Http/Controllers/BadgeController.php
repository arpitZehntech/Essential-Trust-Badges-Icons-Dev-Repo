<?php

// // namespace App\Http\Controllers;

// // use Illuminate\Http\Request;
// // use App\Models\Badge;


// // class BadgeController extends Controller
// // {
// //     public function index()
// //     {
// //         // Retrieve all reviews from the database
// //         $badge = Badge::all();
// //         return response()->json($badge);
// //     }
// // }
// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Badge;
// use App\Models\BadgePage;
// use Illuminate\Support\Facades\Log;


// class BadgeController extends Controller
// {
//     public function index()
//     {
//         try {
//             $badges = Badge::with('badgePages')->get();
//             \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             \Log::error('Error fetching badges: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badges'], 500);
//         }
//     }

//     public function show($id)
//     {
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id);
//             Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
//             return response()->json($badge);
//         } catch (\Exception $e) {
//             Log::error('Error fetching badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badge'], 500);
//         }
//     }

//     // public function store(Request $request)
//     // {
//     //     $validatedData = $request->validate([
//     //         'badge_name' => 'nullable|string|max:255',
//     //         'badge_type' => 'nullable|string|max:255',
//     //         'status' => 'nullable|string|max:255',
//     //         'badge_pages' => 'array',
//     //         'badge_pages.*.title' => 'string|nullable',
//     //         'badge_pages.*.subheading' => 'string|nullable',
//     //         'badge_pages.*.icon_name' => 'string|nullable',
//     //         'badge_pages.*.call_to_action' => 'string|nullable',
//     //         'badge_pages.*.button_text' => 'string|nullable',
//     //     ]);

//     //     $badge = Badge::create([
//     //         'badge_name' => $validatedData['badge_name'],
//     //         'badge_type' => $validatedData['badge_type'],
//     //         'status' => $validatedData['status'],
//     //     ]);

//     //     foreach ($validatedData['badge_pages'] as $pageData) {
//     //         $badge->badgePages()->create($pageData);
//     //     }

//     //     return response()->json(['message' => 'Badge created successfully'], 201);
//     // }

//     // public function update(Request $request, $id)
//     // {
//     //     $validatedData = $request->validate([
//     //         'badge_name' => 'nullable|string|max:255',
//     //         'badge_type' => 'nullable|string|max:255',
//     //         'status' => 'nullable|string|max:255',
//     //         'badge_pages' => 'array',
//     //         'badge_pages.*.title' => 'string|nullable',
//     //         'badge_pages.*.subheading' => 'string|nullable',
//     //         'badge_pages.*.icon_name' => 'string|nullable',
//     //         'badge_pages.*.call_to_action' => 'string|nullable',
//     //         'badge_pages.*.button_text' => 'string|nullable',
//     //     ]);

//     //     try {
//     //         $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//     //         $badge->update([
//     //             'badge_name' => $validatedData['badge_name'],
//     //             'badge_type' => $validatedData['badge_type'],
//     //             'status' => $validatedData['status'],
//     //         ]);

//     //         // Update badge pages
//     //         if (isset($validatedData['badge_pages'])) {
//     //             // Remove existing badge pages
//     //             $badge->badgePages()->delete();

//     //             // Create new badge pages
//     //             foreach ($validatedData['badge_pages'] as $pageData) {
//     //                 $badge->badgePages()->create($pageData);
//     //             }
//     //         }

//     //         return response()->json(['message' => 'Badge updated successfully'], 200);
//     //     } catch (\Exception $e) {
//     //         \Log::error('Error updating badge: ' . $e->getMessage());
//     //         return response()->json(['error' => 'Unable to update badge'], 500);
//     //     }
//     // }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);
    
//         $badge = Badge::create([
//             'badge_name' => $validatedData['badge_name'],
//             'badge_type' => $validatedData['badge_type'],
//             'status' => $validatedData['status'],
//         ]);
    
//         foreach ($validatedData['badge_pages'] as $pageData) {
//             $badge->badgePages()->create($pageData);
//         }
    
//         return response()->json(['message' => 'Badge created successfully'], 201);
//     }
    
    
//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);
    
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//             $badge->update([
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);
    
//             // Update badge pages
//             if (isset($validatedData['badge_pages'])) {
//                 // Remove existing badge pages
//                 $badge->badgePages()->delete();
    
//                 // Create new badge pages
//                 foreach ($validatedData['badge_pages'] as $pageData) {
//                     $badge->badgePages()->create($pageData);
//                 }
//             }
    
//             return response()->json(['message' => 'Badge updated successfully'], 200);
//         } catch (\Exception $e) {
//             \Log::error('Error updating badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to update badge'], 500);
//         }
//     }
    

//     public function destroy($id)
//     {
//         try {
//             $badge = Badge::findOrFail($id); // Find the badge by ID
//             $badge->badgePages()->delete(); // Delete associated badge pages
//             $badge->delete(); // Delete the badge itself

//             return response()->json(['message' => 'Badge deleted successfully'], 200);
//         } catch (\Exception $e) {
//             \Log::error('Error deleting badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to delete badge'], 500);
//         }
//     }
// }


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Badge;
use App\Models\BadgePage;
use Illuminate\Support\Facades\Log;

class BadgeController extends Controller
{
    public function index()
    {
        try {
            $badges = Badge::with('badgePages')->get();
            \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
            return response()->json($badges);
        } catch (\Exception $e) {
            \Log::error('Error fetching badges: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch badges'], 500);
        }
    }
    

    public function show($id)
    {
        try {
            $badge = Badge::with('badgePages')->findOrFail($id);
            Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
            return response()->json($badge);
        } catch (\Exception $e) {
            Log::error('Error fetching badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch badge'], 500);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'badge_name' => 'nullable|string|max:255',
            'badge_type' => 'nullable|string|max:255',
            'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
            'badge_pages' => 'array',
            'badge_pages.*.title' => 'string|nullable',
            'badge_pages.*.subheading' => 'string|nullable',
            'badge_pages.*.icon_name' => 'string|nullable',
            'badge_pages.*.call_to_action' => 'string|nullable',
            'badge_pages.*.button_text' => 'string|nullable',
        ]);

        $badge = Badge::create([
            'badge_name' => $validatedData['badge_name'],
            'badge_type' => $validatedData['badge_type'],
            'status' => $validatedData['status'],
        ]);

        foreach ($validatedData['badge_pages'] as $pageData) {
            $badge->badgePages()->create($pageData);
        }

        return response()->json(['message' => 'Badge created successfully'], 201);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'badge_name' => 'nullable|string|max:255',
            'badge_type' => 'nullable|string|max:255',
            'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
            'badge_pages' => 'array',
            'badge_pages.*.title' => 'string|nullable',
            'badge_pages.*.subheading' => 'string|nullable',
            'badge_pages.*.icon_name' => 'string|nullable',
            'badge_pages.*.call_to_action' => 'string|nullable',
            'badge_pages.*.button_text' => 'string|nullable',
        ]);

        try {
            $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
            $badge->update([
                'badge_name' => $validatedData['badge_name'],
                'badge_type' => $validatedData['badge_type'],
                'status' => $validatedData['status'],
            ]);

            // Update badge pages
            if (isset($validatedData['badge_pages'])) {
                // Remove existing badge pages
                $badge->badgePages()->delete();

                // Create new badge pages
                foreach ($validatedData['badge_pages'] as $pageData) {
                    $badge->badgePages()->create($pageData);
                }
            }

            return response()->json(['message' => 'Badge updated successfully'], 200);
        } catch (\Exception $e) {
            \Log::error('Error updating badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to update badge'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $badge = Badge::findOrFail($id); // Find the badge by ID
            $badge->badgePages()->delete(); // Delete associated badge pages
            $badge->delete(); // Delete the badge itself

            return response()->json(['message' => 'Badge deleted successfully'], 200);
        } catch (\Exception $e) {
            \Log::error('Error deleting badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to delete badge'], 500);
        }
    }
}
