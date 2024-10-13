<?php

namespace App\Http\Controllers;

use App\Mail\ReplyMessage;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Message::class) && ($request->user()->cannot('create', Message::class) || $request->user()->cannot('delete', Message::class) || $request->user()->cannot('update', Message::class))) {
            return abort(403);
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

    public function update(string $id, Request $request)
    {
        if ($request->user()->cannot('update', Message::class)) {
            return abort(403);
        }
        $message = Message::where('message_id', $id)->first();
        $message->update(['read_at' => now()]);

        Cache::forget('hasUnreadMessages');
        return redirect()->back();
    }

    public function readAll(Request $request)
    {
        if ($request->user()->cannot('update', Message::class)) {
            return abort(403);
        }
        Message::query()->update(['read_at' => now()]);
        Cache::forget('hasUnreadMessages');
        return redirect()->back();
    }

    public function destroy(string $id, Request $request)
    {
        if ($request->user()->cannot('delete', Message::class)) {
            return abort(403);
        }
        $message = Message::find($id);
        $message->delete();
        Cache::forget('hasUnreadMessages');
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Message supprimé avec succès']);
    }

    public function destroyAll(Request $request)
    {
        if ($request->user()->cannot('delete', Message::class)) {
            return abort(403);
        }
        DB::table('messages')->delete();
        Cache::forget('hasUnreadMessages');
        return redirect()->back()->with('message', ['status' => 'success', 'message'
        => 'Messages supprimé avec succès']);
    }

    public function store(Request $request)
    {
        $request->validate([
            'client_email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        Message::create([
            'user_id' => $request->user() ? $request->user()->id : null,
            'client_email' => $request->user() ? $request->user()->email : $request->client_email,
            'subject' => $request->subject,
            'message' => $request->message,
            'read_at' => null,
        ]);
        Cache::forget('hasUnreadMessages');

        return redirect()->back()->with('message', ['status' => 'success', 'message' => 'Message envoyé avec sucssé']);
    }
}
