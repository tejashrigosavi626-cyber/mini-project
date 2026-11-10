<?php

header("Content-Type: application/json");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

function num($data, $key)
{
    return floatval($data[$key] ?? 0);
}

$quantity = num($data, "quantity");
$selling_price = num($data, "selling_price");

$seed_cost = num($data, "seed_cost");
$fertilizer_cost = num($data, "fertilizer_cost");
$pesticide_cost = num($data, "pesticide_cost");
$labor_cost = num($data, "labor_cost");
$irrigation_cost = num($data, "irrigation_cost");
$transport_cost = num($data, "transport_cost");
$other_cost = num($data, "other_cost");


$revenue =
    $quantity * $selling_price;


$total_cost =
    $seed_cost +
    $fertilizer_cost +
    $pesticide_cost +
    $labor_cost +
    $irrigation_cost +
    $transport_cost +
    $other_cost;


$profit =
    $revenue - $total_cost;


$margin = 0;

if ($revenue > 0) {

    $margin =
        ($profit / $revenue) * 100;

}


echo json_encode([

    "revenue" => round($revenue, 2),

    "total_cost" => round($total_cost, 2),

    "profit" => round($profit, 2),

    "margin" => round($margin, 2)

]);

?>