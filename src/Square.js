import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const backgroundColor = black ? 'black' : 'white';
    const color = black ? 'white' : 'black';
    return (
      <div style={{
        backgroundColor,
        color,
        width: '100%',
        height: '100%'
      }}>
        { this.props.children }
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};