<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // ブログ
    Route::resource('/blogs', BlogController::class)
        ->names(['index'=>'blog.index',
                'create' => 'blog.create',
                'store' => 'blog.store',
                'destroy' => 'blog.destroy',
                'edit' => 'blog.edit',
                'update' => 'blog.update',
                'show' => 'blog.show',
            ]);
    // フォーム
    Route::get('/form', [FormController::class, 'index'])->name('form.index');
    // リッチエディタ
    Route::get('/form/myEditor', [FormController::class, 'myEditor'])->name('form.myEditor');
    // アイテム
    Route::get('/item', [ItemController::class, 'index'])->name('item.index');
});

require __DIR__.'/auth.php';
