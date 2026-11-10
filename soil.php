<?php

header("Content-Type: application/json; charset=UTF-8");

try {

    $input = file_get_contents("php://input");

    if ($input === false || $input === "") {
        echo json_encode([
            "status" => "error",
            "message" => "No data received"
        ]);
        exit;
    }

    $data = json_decode($input, true);

    if ($data === null) {
        echo json_encode([
            "status" => "error",
            "message" => "Invalid JSON data"
        ]);
        exit;
    }

    $nitrogen = floatval($data["nitrogen"] ?? 0);
    $phosphorus = floatval($data["phosphorus"] ?? 0);
    $potassium = floatval($data["potassium"] ?? 0);
    $ph = floatval($data["ph"] ?? 0);

    $messages = [];

    // Nitrogen
    if ($nitrogen < 40) {

        $messages[] = "Nitrogen is Low";

    } elseif ($nitrogen <= 80) {

        $messages[] = "Nitrogen is Normal";

    } else {

        $messages[] = "Nitrogen is High";
    }

    // Phosphorus
    if ($phosphorus < 20) {

        $messages[] = "Phosphorus is Low";

    } elseif ($phosphorus <= 50) {

        $messages[] = "Phosphorus is Normal";

    } else {

        $messages[] = "Phosphorus is High";
    }

    // Potassium
    if ($potassium < 40) {

        $messages[] = "Potassium is Low";

    } elseif ($potassium <= 80) {

        $messages[] = "Potassium is Normal";

    } else {

        $messages[] = "Potassium is High";
    }

    // pH
    if ($ph < 5.5) {

        $messages[] = "Soil is Acidic";

    } elseif ($ph <= 7.5) {

        $messages[] = "Soil pH is Suitable";

    } else {

        $messages[] = "Soil is Alkaline";
    }

    echo json_encode([
        "status" => "success",
        "message" => implode(" | ", $messages)
    ]);

} catch (Exception $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);

}

exit;
?>