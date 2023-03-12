fetch("data.json")
  .then((response) => response.json())
  .then((data) => dataToHTML(data));

function dataToHTML(data) {
  let mainContainer = document.getElementById("chose_your_fighter");
  let navchange = document.getElementById("change_nav");
  let credits = document.getElementById("crd");
  mainContainer.innerHTML = `
  <script src="change.js"></script>
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
  <a button class="nav-link" type="button" class="button" onclick="credits()"/>Credits</a>
  `;
  for (let i = 0; i < data.animalmals.length-1; i++) {
    let pain1 = data.animalmals[i].picture_icon.url;
    let pain2 = data.animalmals[i].picture_icon.alt;
    let pain3 = data.animalmals[i].animalmalId;
    i++;
    let pain4 = data.animalmals[i].picture_icon.url;
    let pain5 = data.animalmals[i].picture_icon.alt;
    let pain6 = data.animalmals[i].animalmalId;
    i++;
    let pain7 = data.animalmals[i].picture_icon.url;
    let pain8 = data.animalmals[i].picture_icon.alt;
    let pain9 = data.animalmals[i].animalmalId;
    navchange.innerHTML += `
    <button class="dropdown-item" type="button" value="${pain3}" onclick="get_data(value)" class="button"/>${pain3}</a>
    <button class="dropdown-item" type="button" value="${pain6}" onclick="get_data(value)" class="button"/>${pain6}</a>
    <button class="dropdown-item" type="button" value="${pain9}" onclick="get_data(value)" class="button"/>${pain9}</a>
    `;
    mainContainer.innerHTML += `
    <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${pain1}" alt="${pain2}" class="w-75" name="button" value="${pain3}" onclick="get_data(value)" class="button"/></a>
          <div class="caption">
        <h6><input type="button" name="button" class="btn btn-link" value ="${pain3}" onclick="get_data(value)"/></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${pain4}" alt="${pain5}" class="w-75" name="button" value="${pain6}" onclick="get_data(value)" class="button"/></a>
          <div class="caption">
        <h6><input type="button" name="button" class="btn btn-link" value ="${pain6}" onclick="get_data(value)"/></a></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${pain7}" alt="${pain8}" class="w-75" name="button" value="${pain9}" onclick="get_data(value)" class="button"/></a>
          <div class="caption">
        <h6><input type="button" name="button" class="btn btn-link" value ="${pain9}" onclick="get_data(value)"/></a></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>`;
  }
  let pain10 = data.animalmals[data.animalmals.length-1].animalmalId;
  let pain11 = data.animalmals[data.animalmals.length-1].picture_icon.url;
  let pain12 = data.animalmals[data.animalmals.length-1].picture_icon.alt;
  navchange.innerHTML += `
    <button class="dropdown-item" type="button" value="${pain10}" onclick="get_data(value)" class="button"/>${pain10}</a>
  `;
  mainContainer.innerHTML += `
  <center>
    <div class="col-xs-6 col-md-4">
      <div class="product tumbnail thumbnail-3">
      <input type="image" src="${pain11}" alt="${pain12}" class="w-75" name="button" value="${pain10}" onclick="get_data(value)" class="button"/></a>
        <div class="caption">
      <h6><input type="button" name="button" class="btn btn-link" value ="${pain10}" onclick="get_data(value)"/></a></h6>
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
  <h3>Vicky and Olivia</h3>
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
    .then((data) => renderpage(data, value));
}

function renderpage(data, value) {
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
    let pain0 = data.animalmals[9].animalmalId;
    let mainContainer1 = document.getElementById("change1");
    mainContainer1.innerHTML = `
    <h1 class="text-center text-muted mt-2">${pain0}</h1> `;
    let pain1 = data.animalmals[9].picture.url;
    let pain2 = data.animalmals[9].picture.alt;
    let pain3 = data.animalmals[9].meme_danger;
    let pain4 = data.animalmals[9].meme_info.text;
    let mainContainer2 = document.getElementById("change2");
      mainContainer2.innerHTML = `
      <main>
      <script src="./raspberrypidata.js"></script>
      <div class="container">
        <img src="${pain1}" alt="${pain2}" class="mx-auto d-block my-3">
        <center><p class="text-danger text-center">${pain3}</p>
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
        <p>${pain4}</p>
      </div></center>
    </main>`;
  }
  else{
  for (let i = 0; i < data.animalmals.length-1; i++) {
    if (data.animalmals[i].animalmalId == value) {
      let pain0 = data.animalmals[i].animalmalId;
      let pain1 = data.animalmals[i].picture.url;
      let pain2 = data.animalmals[i].picture.alt;
      let pain3 = data.animalmals[i].meme_danger;
      let pain4 = data.animalmals[i].meme_info.text;
      let pain5 = data.animalmals[i].meme_info.source.url;
      let pain6 = data.animalmals[i].meme_info.source.alt;
      let pain7 = data.animalmals[i].video;
      let mainContainer1 = document.getElementById("change1");
      mainContainer1.innerHTML = `
        <h1 class="text-center text-muted mt-2">${pain0}</h1> `;
      let mainContainer2 = document.getElementById("change2");
      mainContainer2.innerHTML = `
        <main>
          <div class="container">
            <img src="${pain1}" alt="${pain2}" class="mx-auto d-block my-3 w-25">
            <center><p class="text-danger text-center">${pain3}</p>
            <p>${pain4}</p>
            <p>Source: <a href="${pain5}">${pain6}</a></p>
          </div></center>
          <center>${pain7}</center>
        </main>`;
    }
  }
}
}
