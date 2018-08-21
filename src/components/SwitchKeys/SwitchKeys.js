import React from 'react';
import { Icon } from 'antd';
import './SwitchKeys.css';
/* eslint-disable */
export default class SwitchKeys extends React.Component {
  render() {
    return (
      <div className="switchKeys">
        <button onClick={this.props.up} className="caret-up"><Icon type="caret-up" /></button><br />
        <button onClick={this.props.left} className="caret-left"><Icon type="caret-left" /></button>
        <button onClick={this.props.right} className="caret-right"><Icon type="caret-right" /></button><br />
        <button onClick={this.props.down} className="caret-down"><Icon type="caret-down" /></button>
      </div>
    );
  }
}

