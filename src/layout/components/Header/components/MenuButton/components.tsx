import styled from 'styled-components';

import colors from 'style/colors';

const Wrapper = styled.button`
  aspect-ratio: 1 / 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.bone};
`;

const MenuIcon = styled.span`
  --offset: 0.2rem;

  aspect-ratio: 1 / 1;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before, &::after {
    content: '';
    width: 100%;
    height: var(--border-width-100);
    display: flex;
    background: ${colors.aubergine};
  }

  &::before {
    transform: translateY(calc(-1 * var(--offset)));
  }

  &::after {
    transform: translateY(var(--offset));
  }
`;

export {Wrapper, MenuIcon};