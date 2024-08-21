
<x-mail::message>
# Introduction

{{ $message }}

<x-mail::button :url="$url">
  Visité notre site web
</x-mail::button>

Merci,<br>
{{ config('app.name') }}
</x-mail::message>
