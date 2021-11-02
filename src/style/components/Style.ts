import {createGlobalStyle} from 'styled-components';

import colors from 'style/colors';

const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  :root {
    --border-width-100: 0.2rem;
    --border-width: var(--border-width-100);
    --border-color: ${colors.craterBrown};
    --border: var(--border-width) solid var(--border-color);

    font-size: 10px;
  }

  #app-root {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`;

export default Style;