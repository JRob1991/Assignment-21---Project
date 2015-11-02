import React from 'react';
import _ from 'underscore';
import Pic from './../components/pic';
import Logo from './../components/logo';
import Nav from './../navigation';

export default React.createClass({
  getStyles() {
    return {
      width: 250,
      height: 250
    };
  },

  clickHandler(objectId) {
    this.props.onSelect(objectId);
  },

  render() {
    let styles = this.getStyles();
    let users = this.props.users;
    return (
      <div className="container">
        <Logo></Logo>
        <Nav></Nav>
      <div className="pic-container">

        {
          users.map((user) => {
            return (
              <div key={user.objectId} id={user.objectId} className="col-3" onClick={_.partial(this.clickHandler, user.objectId)} style={{
                cursor: 'pointer'
              }} title={`This is ${user.FirstName} ${user.LastName}!`}>
                <Pic url={user.Photo} circle={false} style={styles} className="user-image"></Pic>
              </div>
            );
          })
        }
      </div>
      </div>
    );
  }
});
