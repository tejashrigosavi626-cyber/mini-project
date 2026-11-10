async function checkSoil() {

    const nitrogen = document.getElementById("nitrogen").value;
    const phosphorus = document.getElementById("phosphorus").value;
    const potassium = document.getElementById("potassium").value;
    const ph = document.getElementById("ph").value;

    try {

        const response = await fetch("/AgroSmart/soil.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nitrogen: nitrogen,
                phosphorus: phosphorus,
                potassium: potassium,
                ph: ph
            })
        });

        const text = await response.text();

        console.log("STATUS:", response.status);
        console.log("URL:", response.url);
        console.log("RESPONSE:", text);

        const data = JSON.parse(text);

        document.getElementById("soilResult").innerText =
            data.message;

    } catch (error) {

        console.error("ERROR:", error);

        document.getElementById("soilResult").innerText =
            "Error: " + error.message;
    }
}