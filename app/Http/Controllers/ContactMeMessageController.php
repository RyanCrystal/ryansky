<?php

namespace App\Http\Controllers;

use App\Mail\ContactMe;
use Illuminate\Http\Request;
use App\Models\ContactMeMessage;
use Illuminate\Support\Facades\Mail;

class ContactMeMessageController extends Controller
{
    //
    public function submit(Request $request)
    {
        // return view('emails.contact_me');
        // dd($request);
        $formFields = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'message' => 'required'
        ]);

        ContactMeMessage::create($formFields);

        // Mail::to('slaric2014@gmail.com')->send(new ContactMe());
        return view('welcome')->with('message', 'Your message has been sent, thanks!');
    }
}
