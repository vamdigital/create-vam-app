import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

	/** base 16 color scheme trial */
	@media(prefers-color-scheme: dark) {
		:root {
			--base00: #2d2d2d;
			--base01: #393939;
			--base02: #515151;
			--base03: #999999;
			--base04: #b4b7b4;
			--base05: #cccccc;
			--base06: #e0e0e0;
			--base07: #ffffff;
			--base08: #f2777a;
			--base09: #f99157;
			--base0A: #ffcc66;
			--base0B: #99cc99;
			--base0C: #66cccc;
			--base0D: #6699cc;
			--base0E: #cc99cc;
			--base0F: #a3685a;
		}
	}

	@media(prefers-color-scheme: light) {
		:root {
			--base00: #ffffff;
			--base01: #e0e0e0;
			--base02: #d6d6d6;
			--base03: #8e908c;
			--base04: #969896;
			--base05: #4d4d4c;
			--base06: #282a2e;
			--base07: #1d1f21;
			--base08: #c82829;
			--base09: #f5871f;
			--base0A: #eab700;
			--base0B: #718c00;
			--base0C: #3e999f;
			--base0D: #4271ae;
			--base0E: #8959a8;
			--base0F: #a3685a;
		}
	}


/** Resets */
*, *:before, *:after{
	box-sizing: inherit;
}
html {
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
		background: var(--base00);
		color: var(--base07);
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
`;

export const Main = styled.div`
	display: flex;
	width: 100%;
`;
