<?php

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
?>