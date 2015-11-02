import React from 'react';

let Nav = React.createClass({

  getNavStyles() {
    let styles = {
      ns: {
        width: 100,
        heigth: auto,
        border: 1px solid black;
      }
    };
    styles.ns = Object.assign(styles.ns, this.props.style);
  },
  render() {
    let styles = this.getNavStyles();
    return (
      <nav style={styles} />
    );
  }
});

export default Nav;
