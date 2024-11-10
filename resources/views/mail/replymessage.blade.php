
<x-mail::message>

{{ $message }}

<x-mail::button :url="$url">
  Visité notre site web
</x-mail::button>

Cordialement,<br>
{{ config('app.name') }}
</x-mail::message>
