import {useEffect, useState} from 'react';
import {createGlobalStyle, css} from 'styled-components';

interface FontStyle {
  weight: number;
  isItalic?: boolean;
}

interface Font {
  family: string;
  styles: FontStyle[];
}

const fonts: Font[] = [
  {
    family: 'Mirador',
    styles: [
      {weight: 900},
    ],
  },
  {
    family: 'SF UI Text',
    styles: [
      {weight: 400},
      {weight: 900},
    ]
  }
];

const generateFontFaces = async (
  fonts: Font[], format: string = 'woff2'
) => {
  return fonts.map(font => font.styles.map(async (style) => {
    const fontFolderName = font.family.replaceAll(' ', '');
    const module = await import(
      `assets/fonts/${fontFolderName}/${style.weight}.${format}`
    );
    const srcUrl = module.default;

    return css`
      @font-face {
        font-family: ${font.family};
        src: url('${srcUrl}') format('${format}');
        font-weight: ${style.weight};
        ${style.isItalic && css`
          font-style: italic;
        `}
        font-display: block;
      }
    `;
  })).join(' '); 
}

const GlobalStyle = createGlobalStyle<{fontFaces: string}>`
  ${({fontFaces}) => fontFaces}
`;

const Fonts = () => {
  const [fontFaces, setFontFaces] = useState(null);

  useEffect(() => {
    (async () => {
      setFontFaces(await generateFontFaces(fonts));
    })();
  }, []);

  return <GlobalStyle fontFaces={fontFaces}/>;
}

export default Fonts;