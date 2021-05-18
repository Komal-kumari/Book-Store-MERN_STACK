import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div class="footer-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h2>Services</h2>
              <ul>
                <li><a href="/">Web design</a></li>
                <li><a href="/">Development</a></li>
                <li><a href="/">Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h2>About</h2>
              <ul>
                <li><a href="/">Company</a></li>
                <li><a href="/">Team</a></li>
                <li><a href="/">Careers</a></li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h2>Company Name</h2>
              <p>Fliker Book Store</p>
              <p>Get the desired books here</p>
            </div>
            <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
          </div>
          <p class="copyright"></p>
        </div>
        <Container>
          <Row>
            <Col className="text-center">
            <i class="fab fa-facebook-f"></i> <a></a>
            <i class="fab fa-instagram"></i> <a></a>
            <i class="fab fa-twitter"></i> <a></a>
            <i class="fab fa-linkedin-in"></i>
              </Col>
          </Row>
        </Container>
        
        <Container>
          <Row>
            <Col className='text-center py-3'>Copyright &copy; BookStore</Col>
          </Row>
        </Container>
      </div>

    </footer>
  )
}

export default Footer
