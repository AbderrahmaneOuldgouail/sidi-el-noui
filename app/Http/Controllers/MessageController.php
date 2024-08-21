<?php

namespace App\Http\Controllers;

use App\Mail\ReplyMessage;
use App\Models\Message;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Message::class) && ($request->user()->cannot('create', Message::class) || $request->user()->cannot('delete', Message::class) || $request->user()->cannot('update', Message::class))) {
            return Inertia::render('Error/Error_403');
        }
        if ($request->filter == 'unread') {
            $messages = Message::with('user')->where('read_at', null)->latest()->get();
            $filter = 'unread';
        } else {
            $messages = Message::with('user')->latest()->get();
            $filter = 'all';
        }

        return Inertia::render("Admin/Messages/Messages", ['messages' => $messages, 'filter' => $filter]);
    }

    public function reply(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
            'client_email' => 'required|email'
        ]);
        Mail::to($request->client_email)->queue(new ReplyMessage($request->message));

        return redirect(route('messages.index'))->with('message', ['status' => 'success', 'message'
        => 'Message envoyé avec succès']);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(string $id, Request $request)
    {
        if ($request->user()->cannot('update', Message::class)) {
            return Inertia::render('Error/Error_403');
        }
        $message = Message::where('message_id', $id)->first();
        $message->update(['read_at' => now()]);
        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function readAll(Request $request)
    {
        if ($request->user()->cannot('update', Message::class)) {
            return Inertia::render('Error/Error_403');
        }
        Message::query()->update(['read_at' => now()]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Message::class)) {
            return Inertia::render('Error/Error_403');
        }
        $message = Message::find($id);
        $message->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Message supprimé avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroyAll(Request $request)
    {
        if ($request->user()->cannot('delete', Message::class)) {
            return Inertia::render('Error/Error_403');
        }
        DB::table('messages')->delete();
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Messages supprimé avec succès']);
    }
}
