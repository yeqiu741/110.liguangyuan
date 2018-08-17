import * as actionType from '../const/actionType';


const init_state = {
  number: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
/* eslint-disable */
const fetNumber = (state = init_state, action) => {
  switch (action.type) {
    case actionType.RESTART:
      const newState = {
        number: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      };
      newState.number[action.data.X1][action.data.Y1] = action.data.number1;
      newState.number[action.data.X2][action.data.Y2] = action.data.number2;
      return newState;
    case actionType.MOVELEFT:
        const moveLeft = action.data;
        return Object.assign({},state,{moveLeft});
    case actionType.MOVERIGHT:
        const moveRight = action.data;
        return Object.assign({},state,{moveRight});
    case actionType.MOVEUP:
        const moveUp = action.data;
        return Object.assign({},state,{moveUp});
    case actionType.MOVEDOWN:
        const moveDown = action.data;
        return Object.assign({},state,{moveDown});
    default:
      return state;
  }
};

export default fetNumber;