import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	html {
		font-size: 62.5%;
		height: 100%;
	}

	body {
  	-webkit-font-smoothing: antialiased;
		background-color: ${({ theme: { colors } }) => colors.background};
  	color: ${({ theme: { colors } }) => colors.text};
		font-family: ${({ theme: { fontFamilies } }) => fontFamilies.join(', ')};
		font-size: 1.6rem;
		font-weight: ${({ theme: { weights } }) => weights.regular};
		line-height: 1.5;
		height: 100%;
	}

	#root, #__next {
		height: 100%;
		isolation: isolate;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	input, button, textarea, select {
		font: inherit;
	}

	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}
`;
