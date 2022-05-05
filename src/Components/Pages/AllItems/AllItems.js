import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Useproducts from "../../../Hook/Useproducts";

const AllItems = () => {
  const [products] = Useproducts([]);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="text-success text-center my-5">Inventory</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price:{product.price}</Card.Text>
                  <Card.Text>Description:{product.description}</Card.Text>
                  <Card.Text>Supplier: {product.supplier}</Card.Text>
                  <Card.Text>Quantity: {product.quantity}</Card.Text>
                  <Button
                    onClick={() => navigate("/inventory/:id")}
                    variant="primary"
                  >
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
