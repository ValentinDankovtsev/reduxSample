
import {createStore,Action,newState} from '@vdankovtsev/redux-lib/';



describe("test createStore implementation", () => {
    it("dispatch is work", () => {
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
      const store = createStore(rootReducer, 0);
      store.dispatch({ type: "INCREMENT" });
      expect(store.getState()).toBe(1);
      store.dispatch({ type: "DECREMENT" });
      expect(store.getState()).toBe(0);
    });
});