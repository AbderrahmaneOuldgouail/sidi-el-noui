
<x-mail::message>
Cher/Chère {{ $booking->user->first_name }} {{ $booking->user->last_name }},

@if ($booking_status === 'confirmé')
Nous avons le plaisir de vous informer que votre réservation à {{ config('app.name') }} a été confirmée avec succès !

Si vous avez des demandes spéciales ou si vous avez besoin d'une assistance supplémentaire, n'hésitez pas à répondre à cet e-mail ou à nous contacter au {{ config('mail.bookingmail') }}.

Merci d'avoir choisi {{ config('app.name') }} ! Nous avons hâte de vous accueillir.

<x-mail::button :url="$url">
  Visitez notre site web
</x-mail::button>

@elseif ($booking_status === 'refusé')
Nous sommes désolés de vous informer que votre réservation à {{ config('app.name') }} a été refusée. 

Pour plus d'informations ou assistance, vous pouvez nous contacter au {{ config('mail.bookingmail') }}.

Nous espérons avoir l'occasion de vous accueillir à une prochaine occasion.

@endif

Cordialement, 
{{ config('app.name') }}  
{{ config('mail.bookingmail') }} 


</x-mail::message>
