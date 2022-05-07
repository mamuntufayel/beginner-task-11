import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Useproducts from "../../../Hook/Useproducts";

const AllItems = () => {
  const [products, setProducts] = Useproducts([]);
  const navigate = useNavigate();

  const handleToDelete = (id) => {
    const deleteConfirmation = window.confirm(
      "Are you sure want to delete it?"
    );
    if (deleteConfirmation) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            const restProducts = products.map((product) => product._id !== id);
            setProducts(restProducts);
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-success text-center my-5">Inventory</h2>
      <div className="row g-4 mx-auto">
        {products.map((product) => (
          <div key={product._id} className="col-lg-4 col-12">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price:{product.price}</Card.Text>
                  <Card.Text>Description:{product.description}</Card.Text>
                  <Card.Text>Supplier: {product.supplier}</Card.Text>
                  <Card.Text>Quantity: {product.quantity}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      onClick={() => navigate(`/inventory/${product._id}`)}
                      variant="info"
                    >
                      Manage
                    </Button>
                    <Button
                      onClick={() => handleToDelete(product._id)}
                      variant="warning"
                    >
                      Delete
                    </Button>
                  </div>
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
