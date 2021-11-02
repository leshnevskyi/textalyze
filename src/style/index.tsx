import {Fonts, Style} from './components';

interface Props {
  children: React.ReactNode;
}

const StyleProvider = ({children}: Props) => {
  return (
    <>
      <Fonts/>
      <Style/>
      {children}
    </>
  );
}

export default StyleProvider;