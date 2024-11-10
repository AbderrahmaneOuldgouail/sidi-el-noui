<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BookingStatus extends Mailable
{
    use Queueable, SerializesModels;

    public $booking_status;
    public $booking;

    /**
     * Create a new message instance.
     */
    public function __construct($booking_status, $booking)
    {
        $this->booking_status = $booking_status;
        $this->booking = $booking;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Réservation chez Sidi El Noui',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $url = config('app.url');
        return new Content(
            markdown: 'mail.bookingstatus',
            with: [
                'url' => $url,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
