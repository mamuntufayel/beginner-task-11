import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleToSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">
            HI-FI Electronics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="allItems">
                All Products
              </Nav.Link>
              <Nav.Link href="home#exclusive">Exclusive</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              {user && (
                <>
                  <NavDropdown
                    title="Customize Product"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="addProduct">
                      Add New Product
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

              {/* <Nav.Link as={Link} to="addProduct">
                Add Product
              </Nav.Link> */}
              {user ? (
                <div className="d-flex align-items-center">
                  <h5>
                    {" "}
                    <Nav.Link onClick={handleToSignOut}>Sign Out</Nav.Link>
                  </h5>
                  <h5 className="text-light">{user.email.slice(0, 6)}</h5>
                </div>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
