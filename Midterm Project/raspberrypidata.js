getData(5000);
let interval = setInterval(getData, 5000);

async function getData() {
    let response = await fetch("http://10.26.25.211:2001/", { method: "GET" });
    let data = await response.json();
    parseData(data);
}

function parseData(data) {
    let tempFParagraph = document.getElementById("TempF");
    tempFParagraph.innerHTML = data[0].TempF;

    let tempCParagraph = document.getElementById("TempC");
    tempCParagraph.innerHTML = data[0].TempC;

    let humidityParagraph = document.getElementById("Humidity");
    humidityParagraph.innerHTML = data[0].Humidity;

    let datetimeParagraph = document.getElementById("DateTime");
    datetimeParagraph.innerHTML = data[0].Date;
    datetimeParagraph.innerHTML += " at " + data[0].Time;
}