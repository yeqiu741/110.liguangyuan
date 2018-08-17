import React, { Component } from 'react';
import './Pane.css';
/* eslint-disable */
export default class Pane extends Component {
    judgeNumber = (number,i,j) => {
      if (number === 0) { return <div>{null}</div>; } else if (number === 2048) { alert('恭喜你成功过关！'); }
      return <div key={[i,j]} className={`animation${number}`}>{number}</div>;
    }
    renderBox = number => {
      const rb = (number || []).map((item,idxRow) => (item || []).map((itemColumn,idxColumn) => this.judgeNumber(itemColumn,idxRow,idxColumn)));
      return rb;
    }
    render() {
      const number = this.props;

      console.log(this.props);
      return (
        <div className="gameContainer">
          {this.renderBox(number.number.number)}
        </div>
      );
    }
}
