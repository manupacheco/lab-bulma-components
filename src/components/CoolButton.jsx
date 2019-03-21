import React, { Component } from 'react'
import classNames from 'classnames';

export default class CoolButton extends Component {
  render() {
    const btnClass = classNames('button', this.props.className, {
      'is-danger': this.props.isDanger,
      'is-small': this.props.isSmall,
      'is-success': this.props.isSuccess,
      'is-info': this.props.isInfo,
      'is-primary': this.props.isPrimary,
    });
    return (
      <button className={btnClass}>{this.props.children}</button>
    )
  }
}
