import React from 'react';

export default React.createClass({
  getNavStyles() {
    return {
    };
  },
  render() {
    let styles = this.getNavStyles();
    return (
      <ul className="nav" style={styles}>
        <li><a href={""} className="btn"> Home </a></li>
        <li><a href={"#add"} className="btn"> Add User </a></li>
        <li><a href={"https://www.instagram.com"} target="_blank" className="btn"> Instagram </a></li>
      </ul>
    );
  }
});
