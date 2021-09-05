import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*, *:before, *:after{
	box-sizing: inherit;
}
html, body {
	overflow: hidden;
	height: 100%;
}
html {
	overflow-y: scroll;
	box-sizing: border-box;
}
	body {
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: 'IBM Plex Sans Arabic', sans-serif;
		line-height: 1.5;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	button {
		font-size: 12px;
	}
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	max-width: 1100px;
	padding: 0 15px;
	margin: 0 auto;
	flex-direction: column;
`;

export const Main = styled.div`
	display: flex;
	width: 100%;
`;
