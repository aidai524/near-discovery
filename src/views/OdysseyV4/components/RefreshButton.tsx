import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #979abe;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #3d405a;

  &:hover {
    border: 1px solid #000;
    background: #1e2028;
    color: #fff;
  }

  & .loading {
    animation: loading 1s linear infinite;
    transform-origin: center center;

    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default function RefreshIcon({ onClick, loading }: any) {
  return (
    <StyledContainer onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={loading ? 'loading' : ''}
      >
        <path
          d="M14.3757 2.19517C14.3668 1.84164 14.0975 1.61883 13.7118 1.62695C13.3254 1.63507 13.1264 1.8708 13.0629 2.22448C13.03 2.40789 13.0406 2.59978 13.0387 2.78794C13.0354 3.10895 13.0378 3.43003 13.0378 3.75111C12.9876 3.77386 12.9374 3.79663 12.8872 3.81942C12.7186 3.65741 12.5529 3.49236 12.381 3.3339C10.8321 1.90596 8.99443 1.37437 6.9364 1.69032C4.03065 2.13638 1.87775 4.55559 1.62512 7.57556C1.38813 10.4085 3.21572 13.1457 5.95898 14.0665C8.73411 14.998 11.8219 13.9138 13.3827 11.4571C13.4832 11.299 13.5876 11.1366 13.6489 10.9618C13.768 10.6221 13.7082 10.3059 13.3727 10.1245C13.0495 9.94966 12.7431 10.0199 12.5136 10.3166C12.3988 10.4649 12.3116 10.6342 12.2044 10.7889C11.2368 12.1863 9.90747 12.9477 8.2065 13.0306C5.9289 13.1416 3.84106 11.6643 3.17728 9.48676C2.49173 7.2378 3.43995 4.8146 5.46813 3.63245C7.43964 2.4833 9.97066 2.81307 11.5661 4.43342C11.6829 4.55207 11.7617 4.70827 11.9511 4.98069C11.3282 4.98069 10.8487 4.95533 10.3731 4.98811C9.93398 5.01841 9.70139 5.27974 9.705 5.64661C9.70852 6.00381 9.95742 6.29937 10.38 6.30976C11.4829 6.33689 12.587 6.32704 13.6906 6.31529C14.0541 6.31142 14.3551 6.10331 14.3661 5.74406C14.4024 4.56189 14.4053 3.37754 14.3757 2.19517Z"
          fill="currentColor"
        />
      </svg>
    </StyledContainer>
  );
}
