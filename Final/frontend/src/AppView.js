import { useState, useEffect } from "react";
export function App2() {
    const [products, setProducts] = useState([]);
    const [unfilteredProducts, setUnfilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
  
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
  
  
    const addToCart = (product) => {
        let productCount = howManyofThis(product.title);
        if (productCount < product.rating.count) {
            setCart([...cart, product]);
        }
    };
  
    const removeFromCart = (product) => {
      let index = cart.indexOf(product);
      if (index !== -1) {
        let hardCopy = [...cart];
        hardCopy.splice(index, 1);
        setCart(hardCopy);
      }
    };
  
  
    function howManyofThis(title) {
      let hmot = cart.filter((cartItem) => cartItem.title === title);
      return hmot.length;
    }

    function Clear() {
        setCart([]);
        const collection = document.getElementsByClassName("like-mybtn");
        for(let i =0; i<collection.length; i++){
            collection[i].classList.remove("is-active");
        }
    }
  
    function Checkout() {
        alert("View Trail Over!");
        Clear();
    }

    const search_memes = () => {
      let input = document.getElementById('searchbar').value
      input = input.toLowerCase();
      let x = document.getElementsByClassName('item');
      console.log(input);
      let filtered = unfilteredProducts.filter(product => product.title.toLowerCase().includes(input));
      setProducts(filtered);
      console.log(filtered);
    }

    function getAllProducts() {
        fetch("http://localhost:4000/")
          .then((response) => response.json())
          .then((data) => {
            console.log("Show Catalog of Products:");
            console.log(data);
            setProducts(data);
            setUnfilteredProducts(data);
          });
    }

    useEffect(() => {
        getAllProducts();
      }, []);
  
    const displayBrowsePage = () => {
      return (
        <div className="text-center">
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
                    <img src={product.image} alt={product.description} width="80" height="80" />
                  </div>
  
                  <div className="description">
                    <center><span>{product.title}</span></center>
                  </div>
  
                  <div className="quantity">
                    <button className="minus-mybtn" type="button" name="button" onClick={() => removeFromCart(product)}>
                      <img src="http://localhost:4000/images/minus.svg" alt="" />
                    </button>
                    <span className="m-2">{howManyofThis(product.title)}</span>
                    <button className="plus-mybtn" type="button" name="button" onClick={() => addToCart(product)}>
                      <img src="http://localhost:4000/images/plus.svg" alt="" />
                    </button>
                  </div>
  
                   <div className="total-price">{product.price} doge coin/each</div>
                </div>
              ))}

            </center>
            <br></br>
          </div>

          <div>
            <button type='button' className='btn btn-danger m-4' onClick={e => Checkout()}>Checkout</button>
          </div>
        </div>
      );
    };

    return (
        <div>
            {displayBrowsePage()}
        </div>
    );
  }