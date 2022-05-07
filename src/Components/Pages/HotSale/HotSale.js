import React from "react";
import { Button, Card } from "react-bootstrap";
import Useproducts from "../../../Hook/Useproducts";

const HotSale = () => {
  const [products] = Useproducts([]);
  return (
    <div className="container mb-5">
      <h2 className="text-success text-center my-5">Hot Sale</h2>
      <div className="row g-4 mx-auto">
        {products.slice(3, 6).map((product) => (
          <div key={product._id} className="col-lg-4">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price:{product.price}</Card.Text>
                  <Card.Text>Description:{product.description}</Card.Text>
                  <Card.Text>Supplier: {product.supplier}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSale;
