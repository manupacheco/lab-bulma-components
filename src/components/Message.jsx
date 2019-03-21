import React, { Component } from 'react'
import classNames from 'classnames';

export default class Message extends Component {
  render() {
    const messageClass = classNames('message', this.props.className, this.props)
    return (
      <article className={messageClass}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}
