import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'


const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div><Navbar bg="dark" variant="dark"  expand="lg">
    <LinkContainer to={'/'}>
    <Navbar.Brand>ProShop</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container>
    <Navbar.Collapse id="basic-navbar-nav">
    
<SearchBox/>
      <Nav className="ml-auto">

      <LinkContainer to={'/cart'}>
        <Nav.Link><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
        </LinkContainer>

        {
          userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to={'/profile'}>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer onClick={logoutHandler} to={'/'}>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          ) : (
            <LinkContainer to={'/login'}>
        <Nav.Link><i className='fas fa-user'/>Sign In</Nav.Link>
        </LinkContainer>
          )
        }
        {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
        
      </Nav>
    </Navbar.Collapse>
      </Container>
  </Navbar></div>
  )
}

export default Header