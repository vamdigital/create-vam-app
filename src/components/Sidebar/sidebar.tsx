import { useCounterContext } from "context/counter/CounterContext";
import styled from "styled-components";

const SideBarWrapper = styled.div`
	display: flex;
	width: 30%;
	flex-direction: column;
	padding: 10px;
	margin-right: 10px;
	border-right: 1px solid #a3a3a3;
	height: 100vh;

`;

export const SideBarComponent = () => {
  const { state } = useCounterContext();
  return (
		<SideBarWrapper>
			<p>Context Count is: {state.count}</p>
		</SideBarWrapper>
  );
};
