import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import FavoritesList from './FavoritesList';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar-brand active' : 'navbar-brand'
          }
          to="/"
        >
          Star Wars
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                aria-current="page"
                to="/category/people"
              >
                People
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/category/vehicles"
              >
                Vehicles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/category/planets"
              >
                Planets
              </NavLink>
            </li>
          </ul>
          <FavoritesList />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
