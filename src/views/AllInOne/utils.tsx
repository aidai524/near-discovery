import React from 'react';
import { StyledFlex } from '@/styled/styles';

export function hexToRgb(hex: string): string {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ');
  }
  return "";
}

export function renderTitle(title?: string) {
  if (!title) return '';
  if (['Bridge', 'Swap'].includes(title)) {
    let icon = (
      <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.9028 11.5226C10.505 11.5226 10.1235 11.6806 9.84224 11.9618L2.97622 18.8265C2.03113 19.7714 2.70035 21.3873 4.03678 21.3873L15.0972 21.3873C15.495 21.3873 15.8765 21.2293 16.1578 20.948L23.0238 14.0833C23.9689 13.1384 23.2997 11.5226 21.9632 11.5226L10.9028 11.5226Z"
          fill="#EBF479"
          stroke="#16181D"
        />
        <path
          d="M10.9028 2.97229C10.505 2.97229 10.1235 3.13029 9.84224 3.41153L2.97622 10.2762C2.03113 11.2211 2.70035 12.837 4.03678 12.837L15.0972 12.837C15.495 12.837 15.8765 12.679 16.1578 12.3977L23.0238 5.53306C23.9689 4.58815 23.2997 2.97229 21.9632 2.97229L10.9028 2.97229Z"
          fill="#EBF479"
          stroke="#16181D"
        />
      </svg>
    );
    if (title === 'Bridge') {
      icon = (
        <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.518569 12.0992L12.6473 0.695687C13.598 -0.198154 15.0885 0.861905 14.5562 2.05328L11.1451 9.68708C10.814 10.428 11.3022 11.2762 12.1091 11.3622L17.7878 11.9671C18.82 12.0771 19.2304 13.3608 18.4532 14.0491L3.72053 27.0986C2.72016 27.9847 1.24149 26.81 1.87837 25.6351L6.84651 16.4705C7.24896 15.7281 6.77497 14.8138 5.93631 14.7149L1.19686 14.1558C0.188828 14.0369 -0.220926 12.7945 0.518569 12.0992Z"
            fill="#EBF479"
          />
        </svg>
      );
    }
    return (
      <StyledFlex alignItems="center" gap="3px">
        {icon}
        <span>Super {title}</span>
      </StyledFlex>
    );
  }
  return title;
}
