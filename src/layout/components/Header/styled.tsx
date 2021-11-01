import styled from 'styled-components';

import colors from 'style/colors';

const Wrapper = styled.header`
  position: relative;
  width: 5.7rem;
  height: 100%;
  display: flex;
  background: ${colors.aubergine};
  border-left: var(--border);
`;

export {Wrapper};