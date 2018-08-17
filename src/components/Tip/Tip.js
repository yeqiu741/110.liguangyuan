import React, { Component } from 'react';
import './Tip.css';


export default class Tip extends Component {
    handleRestartClick = () => {
      this.props.handleTipRestartClick();
    }
    render() {
      const { score } = this.props;
      return (
        <div className="tip">
          <div className="hint">
            <div className="gameName">2048</div>
            <div className="pcRule">Keypressing <mark>W S A D</mark> on PC.</div>
            <div className="phoneRule">Touch moving on Phone!Join it & have fun!</div>
          </div>
          <div className="scoreBoard">
            <div>
                得分<br />{score.lastScore}
            </div>
            <div>
                历史最高分<br />{score.bestScore}
            </div>
            <button onClick={this.handleRestartClick}>reStart</button>
          </div>
        </div>
      );
    }
}
