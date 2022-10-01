import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = (props) => {

  const {
    options = [],
    setOption,
    currentOption,
  } = props;

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='col-12 d-inline-flex pb-3'>
      <div>
        <Link to="/">
          <img className='d-inline-flex w-100' src="/images/whats-soap-w-background-removed.png" alt="What's Soap?"></img>
        </Link>

        <nav className="text-center container">
          {Auth.loggedIn() ? (
            <>
              <Link className='buttons p-1 m-1' to="/profile">Me</Link>
              <a className='buttons p-1 m-1' href="/" onClick={logout}>
                Logout
              </a>

              {options.map((option) => (
                <button className='buttons m-1' key={option.name}>
                  <span onClick={() => setOption(option)}>
                    {option.name}
                  </span>
                </button>
              ))}

            </>
          ) : (
            <>
              <Link className='m-3 p-1 buttons' to="/login">Login</Link>
              <Link className='p-1 buttons' to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;