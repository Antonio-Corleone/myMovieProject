import React from 'react';
import { Link, NavLink, useHistory  } from 'react-router-dom';
import style from 'styled-components';

const NavItem = style.li`
  font-size: 18px;
  font-weight: 500;
  .active {
    color: #ffffff!important;
    background-color: #F08B23;
    border-radius: 3px;
    &:hover{
      color: #ffffff!important;
    }
  }
}
`

export default function HeaderComponent() {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light py-0 px-4 container-xl">
      <Link
        className="navbar-brand"
        to="/"
        style={{
          color: '#F08B23',
          fontWeight: 'bold',
          fontSize: '30px'
        }}
      >
        IMOVIE
      </Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
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
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={()=> {history.push('/signin')}}>LOGIN</button>
        </form>
      </div>
    </nav>

  )
}
