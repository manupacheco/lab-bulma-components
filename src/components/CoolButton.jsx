import React, { Component } from 'react'
import classNames from 'classnames';

export default class CoolButton extends Component {
  render() {
    const btnClass = classNames('button', this.props.className, this.props);
    return (
      <button className={btnClass}>{this.props.children}</button>
    )
  }
}
