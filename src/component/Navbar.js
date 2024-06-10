import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.byDefault} bg-${props.byDefault}`}>
        <div className="container-fluid">

          <Link className="navbar-brand" to="/Home"><h3>Praveen Kumar.</h3></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">{props.replace}</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="emptyLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Carousel">Carousel</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/Accordion">Accordion</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="emptyLink">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/TextEditor">TextEditor</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="emptyLink" aria-disabled="true">Disabled</a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-${props.myBtnn}`} type="submit">Search</button>
            </form>

            <div className="form-check form-switch mx-2 d-flex align-items-center">
              <input className="form-check-input" type="checkbox" role="switch" id="mySwitch" onClick={props.myBtn}/>
              <label className={`form-switch ps-2 text-${props.myBtnn}`} htmlFor="mySwitch">Change Theme</label>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
