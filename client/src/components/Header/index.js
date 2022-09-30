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
    <header className='pb-3'>
      <div>
        <Link to="/">
          <h1 className='tertiary'>What's Soap?</h1>
        </Link>

        <nav className="text-center container">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a  href="/" onClick={logout}>
                Logout
              </a>

              {options.map((option) => (
                <button key={option.name}>
                  <span onClick={() => setOption(option)}>
                    {option.name}
                  </span>
                </button>
              ))}

            </>
          ) : (
            <>
              <Link  className='m-3 p-1 buttons' to="/login">Login</Link>
              <Link className=' p-1 buttons' to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;