import React from 'react';
import { StyledCustomButton } from './custom-button.styles';
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <StyledCustomButton
    className={`${isGoogleSignIn ? 'google-sign-in' : ''}
      ${inverted ? 'inverted' : ''}`}
    {...otherProps}
  >
    {children}
  </StyledCustomButton>
);

export default CustomButton;
