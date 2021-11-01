import styled from 'styled-components';

import colors from 'style/colors';

const Wrapper = styled.header`
  position: relative;
  width: 5.7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.aubergine};
`;

const ContentWrapper = styled.div`
  flex: 1;
  border-left: var(--border);
`;

export {Wrapper, ContentWrapper};