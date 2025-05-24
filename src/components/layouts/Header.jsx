import user from '../../assets/user.png';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo or brand */}
          <a
            href="/"
            className="ml-6 mb-2 mb-lg-0 text-white text-decoration-none fs-4 fw-semibold"
          >
            Data Seekers
          </a>

          {/* Navigation Links */}
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-3 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 text-white">
                About Project
              </a>
            </li>
          </ul>

          {/* User Avatar Dropdown */}
          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-light text-decoration-none "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user}
                alt="user"
                width="36"
                height="36"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-end text-small">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
