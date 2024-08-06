import React, { memo } from 'react';
import { StyledContainer, StyledContent } from './styles';
import LottieEyes from './LottieEyes';
import Image from 'next/image';

const NotificationBar = (props: Props) => {
  const {
    children,
    styles,
    contentStyles,
    onClose = () => {
    },
  } = props;

  return (
    <StyledContainer style={styles}>
      <StyledContent style={contentStyles}>
        <LottieEyes />
        {children}
      </StyledContent>
      <Image
        className="close"
        src="/images/odyssey/v4/noti-close.svg"
        alt=""
        width={12}
        height={12}
        onClick={onClose}
      />
    </StyledContainer>
  );
};

export default memo(NotificationBar);

export interface Props {
  children: any;
  styles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;

  onClose?(): void;
}
