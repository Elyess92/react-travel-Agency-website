import React from 'react';
import About from './About.js';
import Contact from './contact.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import './contact.css';
import './style.css';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-regular-svg-icons';
const logoUrl =
  'https://o.remove.bg/downloads/7013ccf0-9419-4b1a-b46d-09edda259a46/tripadvisor-logo--removebg-preview.png';
const url = 'https://course-api.com/react-tours-project';

export default function App() {
  const { useState } = React;
  const { useEffect } = React;
  const [cities, setCities] = useState([]);
  const Component = ['Home', 'About', 'contact'];
  const [page, Setpage] = useState(0);
  const DisplayComponent = () => {
    if (page === 0) {
      return <Cities tours={cities} RemoveCities={RemoveCities} />;
    } else if (page === 1) {
      return <About />;
    } else {
      return <Contact />;
    }
  };
  const RemoveCities = (id) => {
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  };
  const getCities = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
        console.log(cities);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCities();
  }, []);
  return (
    <div className="container">
      <div className="control-buttons">
        <button onClick={() => Setpage(page - 1)} disabled={page === 0}>
          Prev
        </button>
        <button
          onClick={() => Setpage(page + 1)}
          disabled={page === Component.length - 1}
        >
          Next
        </button>
      </div>
      <NavBar />
      <div className="body">{DisplayComponent()}</div>
    </div>
  );
}

//NavBar component//
const NavBar = () => {
  return (
    <div className="nav-links">
      <img src={logoUrl} />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Destination</a>
      <a href="#">Contact</a>
    </div>
  );
};
//Cities component//
const Cities = ({ tours, RemoveCities }) => {
  return (
    <div className="cities">
      {tours.map((tour) => {
        return <City id={tour.id} {...tour} Removecity={RemoveCities} />;
      })}
    </div>
  );
};
//city component//
const City = ({ Removecity, id, name, info, image, price }) => {
  const { useState } = React;
  const [ReadMore, setReadMore] = useState(false);
  info.length === 10;

  return (
    <div
      className={'item' + id}
      key={id}
      style={{ background: `url(${image})` }}
    >
      <div className="lay">
        <h4>{name}</h4>
        <p>
          {ReadMore ? info : `${info.substring(0, 100)}...`}
          <a onClick={() => setReadMore(!ReadMore)} className="RemoveBtn">
            {ReadMore ? 'show less' : '  read more'}
          </a>
        </p>
        <span>{price}$</span>
        <button onClick={() => Removecity(id)}>Not interested</button>
      </div>
    </div>
  );
};
