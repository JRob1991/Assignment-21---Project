import React from 'react';
import Pic from '../components/pic';

export default React.createClass({
  getLogoStyles() {
    return {
      width: 100
    };
  },

  render() {
    let styleLogo = this.getLogoStyles();
    return (
      <div className="logo-container">
        <img src="images/logo.png" className="logo" style={styleLogo} circle={true}></img>
        <h1> Social Media Done Right </h1>
      </div>
    );
  }
});
