import React from 'react';
import MenuButton from 'ComponentsPath/common/menu-button';

const Home = () => (
  <div className="home">
    <article className="vh-100 dt w-100 bg-main">
      <div className="dtc v-mid tc white ph3 ph4-l">
        <h1 className="f6 f2-m f-subheadline-l fw6 tc">Tic Tac Toe!</h1>
        <div className="dib">
          <MenuButton className="db" to="/new">New Game</MenuButton>
          <MenuButton className="db" to="/settings">Settings</MenuButton>
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
