import React from 'react';
import theme from 'styled-theming';
import styled from 'styled-components';

const fill = theme('mode', {
  light: '#011627',
  dark: '#d6deeb',
});

const Svg = styled.svg`
  fill: ${fill};
  width: 50vw;
  max-width: 280px;
`;

const Logo = () => (
  <Svg viewBox="0 0 385 48" xmlns="http://www.w3.org/2000/svg">
    <text fill="#e94e1b">Asmin Bhujel</text>
    <path
      fill="#e94e1b"
      d="M360.404 0l-29.255 41.453 5.583 3.802 29.255-41.454L360.404 0z"
    />
    <path d="M367.96 39.81l16.65-13.65v-4.65l-16.4-13.55-3.1 4 14.5 11.6v.55l-14.65 11.8 3 3.9z" />
  </Svg>
);

export default Logo;
