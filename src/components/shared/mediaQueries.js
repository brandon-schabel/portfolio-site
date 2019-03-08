import { css } from 'styled-components';

export const sizes = {
  desktop: 1281,
  tabletLandscape: 1025,
  tablet: 767,
  mobileMedium: 500
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
