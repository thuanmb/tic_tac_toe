import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="home">
    <article className="vh-100 dt w-100 bg-main">
      <div className="dtc v-mid tc white ph3 ph4-l">
        <h1 className="f6 f2-m f-subheadline-l fw6 tc">Tic Tac Toe!</h1>
        <div className="dib">
          <Link className="f6 link dim br1 ba ph3 pv2 mb2 db white" to="/new">New Game</Link>
          <Link className="f6 link dim br1 ba ph3 pv2 mb2 db white" to="/settings">Settings</Link>
        </div>
      </div>
    </article>

    <footer className="bg-gray white-80 pv5 pv3-l ph4">
      <p className="f6">
        <span className="dib mr4 mr5-ns">Created by <strong>Thuan Bui</strong></span>
      </p>
    </footer>
  </div>
);

export default Home;
