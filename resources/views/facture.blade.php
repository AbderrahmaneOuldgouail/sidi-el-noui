@php
    use Carbon\Carbon;

    $checkIn = Carbon::parse($facture->data['booking']['check_in']);
    $checkOut = Carbon::parse($facture->data['booking']['check_out']);

    $daysDifference = $checkIn->diffInDays($checkOut);
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
            <meta charset="utf-8">

    <title>Facture N°{{ $facture->facture_id }}</title>
    <style>        
        body {
            font-family: Arial, sans-serif;
            color: #333;
        }
        header, .footer {
            text-align: center;
            margin-bottom: 10px;
        }
        .logo img{
            height: 50px;
            width: 50px;
        }
        header div {
            display: inline-block;
            vertical-align: top;
            width: 32%;
        }
        section {
            text-align: center;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .facture-number, .facture-date {
            width: 100%;
            text-align: left;
            font-weight: 600;
            margin-top: 10px;
        }
        .facture-number span, .facture-date span {
            display: inline-block;
            width: 49%;
        }
        .client-section {
            text-align: left;
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .client {
            border: 2px solid black;
            padding: 5px;
            margin-top: 10px;
            height: 150px;
            
        }
        .client span{
            width: 100%;
            text-align: center;
        }
        .tables {
            margin-top: 20px;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid black;
        }
        .table th, .table td {
            border-left: 1px solid black;
            border-right: 1px solid black;
            padding-left: 4px;
            padding-right: 4px;
            text-align: center;
        }
        .table th{
            border: 1px solid black;
        }
        .total-table {
            width: 40%;
            border-collapse: collapse;
            margin-left: auto;
            margin-right: 0;
            margin-bottom: 20px;
            border-top: none
        }
        .total-table th, .total-table td {
            border: 1px solid black;
            text-align: center;
            padding: 4px;
        }
        .footer-1, .footer-2 {
            text-align: center;
            margin-bottom: 5px;
        }
        .footer-1 div, .footer-2 div {
            display: inline-block;
            margin-right: 10px;
            text-align: center;
        }</style>

</head>
<body>
    <header>
        <div class="hotel-name-fr">
            Hôtel Sidi El Noui
        </div>
        <div class="logo">
            <img src="http://localhost:8000/storage/sidi-el-noui-logo.jpg" />
        </div>
        <div class="hotel-name-ar">
            فندق سيدي النوي
        </div>
    </header>
    <hr/>
    <main>
        <section>
            <div>
                Siege Social : 18 rue Alioua Fodil CHERAGA
            </div>
            <div> 
                <span>Tél : 023 35 82 26 / 30 </span>
                <span>Fax : 023 35 82 32 / 34</span>
                <span>Mail: {{ config('mail.bookingmail') }}</span>
            </div>
        </section>
        <div>
            <div class="facture-number" ><span>Facture </span> <span>{{ $facture->facture_id }}</span> </div>
            <div class="facture-date" ><span>Facturé le </span> <span>{{ $facture->created_at }}</span> </div>
        </div>
        <div class="client-section">
            <div>Doit</div>
            <div class="client">
                <span>{{ $facture->data['user']['first_name'] }} {{ $facture->data['user']['last_name'] }} </span>
                /
                <span>{{ $facture->data['user']['adresse'] ?  "adresse : " . $facture->data['user']['adresse'] : ""}} </span>
                /
                <span>{{ $facture->data['user']['nif'] ?  "Numéro d'Identification Fiscale : " . $facture->data['user']['nif'] : ""}} </span>
                /
                <span>{{ $facture->data['user']['nis'] ?  "Numéro d'Identification Statistique : " . $facture->data['user']['nis'] : ""}} </span>
                /
                <span>{{ $facture->data['user']['nrc'] ?  "Numéro  de registre de commerce : " . $facture->data['user']['nrc'] : ""}} </span>
                /
                <span>{{ $facture->data['user']['n_article'] ?  "Numéro d'article : " . $facture->data['user']['n_article'] : ""}} </span>
            </div>
        </div>
        <div class="tables">
            <table class="table">
                <tr>
                    <th></th>
                    <th>Date</th>
                    <th>Nobmre de jours</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                    <th>Montant HT</th>
                </tr>
                @foreach($facture->data['consomations'] as $consomation)
                <tr>
                    <td>{{ $consomation['consumption_name'] }}</td>
                    <td> / </td>
                    <td> / </td>
                    <td> {{ $consomation['quantity'] }} </td>
                    <td> {{ $consomation['unitare_price'] }} </td>
                    <td> {{ $consomation['unitare_price'] * $consomation['quantity'] }} </td>
                </tr>
                @endforeach
                @foreach($facture->data['rooms'] as $room)
                <tr>
                    <td>{{ $room['room'] }}</td>
                    <td> {{ $facture->data['booking']['check_in'] }} AU {{ $facture->data['booking']['check_out'] }} </td>
                    <td> {{ $daysDifference }} </td>
                    <td> {{ $room['quantity'] }} </td>
                    <td> {{ $room['unitare_price'] }} </td>
                    <td> {{ $room['unitare_price'] * $room['quantity'] }} </td>
                </tr>
                @endforeach
            </table>
            <table class="total-table">
                <tr>
                    <th>Total HT</th>
                    <th>{{ $facture->data['total_ht'] }} </th>
                </tr>
                <tr>
                    <th>Total TVA {{ $facture->tva }} </th>
                    <th>{{ $facture->data['total_tva']}} </th>
                </tr>
                <tr>
                    <td>Sous Total</td>
                    <td>{{ $facture->data['sous_total'] }}</td>
                </tr>
                <tr>
                    <td>Taxe de séjour</td>
                    <td>{{ $facture->data['taxe_de_sejour'] }}</td>
                </tr>
                <tr>
                    <td>Droit de timbre</td>
                    <td>{{ $facture->data['droit_de_timbre'] }}</td>
                </tr>
                <tr>
                    <td>Total TTC</td>
                    <td>{{ $facture->data['total_ttc'] }}</td>
                </tr>
            </table>
        </div>
        <p>LA PRESENTE FACTURE EST ARRETEE A LA SOMME DE :</p>
        <p><b>{{ numberToWords($facture->data['total_ttc']) }}</b></p>
    </main>
    <hr/>
    <footer>
        <div class="footer-1">
            <div>Sarl au capital de: 3 000 000 DA</div>
            <div>RC : 16/00-0011557 B 00</div>
            <div>NIF : 000016001155791 </div>
            <div>A.I : 16500 35 10 11 </div>
        </div>
        <div class="footer-2">
            <div>NIS : 0000165008341 61 </div>
            <div>CPA Agence de AIN BENIAN </div>
            <div>RIB : 004 00 153 400 082361141 </div>
        </div>
    </footer>
</body>
</html>

