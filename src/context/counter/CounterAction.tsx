export enum CounterType {
	INCREMENT = "INCREMENT",
	DECREMENT = "DECREMENT",
	RESET = "RESET"
}

type IncrementActionType = {
	type: CounterType.INCREMENT
}

type DecrementActionType = {
	type: CounterType.DECREMENT
}

type ResetActionType = {
	type: CounterType.RESET
}

export type CounterDispatch = (action: CounterActionType) => void;

export type CounterActionType = IncrementActionType | DecrementActionType | ResetActionType
