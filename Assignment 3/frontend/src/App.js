import { useState, useEffect } from "react";
function App() {
  const [CurrentView, changeCurrentView] = useState("Main");

  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [viewer2, setViewer2] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [viewerForUpdatePrice, setViewerForUpdatePrice] = useState(false);
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
          setViewerForUpdatePrice(true);
        });
    } else {
      console.log("Wrong number of Product id.");
      setOneProduct([]);
      setViewerForUpdatePrice(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function deleteOneProduct(deleteid) {
    console.log("Product to delete: ", deleteid);
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

  function updateOneProduct(updateid, updateprice) {
    console.log("Product to update: ", updateid);
    fetch("http://localhost:4000/update/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: updateid, price: updateprice }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updating a product completed: ", updateid);
        console.log(data);
        if (data) {
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
      <div className="text-center">
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
        <div className="text-center">
        <h1>Welcome to the Animal Meme Product Catalog!</h1>
        <img src="http://127.0.0.1:4000/images/IMG_2380.gif" width={400} className="center" />
        </div>
      </div>
    );
  }
  else if (CurrentView === "Create") {
    return (
      <div>
        {NavBar()}
        <div className="row d-flex justify-content-center">
          <h1 className="text-center">Add a New Product:</h1>
          <form action="" className="row d-flex justify-content-center col-lg-3 ">
            <input
              type="number"
              placeholder="id?"
              name="_id"
              value={addNewProduct._id}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="text"
              placeholder="title?"
              name="title"
              value={addNewProduct.title}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="number"
              placeholder="price?"
              name="price"
              value={addNewProduct.price}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="text"
              placeholder="description?"
              name="description"
              value={addNewProduct.description}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="text"
              placeholder="category?"
              name="category"
              value={addNewProduct.category}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="text"
              placeholder="image?"
              name="image"
              value={addNewProduct.image}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="number"
              placeholder="rate?"
              name="rate"
              value={addNewProduct.rating.rate}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <input
              type="number"
              placeholder="count?"
              name="count"
              value={addNewProduct.rating.count}
              onChange={handleChange}
              className="form-control my-2"
              style={{ width: '18rem' }}
            />
            <button className='btn btn-danger m-2' style={{ width: '18rem' }} type="submit" onClick={handleOnSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  else if (CurrentView === "Read") {
    return (
      <div className="text-center">
        {NavBar()}
        <div>
          <h1>Catalog of Products</h1>
          <div className="row d-flex justify-content-center">
          <h3>Show one Product by Id:</h3>
            <input className="form-control my-2 row d-flex justify-content-center col-lg-3" style={{ width: '18rem' }} type="text" id="message" name="message" placeholder="id" onKeyUp={(e) => getOneProduct(e.target.value)} />
            {<div>{showOneItem}</div>}
          </div>
          <div>
            <button className='btn btn-danger m-2' style={{ width: '18rem' }} onClick={() => getAllProducts()}>Show All products</button>
            {viewer1 && <div>Products: {showAllItems}</div>}
          </div>
        </div>
      </div>
    );
  }
  else if (CurrentView === "Update") {
    return (
      <div>
        {NavBar()}
        <div className="row d-flex justify-content-center">
          <h1 className="text-center">Update Page</h1>
          <input className="form-control my-2 row d-flex justify-content-center col-lg-3" style={{ width: '18rem' }} type="text" id="message" name="message" placeholder="id" onKeyUp={(e) => [getOneProduct(e.target.value)][product[index]._id = e.target.value]} />
          {/* {let updatedPrice = product[index].price} */}
          <div className="text-center">Product Pricing Change: {showOneItem}</div>
          {viewerForUpdatePrice && <input
            type="number"
            placeholder="price?"
            name="price"
            id="updatePrice"
            className="form-control my-2"
            style={{ width: '18rem' }}
          />}

          <button className='btn btn-danger m-2' style={{ width: '18rem' }} onClick={() => updateOneProduct(product[index]._id, document.getElementById("updatePrice").value)}>
            Update
          </button>
        </div>
      </div>
    );
  }
  else if (CurrentView === "Delete") {
    return (
      <div className="text-center">
        {NavBar()}
        <div className="row d-flex justify-content-center">
          <h1>Delete One Product:</h1>

          <input className="form-control my-2 row d-flex justify-content-center col-lg-3" style={{ width: '18rem' }} type="text" id="message" name="message" placeholder="id" onKeyUp={(e) => [getOneProduct(e.target.value)][product[index]._id = e.target.value]} />
          {<div>Product: {showOneItem}</div>}

          <button className='btn btn-danger m-2' style={{ width: '18rem' }} onClick={() => deleteOneProduct(product[index]._id)}>
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
        <center>
          <div className='outline'>
            <h1 className="text-center">Website made by:</h1>
            <h3 className="text-center">Vicky Lee (vlee101) and Olivia Wiench (owiench)</h3>
            <div className="container mt-5">
              <div className="row">
                <div className="col text-center">
                  <h5>Class Information:</h5>
                  <p>Professor Abraham Aldaco<br></br>
                    Com S 319 - Construction of User Interfaces<br></br>
                    Assignment 3<br></br>
                    April 30, 2023
                  </p>
                </div>
              </div>
              <br></br>
              <div className="col text-center">
                  <h5 className="text-center">Project Information:</h5>
                  <p className="text-center">This project uses MERN to implement CRUD operations on a catalog of memes.<br></br>
                  The data is stored in a Mongo database and the use can view all the products, view just one product <br></br>
                  by searching by id,add a new product, update an existing product, and delete an existing product.</p>
                </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
} // App end
export default App;
