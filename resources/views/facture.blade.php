{{-- resources/views/facture.blade.php --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Facture #{{ $facture->facture_id }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .header, .footer {
            text-align: center;
        }
        .content {
            margin: 20px;
        }
        .table {
            width: 100%;
            margin-bottom: 20px;
            border-collapse: collapse;
        }
        .table th, .table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Facture #{{ $facture->facture_id }}</h1>
    </div>
    <div class="content">
        <p>Date: {{ $facture->created_at->format('Y-m-d') }}</p>
        {{-- <p>Client: {{ $facture->data->user->first_name }} {{ $facture->data->user->last_name }}</p> --}}
        <h3>Booking Details:</h3>
        <table class="table">
            <tr>
                <th>Room Number</th>
                <th>Check In</th>
                <th>Check Out</th>
            </tr>
            {{-- @foreach($facture->data->rooms as $room)
            <tr>
                <td>{{ $room->room_number }}</td>
                <td>{{ $facture->data->check_in }}</td>
                <td>{{ $facture->data->check_out }}</td>
            </tr>
            @endforeach --}}
        </table>
        <h3>Total: 7500</h3>
        {{-- <h3>Total: {{ number_format($facture->total_amount, 2) }}</h3> --}}
    </div>
    <div class="footer">
        <p>Thank you for your business!</p>
    </div>
</body>
</html>
