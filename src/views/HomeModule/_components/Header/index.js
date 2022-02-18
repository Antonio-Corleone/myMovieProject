import React from 'react'

export default function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <a className="navbar-brand" href="/">IMOVIE</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">List Movie</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Theaters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Members</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LOGIN</button>
        </form>
      </div>
    </nav>

  )
}
