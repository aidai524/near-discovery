import { memo } from 'react';
import { useSetChain } from '@web3-onboard/react';
import useAuthCheck from '@/hooks/useAuthCheck';
import { StyledAddMeta } from './styles';

const AddMetaMask = ({ chainId, bp }: any) => {
  const [{}, setChain] = useSetChain();
  const { check } = useAuthCheck({ isNeedAk: false });
  return (
    <StyledAddMeta
      onClick={() => {
        check(() => {
          setChain({ chainId: `0x${chainId.toString(16)}` });
        });
      }}
      data-bp={bp}
    >
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17939_111)">
          <path d="M15.4048 0.229027L9.15479 4.85303L10.3168 2.12803L15.4048 0.228027V0.229027Z" fill="#E17726" />
          <path
            d="M0.991125 0.229004L7.18612 4.897L6.07912 2.127L0.991125 0.230004V0.229004ZM13.1541 10.953L11.4911 13.493L15.0521 14.474L16.0721 11.009L13.1541 10.953ZM0.328125 11.007L1.34113 14.472L4.89612 13.492L3.23913 10.952L0.328125 11.007Z"
            fill="#E27625"
          />
          <path
            d="M4.7068 6.66007L3.7168 8.15207L7.2408 8.31207L7.1238 4.52007L4.7068 6.66007ZM11.6898 6.66007L9.2348 4.47607L9.1548 8.31107L12.6788 8.15107L11.6888 6.65807L11.6898 6.66007ZM4.8968 13.4921L7.0288 12.4621L5.1928 11.0321L4.8968 13.4921ZM9.3668 12.4621L11.4928 13.4921L11.2028 11.0321L9.3668 12.4621Z"
            fill="#E27625"
          />
          <path
            d="M11.493 13.4929L9.36697 12.4629L9.53997 13.8439L9.52097 14.4299L11.493 13.4929ZM4.89697 13.4929L6.87497 14.4299L6.86297 13.8439L7.02897 12.4629L4.89697 13.4929Z"
            fill="#D5BFB2"
          />
          <path
            d="M6.91204 10.1189L5.14404 9.59988L6.39304 9.02588L6.91304 10.1179L6.91204 10.1189ZM9.48404 10.1189L10.004 9.02688L11.258 9.60088L9.48404 10.1189Z"
            fill="#233447"
          />
          <path
            d="M4.89821 13.4941L5.20721 10.9541L3.24121 11.0091L4.89821 13.4941ZM11.1902 10.9511L11.4932 13.4911L13.1562 11.0071L11.1902 10.9511ZM12.6792 8.1521L9.15521 8.3121L9.48321 10.1201L10.0022 9.0281L11.2572 9.6011L12.6792 8.1521ZM5.14621 9.6011L6.39421 9.0281L6.91421 10.1191L7.24121 8.3131L3.71821 8.1531L5.14621 9.6001V9.6011Z"
            fill="#CC6228"
          />
          <path
            d="M3.71777 8.1521L5.19477 11.0321L5.14477 9.6021L3.71777 8.1521ZM11.2578 9.6011L11.2028 11.0321L12.6798 8.1521L11.2578 9.6021V9.6011ZM7.23977 8.3131L6.91177 10.1191L7.32577 12.2531L7.41877 9.4411L7.23877 8.3121L7.23977 8.3131ZM9.15577 8.3131L8.98277 9.4351L9.06977 12.2531L9.48377 10.1191L9.15577 8.3131Z"
            fill="#E27525"
          />
          <path
            d="M9.48404 10.1201L9.07004 12.2531L9.36704 12.4631L11.203 11.0331L11.258 9.60205L9.48404 10.1201ZM5.14404 9.60205L5.19404 11.0321L7.03004 12.4621L7.32604 12.2531L6.91204 10.1201L5.14404 9.60205Z"
            fill="#F5841F"
          />
          <path
            d="M9.52097 14.4299L9.53897 13.8439L9.37897 13.7079H7.01697L6.86297 13.8439L6.87497 14.4299L4.89697 13.4919L5.58897 14.0589L6.99197 15.0279H9.39697L10.807 14.0589L11.493 13.4919L9.52097 14.4299Z"
            fill="#C0AC9D"
          />
          <path
            d="M9.36679 12.4629L9.06979 12.2529H7.32579L7.02979 12.4629L6.86279 13.8449L7.01679 13.7089H9.37979L9.53979 13.8449L9.36779 12.4629H9.36679Z"
            fill="#161616"
          />
          <path
            d="M15.6728 5.15603L16.1978 2.60303L15.4068 0.229027L9.36678 4.69903L11.6898 6.66003L14.9728 7.61603L15.6958 6.77103L15.3808 6.54303L15.8808 6.08703L15.4978 5.79103L15.9988 5.40803L15.6718 5.15603H15.6728ZM0.197777 2.60303L0.729777 5.15603L0.389777 5.40803L0.896777 5.79103L0.512777 6.08703L1.01378 6.54303L0.698777 6.77103L1.42178 7.61603L4.70478 6.66003L7.02978 4.70003L0.989777 0.228027L0.196777 2.60303H0.197777Z"
            fill="#763E1A"
          />
          <path
            d="M14.9741 7.61595L11.6901 6.65995L12.6801 8.15195L11.2021 11.032L13.1551 11.008H16.0731L14.9731 7.61595H14.9741ZM4.70512 6.65995L1.42213 7.61595L0.328125 11.008H3.23913L5.19312 11.032L3.71613 8.15195L4.70512 6.65995ZM9.15613 8.31195L9.36613 4.69795L10.3191 2.12695H6.07812L7.03013 4.69795L7.24012 8.31195L7.32013 9.44695L7.32613 12.252H9.07012L9.07613 9.44695L9.15613 8.31195Z"
            fill="#F5841F"
          />
        </g>
        <defs>
          <clipPath id="clip0_17939_111">
            <rect width="17" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>Add network</div>
    </StyledAddMeta>
  );
};

export default memo(AddMetaMask);
