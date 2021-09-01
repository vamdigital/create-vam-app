import { createGlobalStyle } from "styled-components";

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
