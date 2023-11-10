import styled from 'styled-components';

const CopyIcon = styled.div`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 0.8;
    transform: scale(1.3);
  }
`;

export default function Copy({ size = 16, onCopy }: { size?: number; onCopy: () => void }) {
  return (
    <CopyIcon
      style={{ width: size * 1.5, lineHeight: size * 1.5 + 'px' }}
      onClick={() => {
        onCopy?.();
      }}
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_30_197)">
          <path
            d="M10.6997 7.13045C10.7813 7.7342 10.7813 8.4767 10.7813 9.28576V10.6826C10.7813 10.8683 10.7813 10.9601 10.8413 11.0164C10.9013 11.0717 10.9913 11.0651 11.1713 11.052C11.3198 11.0415 11.468 11.0265 11.6156 11.007C12.2156 10.9264 12.7134 10.7642 13.1334 10.4192C13.2837 10.2961 13.4216 10.1586 13.545 10.0086C13.9088 9.56514 14.0681 9.03451 14.145 8.39045C14.2191 7.76232 14.2191 6.9692 14.2191 5.96795V5.90701C14.2191 4.90576 14.2191 4.1117 14.1441 3.48451C14.0691 2.83951 13.9088 2.30982 13.5441 1.86639C13.4222 1.71639 13.2834 1.57857 13.1334 1.45482C12.69 1.09107 12.1594 0.931699 11.5153 0.854824C10.8872 0.780762 10.0941 0.780762 9.09375 0.780762H9.03281C8.03156 0.780762 7.23844 0.780762 6.61031 0.855762C5.96625 0.930762 5.43563 1.09107 4.99219 1.45576C4.84219 1.57764 4.70438 1.71639 4.58156 1.86639C4.23656 2.28639 4.07531 2.78514 3.99375 3.38514C3.975 3.52389 3.96 3.67201 3.94875 3.82857C3.93563 4.00857 3.92906 4.09857 3.98438 4.15857C4.04063 4.21857 4.1325 4.21857 4.31813 4.21857H5.715C6.52406 4.21857 7.26563 4.21857 7.87125 4.30014C8.53688 4.3892 9.24188 4.60014 9.82125 5.17951C10.4006 5.75889 10.6116 6.46389 10.7006 7.12951L10.6997 7.13045Z"
            fill="currentColor"
          />
          <path
            d="M4.96594 5.15625H5.65969C6.51375 5.15625 7.20281 5.15625 7.74469 5.22938C8.30719 5.30438 8.78063 5.46656 9.1575 5.8425C9.53344 6.21937 9.69562 6.69281 9.77062 7.25531C9.84375 7.79719 9.84375 8.48625 9.84375 9.34031V10.0341C9.84375 10.8891 9.84375 11.5781 9.77062 12.12C9.69562 12.6825 9.53344 13.1559 9.1575 13.5319C8.78063 13.9087 8.30719 14.07 7.74469 14.1459C7.20281 14.2191 6.51375 14.2191 5.65969 14.2191H4.96594C4.11094 14.2191 3.42188 14.2191 2.88 14.1459C2.3175 14.0709 1.84406 13.9087 1.46813 13.5319C1.09125 13.1569 0.930001 12.6825 0.854063 12.12C0.780938 11.5781 0.780938 10.8891 0.780938 10.0341V9.34031C0.780938 8.48625 0.780938 7.79719 0.854063 7.25531C0.929063 6.69281 1.09125 6.21937 1.46813 5.8425C1.84313 5.46656 2.3175 5.30438 2.88 5.22938C3.42188 5.15625 4.11094 5.15625 4.96594 5.15625Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_30_197">
            <rect width="15" height="15" fill="white" transform="matrix(-1 0 0 1 15 0)" />
          </clipPath>
        </defs>
      </svg>
    </CopyIcon>
  );
}
