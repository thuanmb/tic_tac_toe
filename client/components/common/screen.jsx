import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'ComponentsPath/menu';

const Screen = ({ title, children }) => (
  <div>
    <Menu title={title} />
    <article className="screen-container absolute w-100 bg-main tc white">
      {children}
    </article>
  </div>
);

Screen.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Screen;
