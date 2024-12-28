import { Link, Outlet } from 'react-router-dom';
import './BaseLayout.css';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="navbar-main">
        <h1 className="Title">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>

        

        <nav className="nav-main">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </li>
          </ul>
        </nav>
        <Link  to="/available-cats">
          <button className='availableCat'>Available Cats</button>
        </Link>
      </header>
      <main id="content" className='main-page'>
        <Outlet />
      </main>
      <footer id='foot'>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
