import './App.css';
import React, { useState, useEffect } from 'react';
import data from "./data.json";

export function App() {
  const [Page, changePage] = useState("Browse");
  const [products, setProducts] = useState(data.animalmals);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    email: '',
    card: '',
    address: '',
    city: '',
    state: '',
    zip: 0
  });

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
    setCart(hardCopy);
  };


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

  let displayCartContents = () => {
    return (
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
    );
  }

  let showErrorMessage = () => {
    document.getElementById("submitErrorMessage").classList.remove("invisible");
    document.getElementById("submitErrorMessage").classList.add("visible");
  }


  let validate = () => {
    let val = true;
    let payInfo = {
      name: '',
      email: '',
      card: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    };

    let name = document.getElementById('inputName');
    let email = document.getElementById('inputEmail');
    let card = document.getElementById('inputCard');
    let address1 = document.getElementById('inputAddress');
    let address2 = document.getElementById('inputAddress2');
    let city = document.getElementById('inputCity');
    let state = document.getElementById('inputState');
    let zip = document.getElementById('inputZip');

    if (!email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      email.setAttribute("class", "form-control is-invalid");
      val = false;
    }
    else {
      email.setAttribute("class", "form-control is-valid");
      payInfo.email = email.value
    }

    if (name.value.length == 0) {
      name.setAttribute("class", "form-control is-invalid")
      val = false
    }
    else {
      name.setAttribute("class", "form-control is-valid");
      payInfo.name = name.value
    }

    if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
      card.setAttribute("class", "form-control is-invalid")
      val = false
    }
    else {
      card.setAttribute("class", "form-control is-valid");
      payInfo.card = card.value
    }

    if (!(zip.value.length === 5) || !isNumeric(zip.value)) {
      zip.setAttribute("class", "form-control is-invalid")
      val = false
    }
    else {
      zip.setAttribute("class", "form-control is-valid");
      payInfo.zip = zip.value
    }

    payInfo.address = address1.value + address2.value;
    payInfo.city = city.value;
    payInfo.state = state.value;

    console.log(payInfo);
    setPaymentInfo(payInfo);
    return val;
  }

  const displayBrowsePage = () => {
    return (
      <div className="text-center">
        <div>
          <button type='button' className='btn btn-danger m-4' onClick={e => changePage("Cart")}>Checkout</button>
        </div>
        <div>
          <input id="searchbar" onKeyUp={(e) => search_memes()} type="text"
            name="search" placeholder="Search memes.."></input>
          <center>
            <h1 className='m-5'>Buy a Meme</h1>
            {products.map((product, index) => (
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

                <div className="total-price">{product.price} doge coin/each</div>
              </div>
            ))}
          </center>
        </div>
      </div>
    );
  };

  const search_memes = () => {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('item');
    console.log(input);
    let filtered = data.animalmals.filter(product => product.animalmalId.toLowerCase().includes(input));
    setProducts(filtered);
    console.log(filtered);
  }

  const displayCartPage = () => {
    console.log(cart);
    return (
      <div>
        <div>
          <button type='button' className='btn btn-danger' onClick={e => changePage("Browse")}>Return</button>
        </div>
        <div>
          <h1>Cart:</h1>
          {displayCartContents()}
          <h1>Payment Information:</h1>
          <div>

            <div className="row">
              <div className="col-2"></div>

              <div className="col-8">
                <form className="row g-3 checkoutform" id="checkout-form">

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

                  <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Must be like, "abc@xyz.efg"
                    </div>
                  </div>

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
          <button type='button' className='btn btn-danger m-3' onClick={e => { validate() ? changePage("Confirmation") : showErrorMessage() }}>Order</button>
          <div id='submitErrorMessage' className='invisible text-danger'>Error with data, unable to proceed.</div>
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
          <div>
            <h2>Cart:</h2>
            {displayCartContents()}
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-8">
              <h2>Payment Info:</h2>
              <h5 className='boldText'>Name:</h5>
              <p>{paymentInfo.name}</p>
              <h5 className='boldText'>Email:</h5>
              <p>{paymentInfo.email}</p>
              <h5 className='boldText'>Card:</h5>
              <p>{paymentInfo.card}</p>
              <h5 className='boldText'>Address:</h5>
              <p>{paymentInfo.address}</p>
              <h5 className='boldText'>City:</h5>
              <p>{paymentInfo.city}</p>
              <h5 className='boldText'>State:</h5>
              <p>{paymentInfo.state}</p>
              <h5 className='boldText'>Zip:</h5>
              <p>{paymentInfo.zip}</p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button type='button' className='btn btn-danger m-2' onClick={e => { setCart([]); changePage("Browse"); }}>Cancel</button>
          <button type='button' className='btn btn-danger m-2' onClick={e => { alert("Thank you for your order!"); setCart([]); changePage("Browse"); }}>Confirm</button>
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
}