import React from 'react';
import Pic from './../components/pic';
import Logo from './../components/logo';
import Nav from './../navigation';

export default React.createClass({
  getStyles() {
    return {
      width: 350,
      height: 350
    };
  },

  render() {
    let styles = this.getStyles();
    let user = this.props.user;
    return (
      <div className="container">
        <Logo></Logo>
        <Nav></Nav>
        <div className="detail-view" align="middle">
          <div className="pic-detail">
            <h3>{user.FirstName} {user.LastName}</h3>
            <Pic url={user.Photo} circle={false} style={styles} align="middle" />
            <p className="aboutme">{user.AboutMe}</p>
          </div>
        </div>
      </div>
    );
  }
});
