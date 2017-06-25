import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="home">
    <Link to="/game/new">New Game</Link>
  </div>
);

export default Home;
