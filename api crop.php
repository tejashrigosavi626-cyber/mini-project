<?php

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$soil = strtolower(trim($data["soil"] ?? ""));
$season = strtolower(trim($data["season"] ?? ""));

$crop = "";
$note = "";

if ($soil === "black" && $season === "rainy") {

    $crop = "Cotton 🌱";
    $note = "Black soil and rainy season are suitable for cotton.";

} elseif ($soil === "alluvial" && $season === "rainy") {

    $crop = "Rice 🌾";
    $note = "Alluvial soil and rainy season are suitable for rice.";

} elseif ($soil === "red" && $season === "summer") {

    $crop = "Groundnut 🌰";
    $note = "Red soil and summer conditions are suitable for groundnut.";

} elseif ($soil === "black" && $season === "winter") {

    $crop = "Wheat 🌾";
    $note = "Wheat can be grown in suitable winter conditions.";

} else {

    $crop = "Wheat 🌾";
    $note = "Wheat is suggested as a general recommendation.";

}

echo json_encode([
    "crop" => $crop,
    "note" => $note
]);

?>