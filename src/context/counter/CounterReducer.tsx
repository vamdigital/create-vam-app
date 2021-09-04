import { CounterActionType, CounterType } from "./CounterAction";
import { CounterState } from "./CounterContext";

export const initialState: CounterState = {
  count: 0
};

export const CounterReducer = (state: CounterState = initialState, action: CounterActionType) => {
  switch (action.type) {
    case CounterType.INCREMENT:
      return {
        count: state.count + 1
      };

    case CounterType.DECREMENT:
      return {
        count: state.count - 1
      };

    case CounterType.RESET:
      return {
        count: 0
      };

    default:
      return state;
  }
};
