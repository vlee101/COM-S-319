import './App.css';
import React, { useState, useEffect } from 'react';
import data from "./data.json";

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

// let Products = [
//   {
//     "id": 1,
//     "title": "Cat Meme",
//     "description": "a cat meme",
//     "price": 12,
//     "imageurl": "./images/Dinoser_cow.jpg",
//     "imagealt": "dino cow"
//   },
//   {
//     "id": 2,
//     "title": "Dog Meme",
//     "description": "a dog meme",
//     "price": 13,
//     "imageurl": "./images/KnifeCat.jpeg",
//     "imagealt": "knife cow"
//   }
// ];

export function App() {
  const [Page, changePage] = useState("Browse");

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  let order = {
    name: '',
    email: '',
    card: '',
    zip: 0
  };

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };


  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (product) => {
    let index = cart.indexOf(product);
    let hardCopy = [...cart];
    hardCopy.splice(index, 1);
    //hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  };

  //const [Products, setProducts] = useState({animalamls: [{}]});

  // const getProducts = async () => {
  //   fetch("data.json")
  //     .then((response) => response.json())
  //     .then((data) => {setProducts(data); console.log(Products);});

  //   // let response = await fetch("data.json");
  //   // let data = await response.json();
  //   // //console.log(`Hello, we are in the set products async method: ${data}`);
  //   // //products = data.animalamls;
  //   // setProducts(data);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);




  // useEffect( async () => {
  //     fetch("data.json", {headers: {'Accept': 'application/json'}})
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data.animalamls));
  //   }, []);


  //if (!Products) {



  // fetch("data.json")
  //   .then((response) => response.json())
  //   .then((data) => setProducts(data.animalamls));

  // let response = await fetch("data.json");
  //   let data = await response.json();
  //   setProducts(data.animalamls);

  // let response = await fetch("data.json");
  // let data = await response.json();
  // let products = data.animalamls;


  // const displayBrowsePage = () => {
  //   return (
  //     <div>
  //       Hello World
  //     </div>
  //   );
  // };




  function howManyofThis(animalmalId) {
    let hmot = cart.filter((cartItem) => cartItem.animalmalId === animalmalId);
    return hmot.length;
  }

  function selectDistinct(cartWithDuplicates) {
    return cartWithDuplicates.filter((cartItem, index) => cartWithDuplicates.indexOf(cartItem) === index);
  }





  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
  let cardNumberFunctionality = (e) => {
    const inputCard = document.getElementById('inputCard');
    if (!inputCard || !inputCard.value) {
      return e.preventDefault() // stops modal from being shown
    } else {
      inputCard.value = inputCard.value.replace(/-/g, '')
      let newVal = ''
      for (var i = 0, nums = 0; i < inputCard.value.length; i++) {
        if (nums != 0 && nums % 4 == 0) {
          newVal += '-'
        }
        newVal += inputCard.value[i]
        if (isNumeric(inputCard.value[i])) {
          nums++
        }
      }
      inputCard.value = newVal
    }
  }
  
  let showErrorMessage = () => {
    document.getElementById("submitErrorMessage").classList.remove("invisible");
    document.getElementById("submitErrorMessage").classList.add("visible");
  }
  
  
  let validate = () => {
    let val = true;
    let email = document.getElementById('inputEmail4');
    let name = document.getElementById('inputName');
    let card = document.getElementById('inputCard');
    let zip = document.getElementById('inputZip');
  
    if (!email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      email.setAttribute("class", "form-control is-invalid");
      val = false;
    }
    else {
      email.setAttribute("class", "form-control is-valid");
      order.email = email.value
    }
  
    if (name.value.length == 0) {
      name.setAttribute("class", "form-control is-invalid")
      val = false
    }
    else {
      name.setAttribute("class", "form-control is-valid");
      order.name = name.value
    }
  
    if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
      card.setAttribute("class", "form-control is-invalid")
      val = false
    }
    else {
      card.setAttribute("class", "form-control is-valid");
      order.card = card.value
    }

    if (!(zip.value.length === 5) || !isNumeric(zip.value)) {
      zip.setAttribute("class", "form-control is-invalid")
      val = false
    }
    else {
      zip.setAttribute("class", "form-control is-valid");
      order.zip = zip.value
    }
    return val;
  }





  // console.log(data);
  // return (
  //   <div>
  //     {data.animalmals.map((product, index) => (
  //       <div key={index}>
  //         {product.animalmalId}
  //       </div>
  //     ))}
  //   </div>
  // );

  const displayBrowsePage = () => {
    // if (!products) {
    //   return (<div>
    //     Loading...
    //   </div>);
    // }
    // console.log(products);
    return (
      <div>
        <div className='text-center'>
          <button type='button' className='btn btn-primary' onClick={e => changePage("Cart")}>Checkout</button>
        </div>
        <div>
          <div className="shopping-cart">
            <div className='title d-flex align-items-center justify-content-center'>Buy a Meme</div>
            {data.animalmals.map((product, index) => (
              <div key={index} className="item d-flex align-items-center justify-content-center">
                <div className="buttons">
                  <span className="like-mybtn" onClick={(e) => { e.target.classList.toggle("is-active") }}></span>
                </div>

                <div className="image">
                  <img src={product.picture_icon.url} alt={product.picture_icon.alt} width="80" height="80" />
                </div>

                <div className="description">
                  <center><span>{product.animalmalId}</span></center>
                </div>

                <div className="quantity">
                  <button className="minus-mybtn" type="button" name="button" onClick={() => removeFromCart(product)}>
                    <img src="images/minus.svg" alt="" />
                  </button>
                  <span className="m-2">{howManyofThis(product.animalmalId)}</span>
                  <button className="plus-mybtn" type="button" name="button" onClick={() => addToCart(product)}>
                    <img src="images/plus.svg" alt="" />
                  </button>
                </div>

                {/* <div className="quantity">
                <button className="minus-mybtn" type="button" name="button" onClick={() => removeFromCart(product)}>
                  <img src="images/minus.svg" alt="" />
                </button>
                <input type="text" name="name" defaultValue="0" />
                <button className="plus-mybtn" type="button" name="button" onClick={() => addToCart(product)}>
                  <img src="images/plus.svg" alt="" />
                </button>
              </div> */}

                <div className="total-price">{product.price} doge coin/each</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };



  const displayCartPage = () => {
    console.log(cart);
    return (
      <div>
        <div>
          <button type='button' className='btn btn-primary' onClick={e => changePage("Browse")}>Return</button>
        </div>
        <div>
          <h1>Cart:</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {(selectDistinct(cart)).map((product, index) => (
                <tr key={index}>
                  <td><img src={product.picture_icon.url} alt={product.picture_icon.alt} width="80" height="80" /></td>
                  <td>{product.animalmalId}</td>
                  <td>${product.price} x {howManyofThis(product.animalmalId)} = {product.price * howManyofThis(product.animalmalId)}</td>
                </tr>
              ))}
              <tr>
                <th></th>
                <th>Total: </th>
                <td>{cartTotal} Doge Coins</td>
              </tr>
            </tbody>
          </table>
          <h1>Payment Information:</h1>
          <div>

            <div className="row">
              <div className="col-2"></div>

              <div className="col-8">
                <form className="row g-3" id="checkout-form">

                  {/* <!-- Full Name --> */}
                  <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Must be like, "John Doe"
                    </div>
                  </div>

                  {/* <!-- Email --> */}
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Must be like, "abc@xyz.efg"
                    </div>
                  </div>

                  {/* <!-- Credit Card --> */}
                  <div className="col-12">
                    <label htmlFor="inputCard" className="form-label">Card</label>
                    <div className="input-group mb-3">

                      <input type="text" id="inputCard" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                        aria-label="Username" aria-describedby="basic-addon1" onInput={e => cardNumberFunctionality(e)} />
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div className="invalid-feedback">
                        Must be like, "7777-7777-7777-7777"
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputState" />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                    <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div className="invalid-feedback">
                        Must be a 5 digit number
                      </div>
                  </div>
                </form>
              </div>
            </div>



          </div>
        </div>
        <div className='text-center'>
          <button type='button' className='btn btn-primary m-3' onClick={e => { validate() ? changePage("Confirmation") : showErrorMessage() }}>Order</button>
          <div id='submitErrorMessage' className='invisible text-danger'>Error with data, unable to procede.</div>
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
          <button type='button' className='btn btn-primary' onClick={e => { setCart([]); changePage("Browse"); }}>Cancel</button>
          <button type='button' className='btn btn-primary' onClick={e => { alert("Thank you for your order!"); setCart([]); changePage("Browse"); }}>Confirm</button>
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


















// $(window).on('load', () => {
//   $(".like-mybtn").on("click", function () {
//     $(this).toggleClass("is-active");
//   });

//   $(".minus-mybtn").on("click", function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest("div").find("input");
//     var value = parseInt($input.val());

//     if (value > 1) {
//       value = value - 1;
//     } else {
//       value = 0;
//     }

//     $input.val(value);
//   });

//   $(".plus-mybtn").on("click", function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest("div").find("input");
//     var value = parseInt($input.val());

//     //var $item = $this.closest("div").find("");
//     //var item = e.target.parentNode.parentNode.getElementById("id").innerHTML;
//     //console.log(item);

//     if (value < 100) {
//       value = value + 1;
//     } else {
//       value = 100;
//     }

//     $input.val(value);
//   });
// }
// );








// function Browse() {

// };

// function Cart() {

// }

// function Confirmation() {

// }



// export function NavBar() { //TODO REMOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   return (
//     <header>
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarsExample03"
//           aria-controls="navbarsExample03"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarsExample03">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="./index.html">Home</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="dropdown03"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >Our Amazing Catalog</a
//               >

//               <div
//                 id="change_nav"
//                 className="dropdown-menu"
//                 aria-labelledby="dropdown03"
//               ></div>
//             </li>
//             <li className="nav-item active">
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