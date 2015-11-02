import React from 'react';

let Pic = React.createClass({
  getStyles() {
    let styles = {
      bg: {
        width: 100,
        height: 100,
        backgroundImage: `url(${this.props.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: this.props.rounded
      },
      circle: {
        borderRadius: '50%'
      }
    };
    styles.bg = Object.assign(styles.bg, this.props.style);
    if (this.props.circle) {
      return Object.assign(styles.bg, styles.circle);
    }
    return styles.bg;
  },

  render() {
    let styles = this.getStyles();
    return (
      <div style={styles} />
    );
  }
});

export default Pic;
