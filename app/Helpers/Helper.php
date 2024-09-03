<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

if (!function_exists('numberToWords')) {
  function numberToWords($number)
  {
    $f = new NumberFormatter("fr", NumberFormatter::SPELLOUT);

    $parts = explode('.', number_format($number, 2, '.', ''));

    $integerPart = intval($parts[0]);
    $decimalPart = isset($parts[1]) ? intval($parts[1]) : 0;

    $integerWords = $f->format($integerPart) . ' dinars';

    $decimalWords = $decimalPart > 0 ? $f->format($decimalPart) . ' centimes' : '';

    $result = $integerWords;
    if ($decimalWords) {
      $result .= ' ' . $decimalWords;
    }

    return ucfirst($result);
  }
}

function getModelPermission(Request $request, $model)
{
  return [
    'viewAny' => $request->user()?->can('viewAny', $model),
    'create' => $request->user()?->can('create', $model),
    'update' => $request->user()?->can('update', $model),
    'delete' => $request->user()?->can('delete', $model),
  ];
}
