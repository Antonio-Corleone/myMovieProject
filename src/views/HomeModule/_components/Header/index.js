import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import style from 'styled-components';
import MenuToggle from '@mui/material/Menu';
import MenuItemToggle from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


const NavItem = style.li`
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  .active {
    color: #ffffff!important;
    background-color: #F08B23;
    border-radius: 3px;
    &:hover{
      color: #ffffff!important;
    }
  }
}
`;

const NavMenu = style.div`
  display: block;
  @media (max-width:767px) {
    display: none!important;
  }
`;
const NavButton = style.div`
  display: none;
  @media (max-width:767px) {
    display: block;
  }
`

export default function HeaderComponent() {
  // NavBar toggle
  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };
  // User list actions toggle
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const history = useHistory();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-light py-2 px-4 container-xl">
        <NavButton type="button" onClick={handleNavToggle}>
          <i className="fa fa-bars" style={{fontSize:25}} aria-hidden="true"></i>
        </NavButton>
        <Link
          to="/"
          style={{
            color: '#F08B23',
            fontWeight: 'bold',
            fontSize: '30px',
            textDecoration:'none'
          }}
        >
          IMOVIE
        </Link>
        <NavMenu>
          <div className="d-flex justify-content-around">
            <NavItem>
              <NavLink exact activeClassName="active" className="nav-link px-3" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link px-3" to="/list-movie">List Movie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link px-3" to="/theaters">Theaters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link px-3" to="/members">Members</NavLink>
            </NavItem>
          </div>
        </NavMenu>
        <div>
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => { history.push('/signin') }}>LOGIN</button> */}
          {!localStorage.getItem("UserLogin")
            ? <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => { history.push('/signin') }}>LOGIN</button>
            :
            <>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar src="/broken-image.jpg" className="mt-1"></Avatar>
              </Button>
              {/* User list actions toggle */}
              <MenuToggle
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItemToggle onClick={handleClose}>Profile</MenuItemToggle>
                <MenuItemToggle onClick={handleClose}>My account</MenuItemToggle>
                <MenuItemToggle
                  onClick={() => {
                    localStorage.removeItem("UserLogin");
                    handleClose();
                  }}
                >
                  Logout
                </MenuItemToggle>
              </MenuToggle>
            </>
          }
        </div>
      </div>

      {/* Show navToggle */}
      {
        navToggled
          ?
          <div>
            <NavItem>
              <NavLink exact activeClassName="active" className="nav-link px-3" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link px-3" to="/list-movie">List Movie</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link px-3" to="/theaters">Theaters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link px-3" to="/members">Members</NavLink>
            </NavItem>
          </div>
          : null
      }
    </>
  )
}
