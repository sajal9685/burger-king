// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Connect With Us:</h5>
            <div className="social-icons">
              <FaFacebook className="mr-2" />
              <FaTwitter className="mr-2" />
              <FaInstagram />
            </div>
            <p>Follow us for the latest updates and promotions.</p>
          </Col>
          <Col md={4}>
            <h5>Customer Support:</h5>
            <p>Contact us: 123-456-7890 | info@example.com</p>
            <p>FAQs: Get answers to common questions.</p>
          </Col>
          <Col md={4}>
            <h5>About Us:</h5>
            <p>Learn more about our story and commitment to quality.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mx-2">Menu</li>
              <li className="mx-2">Locations</li>
              <li className="mx-2">Careers</li>
              <li className="mx-2">Privacy Policy</li>
              <li className="mx-2">Terms of Service</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">&copy; {new Date().getFullYear()} Buggees. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;