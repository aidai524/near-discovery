import { useRouter } from 'next/router';
import { memo } from 'react';
import { StyledActions, StyledAction, StyledActionText } from './styles';

const Actions = ({ path, deepdive }: any) => {
  const router = useRouter();
  return (
    <StyledActions>
      <StyledAction
        onClick={() => {
          router.push('/alldapps');
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6.54592 7.27211H3.63605C1.62796 7.27211 0 5.64415 0 3.63605C0 1.62796 1.62796 0 3.63605 0C5.64415 0 7.27211 1.62796 7.27211 3.63605V6.54592C7.27211 6.94652 6.94652 7.27211 6.54592 7.27211ZM12.3639 7.27211H9.45408C9.05178 7.27211 8.72619 6.94652 8.72619 6.54421V3.63605C8.72619 1.62796 10.3541 0 12.3622 0C14.3703 0 15.9983 1.62796 15.9983 3.63605C16 5.64415 14.372 7.27211 12.3639 7.27211ZM3.63605 16C1.62796 16 0 14.372 0 12.3639C0 10.3558 1.62796 8.72789 3.63605 8.72789H6.54592C6.94822 8.72789 7.27381 9.05348 7.27381 9.45579V12.3639C7.27211 14.372 5.64415 16 3.63605 16ZM12.3639 16C10.3558 16 8.72789 14.372 8.72789 12.3639V9.45408C8.72789 9.05178 9.05348 8.72619 9.45579 8.72619H12.3639C14.372 8.72619 16 10.3541 16 12.3622C16 14.372 14.372 16 12.3639 16Z"
            fill="black"
          />
        </svg>
        <div>dApps</div>
      </StyledAction>
      {path && (
        <StyledAction
          onClick={() => {
            router.push(`/all-in-one/${path}`);
          }}
        >
          <div>Navigation</div>
        </StyledAction>
      )}
      {true && (
        <StyledAction
          onClick={() => {
            router.push(`/warmup/${path}`);
          }}
          width="141px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
            <path
              d="M4.45743 9.94941H0.70077C0.210305 9.94941 -0.128028 9.51321 0.0465053 9.10624L3.77936 0.400539C3.82986 0.282757 3.91944 0.181388 4.03624 0.109859C4.15304 0.0383309 4.29154 1.92354e-05 4.43339 0H10.7324C11.2294 0 11.5682 0.447393 11.3806 0.856431L9.20714 5.59655H13.2989C13.9006 5.59655 14.2217 6.2268 13.8248 6.62858L3.79289 16.7851C3.30523 17.2789 2.40107 16.851 2.5903 16.216L4.45743 9.94941Z"
              fill="black"
            />
          </svg>
          <StyledActionText>Quick Onboarding</StyledActionText>
        </StyledAction>
      )}
    </StyledActions>
  );
};

export default memo(Actions);
