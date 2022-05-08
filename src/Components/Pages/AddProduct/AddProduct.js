import React from "react";

const AddProduct = () => {
  const handleToSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    // console.log(name, price, description, img, quantity, supplier);
    const url = `https://serene-badlands-74233.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        description,
        img,
        quantity,
        supplier,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    event.target.value = "";
  };
  return (
    <div>
      <h2 className="text-light text-center bg-primary w-25 mx-auto my-3 ">
        Add New Product
      </h2>
      <form onSubmit={handleToSubmit}>
        <input
          className="d-block p-2 my-2 w-50 mx-auto"
          type="text"
          name="name"
          id=""
          placeholder="Product Name"
        />
        <input
          className="d-block p-2 my-2 w-50 mx-auto"
          type="text"
          name="price"
          id=""
          placeholder="price"
        />
        <input
          className="d-block p-2 my-2 w-50 mx-auto"
          type="text"
          name="description"
          id=""
          placeholder="Product Description"
        />
        <input
          className="d-block p-2 my-2 w-50 mx-auto"
          type="text"
          name="img"
          id=""
          placeholder="Enter img URL"
        />
        <input
          className="d-block p-2 my-2 w-50 mx-auto"
          type="text"
          name="quantity"
          id=""
          placeholder="Product quantity"
        />
        <input
          className="d-block p-2 my-2 w-50 mx-auto"
          type="text"
          name="supplier"
          id=""
          placeholder="Product supplier"
        />
        <input
          className="w-25 d-block mx-auto bg-success text-white "
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
