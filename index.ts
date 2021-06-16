
import {createStore,Action,newState} from '@vdankovtsev/redux-lib/';

function rootReducer(state = 1, action: Action): newState {
  let result = state;

  switch (action.type) {
    case "INCREMENT":
      result += 1;
      break;
    case "DECREMENT":
      result -= 1;
      break;
    default:
      return state;
  }
  return result;
}

const store = createStore(rootReducer,0)

const action1 = {
    type:'INCREMENT'
}

const action2 = {
  type:'DECREMENT'
}

store.dispatch(action1)
store.getState() // 1;
store.dispatch(action2)
store.getState() // 0;