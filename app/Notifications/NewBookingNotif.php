<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewBookingNotif extends Notification implements ShouldQueue
{
    use Queueable;

    public $booking;

    /**
     * Create a new notification instance.
     */
    public function __construct($booking)
    {
        $this->booking = $booking;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $url = config('app.url') . 'bookings/' . $this->booking->booking_id;

        return (new MailMessage)
            ->subject('Nouvelle réservation')
            ->greeting('Hello!')
            ->line('Un nouvelle réservation éffectué !')
            ->action('Voir réservation', $url);
    }


    public function toDatabase(object $notifiable): array
    {
        return [
            'booking_id' => $this->booking->booking_id,
            'first_name' => $this->booking->user->first_name,
            'last_name' => $this->booking->user->last_name,
            'check_in' => $this->booking->check_in,
            'check_out' => $this->booking->check_out,

        ];
    }

    /**
     * Get the notification's database type.
     *
     * @return string
     */
    public function databaseType(object $notifiable): string
    {
        return 'new-booking';
    }
}
