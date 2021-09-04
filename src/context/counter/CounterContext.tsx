import { createContext, useContext } from "react";
import { CounterDispatch } from "./CounterAction";

export type CounterState = {
	count: number;
}

export const useCounterContext = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("To use CounterContext it must be wrapper in the CounterProvider");
  return ctx;
};

export const CounterContext = createContext<{state: CounterState, dispatch: CounterDispatch} | null>(null);
