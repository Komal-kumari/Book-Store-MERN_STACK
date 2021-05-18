import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header style={{ marginBottom: "5.5rem" }}>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect fixed="top">
        {/* <Container> */}
          <LinkContainer to='/' className="mx-5">
            <Navbar.Brand>Fliker Book Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/' className="texthover">
                <Nav.Link>
                  <i className='fas fa-home'></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart' className="texthover">
                <Nav.Link >
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'className="texthover">
                <Nav.Link>
                  <i className='fas fa-info'></i> About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact' className="texthover">
                <Nav.Link>
                  <i className='fas fa-address-book'></i> Contact Us
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username' className="texthover">
                  <LinkContainer to='/profile' className="text1hover">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} className="text1hover">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login' className="texthover">
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' className="texthover">
                  <LinkContainer to='/admin/userlist' className="text1hover">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist' className="text1hover">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist' className="text1hover">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <div className="mx-4"></div>
        {/* </Container> */}
      </Navbar>
    </header>
  )
}

export default Header
