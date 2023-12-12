import { useRouter } from 'next/navigation';
import { memo } from 'react';

import {
  StyledDapp,
  StyledDappButton,
  StyledDappButtons,
  StyledDappCoins,
  StyledDappDesc,
  StyledDappIcon,
  StyledDappInfo,
  StyledDappTag,
  StyledDappTags,
  StyledDappTitle,
  StyledHeader,
} from './styles';

const FavoriteDapp = ({ name, description, route, id }: any) => {
  const router = useRouter();
  return (
    <StyledDapp>
      <StyledDappIcon />
      <StyledDappInfo>
        <StyledHeader>
          <StyledDappTitle>{name}</StyledDappTitle>
          <StyledDappCoins>
            {Coin}
            <span>10</span>
          </StyledDappCoins>
        </StyledHeader>
        <StyledDappDesc>{description}</StyledDappDesc>
        <StyledDappTags>
          <StyledDappTag className="dexs">Dexes</StyledDappTag>
          <StyledDappTag className="bridge">Bridge</StyledDappTag>
          <StyledDappTag className="liquidity">Liquidity</StyledDappTag>
        </StyledDappTags>
      </StyledDappInfo>
      <StyledDappButtons>
        <StyledDappButton
          onClick={() => {
            router.push(`/dapps-details`);
          }}
        >
          Detail
        </StyledDappButton>
        <StyledDappButton
          onClick={() => {
            route && router.push(route);
          }}
        >
          Dapp
        </StyledDappButton>
      </StyledDappButtons>
    </StyledDapp>
  );
};

export default memo(FavoriteDapp);

export const Coin = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clip-path="url(#clip0_1021_1403)">
      <path
        d="M13.8465 13.8465H15.2311V15.2311H13.8465V13.8465ZM13.8465 12.4618H15.2311V13.8465H13.8465V12.4618ZM13.8465 11.0772H15.2311V12.4618H13.8465V11.0772ZM13.8465 9.69261H15.2311V11.0772H13.8465V9.69261ZM13.8465 8.30799H15.2311V9.69261H13.8465V8.30799ZM13.8465 6.92338H15.2311V8.30799H13.8465V6.92338ZM13.8465 5.53876H15.2311V6.92338H13.8465V5.53876ZM13.8465 4.15415H15.2311V5.53876H13.8465V4.15415ZM13.8465 2.76953H15.2311V4.15415H13.8465V2.76953ZM12.4619 15.2311H13.8465V16.6157H12.4619V15.2311Z"
        fill="#1E2028"
      />
      <path
        d="M12.4619 13.8465H13.8465V15.2311H12.4619V13.8465ZM12.4619 12.4618H13.8465V13.8465H12.4619V12.4618ZM12.4619 11.0772H13.8465V12.4618H12.4619V11.0772ZM12.4619 9.69261H13.8465V11.0772H12.4619V9.69261ZM12.4619 8.30799H13.8465V9.69261H12.4619V8.30799ZM12.4619 6.92338H13.8465V8.30799H12.4619V6.92338ZM12.4619 5.53876H13.8465V6.92338H12.4619V5.53876ZM12.4619 4.15415H13.8465V5.53876H12.4619V4.15415ZM12.4619 2.76953H13.8465V4.15415H12.4619V2.76953Z"
        fill="#FF9343"
      />
      <path
        d="M12.4618 1.38477H13.8464V2.76938H12.4618V1.38477ZM11.0771 16.6155H12.4618V18.0002H11.0771V16.6155Z"
        fill="#1E2028"
      />
      <path
        d="M11.0771 15.2303H12.4618V16.6149H11.0771V15.2303ZM11.0771 13.8457H12.4618V15.2303H11.0771V13.8457Z"
        fill="#FF9343"
      />
      <path
        d="M11.0771 12.4613H12.4618V13.8459H11.0771V12.4613ZM11.0771 11.0767H12.4618V12.4613H11.0771V11.0767ZM11.0771 9.69208H12.4618V11.0767H11.0771V9.69208ZM11.0771 8.30747H12.4618V9.69208H11.0771V8.30747ZM11.0771 6.92285H12.4618V8.30747H11.0771V6.92285Z"
        fill="#FFDD4D"
      />
      <path
        d="M11.0771 5.53891H12.4618V6.92353H11.0771V5.53891ZM11.0771 4.1543H12.4618V5.53891H11.0771V4.1543Z"
        fill="white"
      />
      <path
        d="M11.0771 2.76938H12.4618V4.154H11.0771V2.76938ZM11.0771 1.38477H12.4618V2.76938H11.0771V1.38477Z"
        fill="#FFDD4D"
      />
      <path d="M11.077 0H12.4616V1.38462H11.077V0ZM9.69238 16.6154H11.077V18H9.69238V16.6154Z" fill="#1E2028" />
      <path d="M9.69238 15.2305H11.077V16.6151H9.69238V15.2305Z" fill="#FF9343" />
      <path d="M9.69238 13.8457H11.077V15.2303H9.69238V13.8457Z" fill="#1E2028" />
      <path
        d="M9.69238 12.462H11.077V13.8466H9.69238V12.462ZM9.69238 11.0774H11.077V12.462H9.69238V11.0774ZM9.69238 9.69276H11.077V11.0774H9.69238V9.69276ZM9.69238 8.30814H11.077V9.69276H9.69238V8.30814ZM9.69238 6.92353H11.077V8.30814H9.69238V6.92353ZM9.69238 5.53891H11.077V6.92353H9.69238V5.53891ZM9.69238 4.1543H11.077V5.53891H9.69238V4.1543Z"
        fill="#FFDD4D"
      />
      <path d="M9.69238 2.76953H11.077V4.15415H9.69238V2.76953Z" fill="white" />
      <path d="M9.69238 1.38477H11.077V2.76938H9.69238V1.38477Z" fill="#FFDD4D" />
      <path d="M9.69223 0H11.0768V1.38462H9.69223V0ZM8.30762 16.6154H9.69223V18H8.30762V16.6154Z" fill="#1E2028" />
      <path d="M8.30762 15.2305H9.69223V16.6151H8.30762V15.2305Z" fill="#FF9343" />
      <path d="M8.30762 13.8457H9.69223V15.2303H8.30762V13.8457Z" fill="#1E2028" />
      <path
        d="M8.30762 12.4617H9.69223V13.8463H8.30762V12.4617ZM8.30762 11.0771H9.69223V12.4617H8.30762V11.0771ZM8.30762 9.69246H9.69223V11.0771H8.30762V9.69246ZM8.30762 8.30784H9.69223V9.69246H8.30762V8.30784ZM8.30762 6.92323H9.69223V8.30784H8.30762V6.92323ZM8.30762 5.53861H9.69223V6.92323H8.30762V5.53861ZM8.30762 4.154H9.69223V5.53861H8.30762V4.154ZM8.30762 2.76938H9.69223V4.154H8.30762V2.76938ZM8.30762 1.38477H9.69223V2.76938H8.30762V1.38477Z"
        fill="#FFDD4D"
      />
      <path d="M8.30747 0H9.69208V1.38462H8.30747V0ZM6.92285 16.6154H8.30747V18H6.92285V16.6154Z" fill="#1E2028" />
      <path d="M6.92285 15.2305H8.30747V16.6151H6.92285V15.2305Z" fill="#FF9343" />
      <path d="M6.92285 13.8457H8.30747V15.2303H6.92285V13.8457Z" fill="#1E2028" />
      <path
        d="M6.92285 12.462H8.30747V13.8466H6.92285V12.462ZM6.92285 11.0774H8.30747V12.462H6.92285V11.0774ZM6.92285 9.69276H8.30747V11.0774H6.92285V9.69276ZM6.92285 8.30814H8.30747V9.69276H6.92285V8.30814ZM6.92285 6.92353H8.30747V8.30814H6.92285V6.92353ZM6.92285 5.53891H8.30747V6.92353H6.92285V5.53891ZM6.92285 4.1543H8.30747V5.53891H6.92285V4.1543Z"
        fill="#FF9343"
      />
      <path d="M6.92285 2.76953H8.30747V4.15415H6.92285V2.76953Z" fill="#1E2028" />
      <path d="M6.92285 1.38477H8.30747V2.76938H6.92285V1.38477Z" fill="#FFDD4D" />
      <path d="M6.9227 0H8.30732V1.38462H6.9227V0ZM5.53809 16.6154H6.9227V18H5.53809V16.6154Z" fill="#1E2028" />
      <path
        d="M5.53809 15.2303H6.9227V16.6149H5.53809V15.2303ZM5.53809 13.8457H6.9227V15.2303H5.53809V13.8457Z"
        fill="#FFF1B6"
      />
      <path
        d="M5.53809 12.462H6.9227V13.8466H5.53809V12.462ZM5.53809 11.0774H6.9227V12.462H5.53809V11.0774ZM5.53809 9.69276H6.9227V11.0774H5.53809V9.69276ZM5.53809 8.30814H6.9227V9.69276H5.53809V8.30814ZM5.53809 6.92353H6.9227V8.30814H5.53809V6.92353ZM5.53809 5.53891H6.9227V6.92353H5.53809V5.53891ZM5.53809 4.1543H6.9227V5.53891H5.53809V4.1543Z"
        fill="#1E2028"
      />
      <path
        d="M5.53809 2.76938H6.9227V4.154H5.53809V2.76938ZM5.53809 1.38477H6.9227V2.76938H5.53809V1.38477Z"
        fill="#FFF1B6"
      />
      <path d="M5.53891 0H6.92353V1.38462H5.53891V0ZM4.1543 15.2308H5.53891V16.6154H4.1543V15.2308Z" fill="#1E2028" />
      <path
        d="M4.1543 13.8465H5.53891V15.2311H4.1543V13.8465ZM4.1543 12.4618H5.53891V13.8465H4.1543V12.4618ZM4.1543 11.0772H5.53891V12.4618H4.1543V11.0772ZM4.1543 9.69261H5.53891V11.0772H4.1543V9.69261ZM4.1543 8.30799H5.53891V9.69261H4.1543V8.30799ZM4.1543 6.92338H5.53891V8.30799H4.1543V6.92338ZM4.1543 5.53876H5.53891V6.92338H4.1543V5.53876ZM4.1543 4.15415H5.53891V5.53876H4.1543V4.15415ZM4.1543 2.76953H5.53891V4.15415H4.1543V2.76953Z"
        fill="#FFF1B6"
      />
      <path
        d="M4.15415 1.38477H5.53876V2.76938H4.15415V1.38477ZM2.76953 13.8463H4.15415V15.2309H2.76953V13.8463ZM2.76953 12.4617H4.15415V13.8463H2.76953V12.4617ZM2.76953 11.0771H4.15415V12.4617H2.76953V11.0771ZM2.76953 9.69246H4.15415V11.0771H2.76953V9.69246ZM2.76953 8.30784H4.15415V9.69246H2.76953V8.30784ZM2.76953 6.92323H4.15415V8.30784H2.76953V6.92323ZM2.76953 5.53861H4.15415V6.92323H2.76953V5.53861ZM2.76953 4.154H4.15415V5.53861H2.76953V4.154ZM2.76953 2.76938H4.15415V4.154H2.76953V2.76938Z"
        fill="#1E2028"
      />
    </g>
    <defs>
      <clipPath id="clip0_1021_1403">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
