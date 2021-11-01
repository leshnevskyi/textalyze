import {Wrapper, ContentWrapper} from './styled';
import {MenuButton} from './components';

const Header = () => {
  return (
    <Wrapper>
      <MenuButton/>
      <ContentWrapper/>
    </Wrapper>
  );
}

export default Header;