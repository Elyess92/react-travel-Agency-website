import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const illustration =
  'https://o.remove.bg/downloads/d6b92bc4-c995-4a66-b506-114ce7e90b69/business-group-developing-creative-ideas-4737501-3944025-removebg-preview.png';
const API = 'https://reqres.in/api/users';
//About component //
const About = () => {
  const { useState, useEffect } = React;
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch(API)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="About">
      <div className="illustration">
        <img src={illustration} />
      </div>
      <div className="About-info">
        <h2>About Us</h2>
        <p>
          This visually compelling page allows you to disperse information
          evenly. The excellent use of white space means there’ll be no giant
          wall of text to impede readability for your webpage visitors. You can
          briefly describe your history at the top of the page. The three icons
          allow you to lay out your most important values. Plus, the page
          features a carousel, so you can include headshots and titles for your
          teammates.
        </p>
        <div className="team"></div>
        <UsersList usersinfo={users} />
      </div>
    </div>
  );
};
const UsersList = (props) => {
  const { useState } = React;
  const [show, setShow] = useState(false);
  return (
    <div className="users">
      <button onClick={() => setShow(!show)}>
        {!show ? 'show reviews' : 'hide reviews'}
      </button>
      <div className="users-container">
        {props.usersinfo.map(({ id, ...other }) => {
          return (
            <div key={id} className="userInfo">
              {show && <img src={other.avatar} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
