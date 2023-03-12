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
  for (let i = 0; i < data.animalmals.length; i++) {
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
        <h6><a href="catto.html">${pain3}</a></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${pain4}" alt="${pain5}" class="w-75" name="button" value="${pain6}" onclick="get_data(value)" class="button"/></a>
          <div class="caption">
        <h6><a href="catto.html">${pain6}</a></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div class="product tumbnail thumbnail-3">
        <input type="image" src="${pain7}" alt="${pain8}" class="w-75" name="button" value="${pain9}" onclick="get_data(value)" class="button"/></a>
          <div class="caption">
        <h6><a href="catto.html">${pain9}</a></h6>
        <span class="animal_type"></span>
          </div>
        </div>
      </div>`;
  }
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
  for (let i = 0; i < data.animalmals.length; i++) {
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
