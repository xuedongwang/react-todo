import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e) {
    this.props.onClick && this.props.onClick(e);
  }
  render () {
    const { className, iconName } = this.props;
    return (
      <i className={className} onClick={this.handleClick}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#${iconName}`}></use>
        </svg>
      </i>
    );
  }
};

Icon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};

export default Icon;
