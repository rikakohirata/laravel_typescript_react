<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function index()
    {
        return Inertia::render('Form/Index');
    }

    public function myEditor()
    {
        return Inertia::render('Form/MyEditor');
    }
}
