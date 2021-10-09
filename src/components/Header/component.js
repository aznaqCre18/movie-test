import React from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../configs/icons'

function Header({loc}) {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={LogoIcon} alt="logo" width="100" />
        </Link>
      </div>
      {
        loc !== 'landing' ? (
          <div className="list-menu">
            <ul>
              <li>
                <Link to="/genres">
                  <span>Genre</span>
                </Link>
              </li>
              <li>
                <Link to="/movie-list">
                  <span>Movie List</span>
                </Link>
              </li>
            </ul>
          </div>
        ) : null
      }
    </div>
  )
}

export default Header
