import React, { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { CounterReducer, initialState } from "./CounterReducer";

interface ICounterProvider {
	children: React.ReactNode
}

export const CounterProvider = ({ children }: ICounterProvider) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  return (
		<CounterContext.Provider value={{ state, dispatch }}>
			{children}
		</CounterContext.Provider>
  );
};
