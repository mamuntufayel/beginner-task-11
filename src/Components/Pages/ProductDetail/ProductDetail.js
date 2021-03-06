import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState({});
  const [restock, setRestock] = useState(0);
  const [update, setUpdate] = useState(20);
  useEffect(() => {
    const url = `https://serene-badlands-74233.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductId(data));
  }, []);

  const handleUpdate = () => {
    if (update > 0) {
      const updating = parseInt(update - 1);
      setUpdate(updating);
    }
  };

  const handleToRestockOnBlur = (event) => {
    const amount = parseInt(event.target.value);
    setRestock(amount);
    event.target.value = "";
  };

  const handleToRestock = () => {
    const total = update + restock;

    setUpdate(total);
  };

  return (
    <div>
      <div className="my-4 row">
        <Card className="col-12 col-lg-12 mx-auto border border-success border border-2">
          <Card.Img variant="top" src={productId.img} />
          <Card.Body className="text-center">
            <Card.Title>{productId.name}</Card.Title>
            <Card.Text>Price:{productId.price}</Card.Text>
            <Card.Text>Description:{productId.description}</Card.Text>
            <Card.Text>Supplier: {productId.supplier}</Card.Text>
            <Card.Text>Quantity(pcs): {update}</Card.Text>
            <Button className="mb-3" onClick={handleUpdate} variant="info">
              Delivered
            </Button>
            <br />
            <input
              onBlur={handleToRestockOnBlur}
              type="number"
              name="restockNumbers"
              id=""
            />

            <Button className="ms-3" onClick={handleToRestock} variant="info">
              Restock
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
