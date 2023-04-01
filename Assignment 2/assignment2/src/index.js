import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
fetch("data.json")
  .then((response) => response.json())
  .then((data) => dataToHomePageHTML(data));

function dataToHomePageHTML(data) {
  let mainContainer = document.getElementById("chose_your_fighter");
  let navchange = document.getElementById("change_nav");
  let credits = document.getElementById("crd");
  mainContainer.innerHTML = `
  <main>
  <div id="change2">
  <div class="container bootstrap snipets">
  <center>
  <div id="chose_your_fighter" class="row flow-offset-1"></div>
  </center>
  </div>
  </div>
  </main>`;
  credits.innerHTML = `
  <a class="nav-link" type="button" onclick="credits()">Credits</a>
  `;
  for (let i = 0; i < data.animalmals.length-1; i++) {
    let picUrl1 = data.animalmals[i].picture_icon.url;
    let picAlt1 = data.animalmals[i].picture_icon.alt;
    let animalId1 = data.animalmals[i].animalmalId;
    i++;
    let picUrl2 = data.animalmals[i].picture_icon.url;
    let picAlt2 = data.animalmals[i].picture_icon.alt;
    let animalId2 = data.animalmals[i].animalmalId;
    i++;
    let picUrl3 = data.animalmals[i].picture_icon.url;
    let picAlt3 = data.animalmals[i].picture_icon.alt;
    let animalId3 = data.animalmals[i].animalmalId;
    navchange.innerHTML += `
    <button class="dropdown-item" type="button" value="${animalId1}" onclick="get_data(value)">${animalId1}</button>
    <button class="dropdown-item" type="button" value="${animalId2}" onclick="get_data(value)">${animalId2}</button>
    <button class="dropdown-item" type="button" value="${animalId3}" onclick="get_data(value)">${animalId3}</button>
    `;
    mainContainer.innerHTML += `
    <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${picUrl1}" alt="${picAlt1}" class="w-75" value="${animalId1}" onclick="get_data(value)">
          <div class="caption">
        <h6><input type="button" class="btn btn-link" value ="${animalId1}" onclick="get_data(value)"></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${picUrl2}" alt="${picAlt2}" class="w-75" value="${animalId2}" onclick="get_data(value)">
          <div class="caption">
        <h6><input type="button" class="btn btn-link" value ="${animalId2}" onclick="get_data(value)"></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${picUrl3}" alt="${picAlt3}" class="w-75" value="${animalId3}" onclick="get_data(value)">
          <div class="caption">
        <h6><input type="button" class="btn btn-link" value ="${animalId3}" onclick="get_data(value)"></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>`;
  }
  let professorId = data.animalmals[data.animalmals.length-1].animalmalId;
  let professorPicUrl = data.animalmals[data.animalmals.length-1].picture_icon.url;
  let professorPicAlt = data.animalmals[data.animalmals.length-1].picture_icon.alt;
  navchange.innerHTML += `
    <button class="dropdown-item" type="button" value="${professorId}" onclick="get_data(value)" class="button"/>${professorId}</a>
  `;
  mainContainer.innerHTML += `
  <center>
    <div class="col-xs-6 col-md-4">
      <div class="product tumbnail thumbnail-3">
      <input type="image" src="${professorPicUrl}" alt="${professorPicAlt}" class="w-75" value="${professorId}" onclick="get_data(value)">
        <div class="caption">
      <h6><input type="button" class="btn btn-link" value ="${professorId}" onclick="get_data(value)"></h6>
      <span class="animal_type"></span>
        </div>
      </div>
    </div>
  </center>`;

}

function credits() {
  let mainContainer1 = document.getElementById("change1");
  mainContainer1.innerHTML = `
  <h1 class="text-center text-muted mt-2">Credits</h1> `;
  let main_change = document.getElementById("main");
  main_change.innerHTML = `
  <main>
  <div class="container text-center my-3">
  <h3>Website made by:</h3>
  <h3>Vicky Lee (vlee101) and Olivia Wiench (owiench)</h3>
  <p>Com S 319 - Construction of User Interfaces, Spring 2023</p>
  <p>March 12, 2023</p>
  </div>
  <div id="change2">
  <div class="container bootstrap snipets">
  <center>
  <div id="chose_your_fighter" class="row flow-offset-1"></div>
  </center>
  </div>
  </div>
  </main>
  `;
}

function get_data(value) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => renderMemePage(data, value));
}

function renderMemePage(data, value) {
  let main_change = document.getElementById("main");
  main_change.innerHTML = `
  <main>
  <div id="change2">
  <div class="container bootstrap snipets">
  <center>
  <div id="chose_your_fighter" class="row flow-offset-1"></div>
  </center>
  </div>
  </div>
  </main>
  `;

  if (value == data.animalmals[9].animalmalId) {
    let profId = data.animalmals[9].animalmalId;
    let mainContainer1 = document.getElementById("change1");
    mainContainer1.innerHTML = `
    <h1 class="text-center text-muted mt-2">${profId}</h1> `;
    let profPicUrl = data.animalmals[9].picture.url;
    let profPicAlt = data.animalmals[9].picture.alt;
    let profWarning = data.animalmals[9].meme_danger;
    let profInfo = data.animalmals[9].meme_info.text;
    let mainContainer2 = document.getElementById("change2");
      mainContainer2.innerHTML = `
      <main>
      <script src="./raspberrypidata.js"></script>
      <div class="container">
        <img src="${profPicUrl}" alt="${profPicAlt}" class="mx-auto d-block my-3">
        <center><p class="text-danger text-center">${profWarning}</p>
        <p>These are the conditions in the amazing professor's office:</p>
        <div id="tempdata">
            <div class="row">
                <div class="col mb-3">
                    <div class="card" style="width: 18rem">
                        <div class="card-body">
                            <h3 class="card-title">Temperature in F:</h3>
                            <p id="TempF" class="card-text"></p>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="card" style="width: 18rem">
                        <div class="card-body">
                            <h3 class="card-title">Temperature in C:</h3>
                            <p id="TempC" class="card-text"></p>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="card" style="width: 18rem">
                        <div class="card-body">
                            <h3 class="card-title">Humidity:</h3>
                            <p id="Humidity" class="card-text"></p>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="card" style="width: 18rem">
                        <div class="card-body">
                            <h3 class="card-title">Last updated:</h3>
                            <p id="DateTime" class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p>${profInfo}</p>
      </div></center>
    </main>`;
    populateRaspberryPiData();
  }
  else{
  for (let i = 0; i < data.animalmals.length-1; i++) {
    if (data.animalmals[i].animalmalId == value) {
      let animalId = data.animalmals[i].animalmalId;
      let picUrl = data.animalmals[i].picture.url;
      let picAlt = data.animalmals[i].picture.alt;
      let animalWarning = data.animalmals[i].meme_danger;
      let memeInfo = data.animalmals[i].meme_info.text;
      let memeSourceUrl = data.animalmals[i].meme_info.source.url;
      let memeSourceTitle = data.animalmals[i].meme_info.source.title;
      let video = data.animalmals[i].video;
      let mainContainer1 = document.getElementById("change1");
      mainContainer1.innerHTML = `
        <h1 class="text-center text-muted mt-2">${animalId}</h1> `;
      let mainContainer2 = document.getElementById("change2");
      mainContainer2.innerHTML = `
        <main>
          <div class="container">
            <img src="${picUrl}" alt="${picAlt}" class="mx-auto d-block my-3 w-25">
            <center><p class="text-danger text-center">${animalWarning}</p>
            <p>${memeInfo}</p>
            <p>Source: <a href="${memeSourceUrl}">${memeSourceTitle}</a></p>
          </div></center>
          <center>${video}</center>
        </main>`;
    }
  }
}
}




function populateRaspberryPiData() {
  getData();
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
}