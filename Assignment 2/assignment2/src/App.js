import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import $ from 'jquery';

// function getProducts() {
//   return ([
//     {
//       "id": 1,
//       "title": "Cat Meme",
//       "description": "a cat meme",
//       "price": 12,
//       "imageurl": "./images/Dinoser_cow.jpg",
//       "imagealt": "dino cow"
//     },
//     {
//       "id": 2,
//       "title": "Dog Meme",
//       "description": "a dog meme",
//       "price": 13,
//       "imageurl": "./images/KnifeCat.jpeg",
//       "imagealt": "knife cow"
//     }
//   ]);
// }

let Products = [
  {
    "id": 1,
    "title": "Cat Meme",
    "description": "a cat meme",
    "price": 12,
    "imageurl": "./images/Dinoser_cow.jpg",
    "imagealt": "dino cow"
  },
  {
    "id": 2,
    "title": "Dog Meme",
    "description": "a dog meme",
    "price": 13,
    "imageurl": "./images/KnifeCat.jpeg",
    "imagealt": "knife cow"
  }
];

export function App() {
  let currentPage = "Browse";
  const [Page, changePage] = useState(currentPage);

  //let Products = getProducts();

  const displayBrowsePage = () => {
    return (
      <div>
        <div className='text-center'>
          <button type='button' className='btn btn-primary' onClick={e => changePage("Cart")}>Checkout</button>
        </div>
        <div>
          <div className="shopping-cart">
            <div className="title">Buy a Meme</div>

            {/* <!-- Product #1 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2286.jpeg" alt="Doge Bread" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>Doge Bread</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 doge coin/each</div>
            </div>

            {/* <!-- Product #2 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2287.jpeg" alt="Lizard Bros" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>Hug</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 rizz point/each</div>
            </div>

            {/* <!-- Product #3 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2288.jpeg" alt="Frogge" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>Sad boi</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 pity coin/each</div>
            </div>

            {/* <!-- Product #4 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2289.jpeg" alt="Feesh" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>Toxic Feesh</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 death coin/each</div>
            </div>

            {/* <!-- Product #5 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2290.jpeg" alt="Birb" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>Be smited</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 birb coin/each</div>
            </div>

            {/* <!-- Product #6 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2291.jpeg" alt="Death" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>hahahahahahaha run</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 million dollars/each</div>
            </div>

            {/* <!-- Product #7 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2292.jpeg" alt="snek" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>precious baby</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 snek coin/each</div>
            </div>

            {/* <!-- Product #8 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2293.jpeg" alt="Dinyocow" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>Historical Dinosaur</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 sanity point/each</div>
            </div>

            {/* <!-- Product #9 --> */}
            <div className="item">
              <div className="buttons">
                <span className="like-btn"></span>
              </div>

              <div className="image">
                <img src="images/IMG_2294.jpg" alt="Catto" width="80" height="80" />
              </div>

              <div className="description">
                <center><span>🔪</span></center>
              </div>

              <div className="quantity">
                <button className="minus-btn" type="button" name="button">
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="plus-btn" type="button" name="button">
                  <img src="images/plus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">1 liver/each</div>
            </div>
            {/* {Products.map((product, index) => (
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))} */}
          </div>
        </div>
      </div>
    );
  }

  const displayCartPage = () => {
    return (
      <div>
        <div>
          <button type='button' className='btn btn-primary' onClick={e => changePage("Browse")}>Return</button>
        </div>
        <div>
          <h1>
            Cart
          </h1>
        </div>
        <div>
          <button type='button' className='btn btn-primary' onClick={e => changePage("Confirmation")}>Order</button>
        </div>
      </div>
    );
  }

  const displayConfirmationPage = () => {
    return (
      <div>
        <div>
          <h1>
            Confirmation
          </h1>
        </div>
        <div>
          <button type='button' className='btn btn-primary' onClick={e => changePage("Browse")}>Cancel</button>
          <button type='button' className='btn btn-primary' onClick={e => { alert("Thank you for your order!"); changePage("Browse"); }}>Confirm</button>
        </div>
      </div>
    );
  }

  if (Page === "Browse") {
    return (
      <div>
        {displayBrowsePage()}
      </div>
    );
  }
  if (Page === "Cart") {
    return (
      <div>
        {displayCartPage()}
      </div>
    );
  }
  if (Page === "Confirmation") {
    return (
      <div>
        {displayConfirmationPage()}
      </div>
    );
  }



  //const [ProductsCategory, setProductsCategory] = useState(Products);
  //displayBrowsePage(Products);
}

$(window).on('load', () => {
  $(".like-btn").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $(".minus-btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest("div").find("input");
    var value = parseInt($input.val());

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }

    $input.val(value);
  });

  $(".plus-btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest("div").find("input");
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
  });
}
);

// function Browse() {

// };

// function Cart() {

// }

// function Confirmation() {

// }



// export function NavBar() { //TODO REMOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   return (
//     <header>
//       <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarsExample03"
//           aria-controls="navbarsExample03"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarsExample03">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <a class="nav-link" href="./index.html">Home</a>
//             </li>
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle"
//                 href="#"
//                 id="dropdown03"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >Our Amazing Catalog</a
//               >

//               <div
//                 id="change_nav"
//                 class="dropdown-menu"
//                 aria-labelledby="dropdown03"
//               ></div>
//             </li>
//             <li class="nav-item active">
//               <div id="crd">
//               </div>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

{/* export function Browse() {
  return (
    <div>
      <h1>Bros</h1>
    </div>
  );
};

export function Cart() {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export function Confirmation() {
  return (
    <div>
      <h1>Confirmation</h1>
    </div>
  );
}; */}

{/* <div className="App"> TODO REMOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}