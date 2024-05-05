// Nav.js
import React, { useState } from 'react';
import { Navbar, Nav as ReactNav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from './stuff/logo.jpg'; // Import your logo here
import back from './stuff/back.jpg';
import back2 from './stuff/back2.jpg';
import back3 from './stuff/back3.jpg';

const cardData = [
  { title: "Veg Burger" },
  { title: "Chicken Burger" },
  // Add more items as needed
];

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Filter the card data based on the search query
    const results = cardData.filter(card => card.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ zIndex: 1000 }}>
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          <img src={logo} height={"70px"} alt="Logo" /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ReactNav className="mx-auto">
            <ReactNav.Link as={Link} to="/">Home</ReactNav.Link>
            <ReactNav.Link as={Link} to="/menu">Menu</ReactNav.Link>
            <ReactNav.Link as={Link} to="/about">About Us</ReactNav.Link>
            <ReactNav.Link as={Link} to="/cafe">Cafe</ReactNav.Link>
          </ReactNav>
          <Form className="d-none d-lg-flex me-2">
            <FormControl type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
          </Form>
          <ReactNav className="me-5">
            <DropdownButton menuAlign="right" title={<FaUser />} id="user-dropdown">
              <Dropdown.Item>Sign Up</Dropdown.Item>
              <Dropdown.Item>Log In</Dropdown.Item>
              <Dropdown.Item>Order History</Dropdown.Item>
            </DropdownButton>
            <Button variant="link" onClick={toggleCart}><FaHeart /></Button>
            <Button variant="link" onClick={toggleCart}><FaShoppingCart /></Button>
          </ReactNav>
        </Navbar.Collapse>
        <Form className="d-lg-none me-auto">
          <FormControl type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
        </Form>
      </Navbar>
      {searchQuery && (
        <div className="white-box">
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div key={index} className="search-result">
                {result.title}
              </div>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      )}
      {cartOpen && (
        <div className="white-box-cart">
          Cart content goes here
        </div>
      )}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={back} className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={back2} className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={back3} className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Nav;
