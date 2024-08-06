import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useTransform, useSpring, MotionValue, useMotionValue } from 'framer-motion';
import classNames from 'classnames';

const StyledTooltip = styled.div<{ tooltipWidth: number }>`
  border: 1px solid;
  border-image-source: linear-gradient(180deg, #464b56 0%, rgba(0, 0, 0, 0) 100%);
  background: #21232a;
  box-shadow: 0px 10px 20px 0px #00000040;
  width: max-content;
  height: 205px;
  position: absolute;
  top: -205px;
  left: ${({ tooltipWidth }) => `calc(50% - ${tooltipWidth / 2}px)`};
  border-radius: 12px;
  padding: 26px 11px 13px 11px;
  box-sizing: border-box;
`;

interface AnimationProps {
  type?: string;
  stiffness?: number;
  damping?: number;
  duration?: number;
}

interface TooltipProps {
  x?: MotionValue<number>;
  children: React.ReactNode;
  showAnimateTooltip?: boolean;
  customClass?: string;
  animationProps?: AnimationProps;
}


/**
 *
 * @param x - The x-coordinate of the tooltip.
 * @param children - The content of the tooltip.
 * @param showAnimateTooltip - Whether to show an animated tooltip. Default is false.
 * @param customClass - Custom CSS class for the tooltip.
 * @param animationProps - Animation properties for the tooltip.
 * @param animationProps.type - The type of animation. Default is 'spring'.
 * @param animationProps.stiffness - The stiffness of the animation. Default is 260.
 * @param animationProps.damping - The damping of the animation. Default is 10.
 * @param animationProps.duration - The duration of the animation. Default is 0.3.
 *
 * @returns The Tooltip component.
 */
const Tooltip: React.FC<TooltipProps> = ({
  x,
  children,
  showAnimateTooltip = false,
  customClass,
  animationProps = {}
}) => {
  const springConfig = { stiffness: 100, damping: 5 };
  const rotate = useSpring(useTransform(x || useMotionValue(0), [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x || useMotionValue(0), [-100, 100], [-50, 50]), springConfig);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  let style = {};
  if (showAnimateTooltip && x) {
    style = {
      translateX,
      rotate,
      whiteSpace: 'nowrap',
    };
  } else {
    style = { whiteSpace: 'nowrap' };
  }

  const {
    type = 'spring',
    stiffness = 260,
    damping = 10,
    duration = 0.3,
  } = animationProps;

  const commonProps = {
    className: classNames(customClass),
    style,
  };

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      setTooltipWidth(tooltipRef.current.offsetWidth);
    }
  }, [children]);

  return showAnimateTooltip && x ? (
    <StyledTooltip
      as={motion.div}
      initial={{ opacity: 0, y: 20, scale: 0.6 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type, stiffness, damping, duration },
      }}
      exit={{ opacity: 0, y: 20, scale: 0.6 }}
      ref={tooltipRef}
      tooltipWidth={tooltipWidth}
      {...commonProps}
    >
      {children}
    </StyledTooltip>
  ) : (
    <StyledTooltip
          ref={tooltipRef}
          tooltipWidth={tooltipWidth} 
          {...commonProps}>
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
