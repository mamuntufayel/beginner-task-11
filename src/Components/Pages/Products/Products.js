import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Useproducts from "../../../Hook/Useproducts";

const Products = () => {
  const [products] = Useproducts([]);
  return (
    <div>
      <h3>products:{products.length}</h3>
      {products.map((product) => (
        <div key={product.id} className="row">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
