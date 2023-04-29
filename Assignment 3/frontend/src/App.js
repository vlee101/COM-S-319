import { useState, useEffect } from "react";
function App() {
  const [CurrentView, changeCurrentView] = useState("Main");

  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [viewer2, setViewer2] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [index, setIndex] = useState(0);

  function getAllProducts() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products:");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }

  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
    } else {
      console.log("Wrong number of Product id.");
      setOneProduct([]);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:4000/delete/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed: ", deleteid);
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }

  const showAllItems = product.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={100} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rate: {el.rating.rate} and Count: {el.rating.count} <br />
    </div>
  ));

  const showOneItem = oneProduct.map((el) => (
    <div key={el._id}>
      <img src={el.image} width={100} /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rate: {el.rating.rate} and Count: {el.rating.count} <br />
    </div>
  ));

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: value });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: value });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({ ...addNewProduct, rating: { rate: value } });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: value },
      });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post a new product completed!");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }

  // new Product
  const [addNewProduct, setAddNewProduct] = useState({
    _id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:4000/images/",
    rating: { rate: 0.0, count: 0 },
  });

  const NavBar = () => {
    return (
      <div>
        <button type='button' className='btn btn-danger m-4' onClick={e => changeCurrentView("Main")}>Home</button>
        <button type='button' className='btn btn-danger m-4' onClick={e => changeCurrentView("Read")}>View</button>
        <button type='button' className='btn btn-danger m-4' onClick={e => changeCurrentView("Create")}>Create</button>
        <button type='button' className='btn btn-danger m-4' onClick={e => changeCurrentView("Update")}>Update</button>
        <button type='button' className='btn btn-danger m-4' onClick={e => changeCurrentView("Delete")}>Delete</button>
        <button type='button' className='btn btn-danger m-4' onClick={e => changeCurrentView("Credits")}>Credits</button>
      </div>
    );
  };


  if (CurrentView === "Main") {
    return (
      <div>
        {NavBar()}
        <h1>Welcome to the Animal Meme Product Catalog!</h1>
      </div>
    );
  }
  else if (CurrentView === "Create") {
    return (
      <div>
        {NavBar()}
        <div>
        <h3>Add a new product :</h3>
        <form action="">
          <input
            type="number"
            placeholder="id?"
            name="_id"
            value={addNewProduct._id}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="title?"
            name="title"
            value={addNewProduct.title}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="price?"
            name="price"
            value={addNewProduct.price}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description?"
            name="description"
            value={addNewProduct.description}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="category?"
            name="category"
            value={addNewProduct.category}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="image?"
            name="image"
            value={addNewProduct.image}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="rate?"
            name="rate"
            value={addNewProduct.rating.rate}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="count?"
            name="count"
            value={addNewProduct.rating.count}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
        </form>
      </div>
      </div>
    );
  }
  else if (CurrentView === "Read") {
    return (
      <div>
        {NavBar()}
        <h1>Catalog of Products</h1>
        <div>
          <h3>Show all available Products.</h3>
          <button onClick={() => getAllProducts()}>Show All products</button>
          <input type="text" id="message" name="message" placeholder="id" onKeyUp={(e) => getOneProduct(e.target.value)} />

          {viewer1 && <div>Products {showAllItems}</div>}
        </div>
        <div>
          <h3>Show one Product by Id:</h3>
          {<div>Product: {showOneItem}</div>}
        </div>
      </div>
    );
  }
  else if (CurrentView === "Update") {
    return (
      <div>
        {NavBar()}
        <h1>Update Page</h1>
        <input type="text" id="message" name="message" placeholder="id" onKeyUp={(e) => getOneProduct(e.target.value)} />
        {<div>Product: {showOneItem}</div>}
      </div>
    );
  }
  else if (CurrentView === "Delete") {
    return (
      <div>
        {NavBar()}
        <div>
        <h3>Delete one product:</h3>

        <input type="text" id="message" name="message" placeholder="id" onKeyUp={(e) => getOneProduct(e.target.value)} />
        {<div>Product: {showOneItem}</div>}

        <button onClick={() => deleteOneProduct(product[index]._id)}>
          Delete
        </button>
      </div>
      </div>
    );
  }
  else if (CurrentView === "Credits") {
    return (
      <div>
        {NavBar()}
        <h1>Credits Page</h1>
      </div>
    );
  }
} // App end
export default App;
