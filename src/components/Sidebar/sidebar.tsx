import { useAppSelector } from "app/hooks";
import { useCounterContext } from "context/counter/CounterContext";
import styled from "styled-components";

const SideBarWrapper = styled.div`
	display: flex;
	width: 30%;
	max-width: 200px;
	flex-direction: column;
	padding: 10px;
	margin-right: 20px;
	border-right: 1px solid #a3a3a3;
	min-height: 100%;
	height: 100vh;

`;

export const SideBarComponent = () => {
  const { state } = useCounterContext();
  const { postCount } = useAppSelector(state => state.posts);
  return (
		<SideBarWrapper>
			<p>Context Count is: {state.count}</p>
			<p>Redux Post Count: {postCount}</p>
		</SideBarWrapper>
  );
};
