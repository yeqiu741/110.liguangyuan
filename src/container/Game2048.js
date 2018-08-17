import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pane from '../components/Pane/Pane';
import Tip from '../components/Tip/Tip';
import * as Actioncreators from '../actions/restart';


class Game2048 extends Component {
  componentWillMount() {
    this.initialization();
  }
  // 键盘字符 W S A D 的 ASCII 码分别对应为 87 83 65 68；
  componentDidMount() {
    document.addEventListener('keydown', e => {
      const { actions } = this.props;
      switch (e.keyCode) {
        case 65:
          console.log('A');
          actions.moveLeft(this.handlePressLeftKey());
          this.JudgeScore();
          break;
        case 87:
          console.log('W');
          actions.moveUp(this.handlePressUpKey());
          this.JudgeScore();
          break;
        case 68:
          console.log('D');
          actions.moveRight(this.handlePressRightKey());
          this.JudgeScore();
          break;
        case 83:
          console.log('S');
          actions.moveDown(this.handlePressDownKey());
          this.JudgeScore();
          break;
        case 37:
          console.log('左箭头');
          actions.moveLeft(this.handlePressLeftKey());
          this.JudgeScore();
          break;
        case 39:
          console.log('右箭头');
          actions.moveRight(this.handlePressRightKey());
          this.JudgeScore();
          break;
        case 38:
          console.log('上箭头');
          actions.moveUp(this.handlePressUpKey());
          this.JudgeScore();
          break;
        case 40:
          console.log('下箭头');
          actions.moveDown(this.handlePressDownKey());
          this.JudgeScore();
          break;
        default:
          console.log('not right');
      }
    });
  }
  handlePressUpKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (numberArray[i][j] === 0 && numberArray[i + 1][j] !== 0) {
            numberArray[i][j] = numberArray[i + 1][j];
            numberArray[i + 1][j] = 0;
          }
        }
      }
      m--;
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (numberArray[i][j] !== 0 && numberArray[i][j] === numberArray[i + 1][j]) {
          numberArray[i][j] *= 2;
          actions.addLastScore(numberArray[i][j]);
          numberArray[i + 1][j] = 0;
        }
      }
    }
    return numberArray;
  }
  handlePressDownKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      for (let i = 3; i > 0; i--) {
        for (let j = 0; j < 4; j++) {
          if (numberArray[i - 1][j] !== 0) {
            numberArray[i][j] = numberArray[i - 1][j];
            numberArray[i - 1][j] = 0;
          }
        }
      }
      for (let i = 3; i > 0; i--) {
        for (let j = 0; j < 4; j++) {
          if (numberArray[i][j] === numberArray[i - 1][j]) {
            numberArray[i][j] *= 2;
            actions.addLastScore(numberArray[i][j]);
            numberArray[i - 1][j] = 0;
          }
        }
      }
      m--;
    }
    return numberArray;
  }
  handlePressLeftKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (numberArray[i][j] === 0 && numberArray[i][j + 1] !== 0) {
            numberArray[i][j] = numberArray[i][j + 1];
            numberArray[i][j + 1] = 0;
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (numberArray[i][j] === numberArray[i][j + 1]) {
            numberArray[i][j] *= 2;
            actions.addLastScore(numberArray[i][j]);
            numberArray[i][j + 1] = 0;
          }
        }
      }
      m--;
    }
    return numberArray;
  }
  handlePressRightKey = () => {
    const { actions } = this.props;
    const array = this.props;
    const numberArray = array.restart.number;
    let m = 3;
    while (m > 0) {
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
          if (numberArray[i][j] === 0 && numberArray[i][j - 1] !== 0) {
            numberArray[i][j] = numberArray[i][j - 1];
            numberArray[i][j - 1] = 0;
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
          if (numberArray[i][j] === numberArray[i][j - 1]) {
            numberArray[i][j] *= 2;
            actions.addLastScore(numberArray[i][j]);
            numberArray[i][j - 1] = 0;
          }
        }
      }
      m--;
    }
    return numberArray;
  }
    initialization = () => {
      const { actions } = this.props;
      console.log(this.props);
      let X1 = this.produceRandSiteNumber();
      const Y1 = this.produceRandSiteNumber();
      const X2 = this.produceRandSiteNumber();
      const Y2 = this.produceRandSiteNumber();
      if (X1 === X2 && Y1 === Y2) {
        X1 %= 2;
        X1 += 1;
        return X1;
      }
      const data = {
        X1,
        X2,
        Y1,
        Y2,
        number1: this.produceRandNumber(),
        number2: this.produceRandNumber()
      };
      actions.restart(data);
      actions.initLastScore(0);
      return null;
    }
    // 生成随机数【2，4】，Math.ceil
    produceRandNumber = () => {
      let rand = Math.ceil(Math.random() * 4);
      if (rand % 2 === 0) { return rand; } rand += 1; return rand;
    }
    // 生成随机位置数：【0，1，2，3】
    produceRandSiteNumber = () => {
      const rand = Math.floor(Math.random() * 4);
      return rand;
    }
    JudgeScore = () => {
      const { score, actions } = this.props;
      const newBestScore = score.lastScore > score.bestScore ? score.lastScore : score.bestScore;
      actions.addBestScore(newBestScore);
    }
    render() {
      console.log(this.props);
      const { restart, score } = this.props;
      return (
        <div className="game2048">
          <Tip
            handleTipRestartClick={this.initialization}
            score={score}
          />
          <Pane number={restart} />
        </div>
      );
    }
}
function mapStateToProps(state) {
  const { restart, score } = state;
  return { restart, score };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actioncreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Game2048);
