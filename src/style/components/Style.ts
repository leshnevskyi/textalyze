import {createGlobalStyle} from 'styled-components';

import colors from 'style/colors';

const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  :root {
    --border-width-100: 0.2rem;
    --border-width: var(--border-width-100);
    --border-color: ${colors.cowboy};
    --border: var(--border-width) solid var(--border-color);

    --font-size-400: 1.8rem;
    --font-size-500: 2.4rem;
    --font-size-600: 3.6rem;
    --font-size-1000: 11rem;

    font-size: 10px;
  }

  #app-root {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
`;

export default Style;