import { useAppSelector } from "app/hooks";
import { CounterType } from "context/counter/CounterAction";
import { useCounterContext } from "context/counter/CounterContext";

export const ContextPage = () => {
  const { state, dispatch } = useCounterContext();
  const { postCount } = useAppSelector(state => state.posts);
  const increment = () => dispatch({ type: CounterType.INCREMENT });
  const decrement = () => dispatch({ type: CounterType.DECREMENT });
  const reset = () => dispatch({ type: CounterType.RESET });
  return (
		<div>
			<h2>Context Page</h2>
			<p>Count: {state.count}</p>
			<p>Post Count: {postCount}</p>
			<button type="button" onClick={increment}>Increment</button>
			<button type="button" onClick={reset}>Reset</button>
			<button type="button" onClick={decrement}>Decrement</button>
		</div>
  );
};
