import styled from 'styled-components';

export const TypographyHeader = styled('h1')(isOnline => {
  return {
    color: isOnline ? 'black' : 'red',
    textAlign: isOnline ? 'center' : 'right',
  };
});

export const TypographyText = styled('p')(isOnline => {
  return {
    color: isOnline ? 'black' : 'red',
    textAlign: isOnline ? 'center' : 'right',
  };
});

// const TypographyHeader = styled.h1`
//   /* color: #004243; */
//   margin: 0;
//   color: ${({ isOnline }) => (isOnline ? '#00fbff' : 'black')};
// `;

// const color = '#000';
// const TypographyHeader = styled('h1')({
//   boxShadow: ({ isOnline }) => `0 0 12px ${isOnline ? color : '#00fbff'}`,
// });
