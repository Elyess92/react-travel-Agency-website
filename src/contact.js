import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faKeyboard,
} from '@fortawesome/free-regular-svg-icons';
const illustration =
  'https://o.remove.bg/downloads/9cc0aca7-e2cf-4e16-ae7c-b16595b6f792/e496b8d933d19e7877de70d0f883df05-removebg-preview.png';
const Contact = () => {
  const { useState } = React;
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Password: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      Name: '',
      Email: '',
      Password: '',
    });
  };
  return (
    <div className="contact">
      <div className="illustration">
        <img src={illustration} />
      </div>
      <div className="Login-form">
        <p>Welcome to the universe of commerce</p>
        <form>
          <label htmlFor="Name">Name</label>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              style={{ position: 'absolute' }}
              className="icon"
            />
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="enter your full name"
              value={user.Name}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="Email">Email</label>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ position: 'absolute' }}
              className="icon"
            />
            <input
              type="text"
              id="Email"
              name="Email"
              placeholder="enter your email"
              value={user.Email}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="Password">Password</label>
          <div>
            <FontAwesomeIcon
              icon={faKeyboard}
              style={{ position: 'absolute' }}
              className="icon"
            />
            <input
              type="text"
              id="Password"
              name="Password"
              placeholder="enter your password"
              value={user.Password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;