import { StyledContainer, StyledContent, StyledTitle, StyledDesc } from './styles';

export default function Banner() {
  return (
    <StyledContainer>
      <StyledContent>
        <svg width="346" height="37" viewBox="0 0 346 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.492 36.2787C137.443 36.2787 135.477 36.13 133.594 35.8326C131.711 35.5353 129.993 35.1223 128.44 34.5936C126.92 34.0319 125.598 33.4207 124.475 32.7599L128.985 24.1363C130.274 24.8632 131.562 25.4744 132.851 25.9701C134.172 26.4326 135.477 26.7795 136.766 27.0108C138.088 27.2421 139.393 27.3577 140.681 27.3577C141.706 27.3577 142.548 27.2752 143.209 27.1099C143.903 26.9447 144.415 26.7135 144.745 26.4161C145.109 26.0857 145.29 25.7222 145.29 25.3258C145.29 24.7971 144.993 24.3676 144.398 24.0372C143.804 23.7068 143.011 23.4094 142.019 23.1451C141.061 22.8808 139.987 22.6164 138.798 22.3521C137.642 22.0548 136.469 21.6913 135.279 21.2618C134.09 20.7992 132.999 20.221 132.008 19.5272C131.05 18.8333 130.274 17.9577 129.679 16.9004C129.084 15.8431 128.787 14.5546 128.787 13.0347C128.787 10.3915 129.481 8.09516 130.868 6.14577C132.289 4.19638 134.304 2.69304 136.915 1.63575C139.558 0.545412 142.697 0.000244141 146.331 0.000244141C148.908 0.000244141 151.304 0.264568 153.517 0.793215C155.764 1.28882 157.697 2.01571 159.316 2.97389L155.103 11.4983C153.716 10.6393 152.196 9.99498 150.544 9.56546C148.925 9.13593 147.273 8.92117 145.588 8.92117C144.464 8.92117 143.523 9.03681 142.763 9.26809C142.003 9.46634 141.425 9.74718 141.028 10.1106C140.665 10.4741 140.483 10.854 140.483 11.2505C140.483 11.7792 140.78 12.2252 141.375 12.5887C141.97 12.9191 142.763 13.2164 143.754 13.4808C144.745 13.712 145.819 13.9764 146.975 14.2737C148.165 14.538 149.338 14.885 150.494 15.3145C151.684 15.711 152.774 16.2562 153.765 16.95C154.757 17.6108 155.549 18.4699 156.144 19.5272C156.739 20.5514 157.036 21.8235 157.036 23.3433C157.036 25.9205 156.326 28.1838 154.905 30.1331C153.484 32.0495 151.452 33.5528 148.809 34.6432C146.199 35.7335 143.093 36.2787 139.492 36.2787ZM168.285 35.8326C170.168 36.13 172.134 36.2787 174.182 36.2787C177.784 36.2787 180.889 35.7335 183.5 34.6432C186.143 33.5528 188.175 32.0495 189.596 30.1331C191.016 28.1838 191.727 25.9205 191.727 23.3433C191.727 21.8235 191.429 20.5514 190.835 19.5272C190.24 18.4699 189.447 17.6108 188.456 16.95C187.465 16.2562 186.374 15.711 185.185 15.3145C184.028 14.885 182.855 14.538 181.666 14.2737C180.51 13.9764 179.436 13.712 178.445 13.4808C177.453 13.2164 176.66 12.9191 176.066 12.5887C175.471 12.2252 175.173 11.7792 175.173 11.2505C175.173 10.854 175.355 10.4741 175.719 10.1106C176.115 9.74718 176.693 9.46634 177.453 9.26809C178.213 9.03681 179.155 8.92117 180.278 8.92117C181.963 8.92117 183.615 9.13593 185.234 9.56546C186.886 9.99498 188.406 10.6393 189.794 11.4983L194.007 2.97389C192.388 2.01571 190.455 1.28882 188.208 0.793215C185.994 0.264568 183.599 0.000244141 181.022 0.000244141C177.387 0.000244141 174.248 0.545412 171.605 1.63575C168.995 2.69304 166.979 4.19638 165.559 6.14577C164.171 8.09516 163.477 10.3915 163.477 13.0347C163.477 14.5546 163.775 15.8431 164.369 16.9004C164.964 17.9577 165.74 18.8333 166.699 19.5272C167.69 20.221 168.78 20.7992 169.97 21.2618C171.159 21.6913 172.332 22.0548 173.488 22.3521C174.678 22.6164 175.752 22.8808 176.71 23.1451C177.701 23.4094 178.494 23.7068 179.089 24.0372C179.684 24.3676 179.981 24.7971 179.981 25.3258C179.981 25.7222 179.799 26.0857 179.436 26.4161C179.105 26.7135 178.593 26.9447 177.899 27.1099C177.239 27.2752 176.396 27.3577 175.372 27.3577C174.083 27.3577 172.778 27.2421 171.456 27.0108C170.168 26.7795 168.863 26.4326 167.541 25.9701C166.253 25.4744 164.964 24.8632 163.675 24.1363L159.165 32.7599C160.289 33.4207 161.61 34.0319 163.13 34.5936C164.683 35.1223 166.401 35.5353 168.285 35.8326ZM207.203 26.6643L208.118 22.1047H222.815L224.5 13.6794H209.808L210.623 9.61538H227.325L229.109 0.793574H200.909L193.971 35.4861H222.815L224.599 26.6643H207.203ZM235.995 35.4861L238.525 22.7508L229.849 0.793574H241.595L246.31 12.8089L255.968 0.793574H267.714L250.189 22.9176L247.691 35.4861H235.995ZM99.7433 22.7508L97.2128 35.4861H108.909L111.406 22.9176L128.932 0.793574H117.186L107.528 12.8089L102.813 0.793574H91.0673L99.7433 22.7508ZM51.4582 36.1798L58.3967 1.48732H74.0578C77.7253 1.48732 80.8807 2.08205 83.5239 3.2715C86.1672 4.46096 88.1992 6.16254 89.6199 8.37625C91.0406 10.5569 91.751 13.1671 91.751 16.2068C91.751 19.2796 91.2058 22.0385 90.1155 24.4835C89.0582 26.9285 87.5549 29.0265 85.6055 30.7777C83.6891 32.5288 81.4093 33.867 78.7661 34.7921C76.1229 35.7172 73.2153 36.1798 70.0434 36.1798H51.4582ZM64.9882 27.0606H70.4399C72.5215 27.0606 74.2561 26.6146 75.6438 25.7225C77.0645 24.7974 78.1383 23.5749 78.8652 22.055C79.5921 20.5021 79.9556 18.784 79.9556 16.9007C79.9556 15.546 79.6747 14.4061 79.113 13.481C78.5844 12.5559 77.7749 11.8455 76.6846 11.3499C75.6273 10.8543 74.3056 10.6065 72.7197 10.6065H68.2592L64.9882 27.0606ZM10.146 29.8485C9.39423 30.0336 8.59583 29.7638 8.16953 29.1175C8.11008 29.0274 8.05155 28.9365 7.99392 28.8448C7.6264 28.2379 7.30641 27.6079 7.03396 26.9546C4.01093 29.1727 2.43231 31.066 2.90841 32.2283C4.01436 34.9281 15.7887 32.6609 29.2071 27.1643C42.6256 21.6677 52.6068 15.0231 51.5009 12.3233C51.0234 11.1578 48.558 10.9179 44.8304 11.4639C45.0297 12.2498 45.1672 13.0666 45.2431 13.9142C45.3051 14.6063 44.9533 15.2629 44.3656 15.6338C41.2864 17.5766 37.7996 19.4897 33.9951 21.3023C33.395 21.5882 32.7228 20.9046 32.9229 20.2708C33.3194 18.9822 33.5177 17.6275 33.5177 16.2068C33.5177 15.5552 33.4527 14.9457 33.3228 14.3782C30.7428 15.2294 28.0084 16.2377 25.2021 17.3872C22.5405 18.4775 20.0141 19.613 17.6826 20.7539C17.7591 21.8008 18.0153 22.7466 18.4512 23.5913C19.0129 24.6156 19.7894 25.4086 20.7806 25.9703C21.0728 26.1305 21.0635 26.5974 20.7485 26.7061C17.1153 27.9601 13.5572 29.0085 10.146 29.8485ZM24.444 15.5365C22.0993 16.497 19.852 17.4945 17.7425 18.5032C17.8356 17.6561 18.0057 16.841 18.253 16.0581C18.6495 14.7695 19.2442 13.6296 20.0372 12.6384C20.8301 11.6472 21.7883 10.8708 22.9117 10.3091C24.0351 9.74739 25.3071 9.46654 26.7279 9.46654C28.1486 9.46654 29.3546 9.74739 30.3458 10.3091C31.3121 10.839 32.0578 11.5747 32.583 12.5163C29.9854 13.3764 27.2457 14.3888 24.444 15.5365ZM43.1325 7.48412C43.5443 8.13939 43.8979 8.82384 44.1931 9.53746C45.9897 9.2577 47.5982 9.13238 48.9225 9.20561C49.7706 9.2525 50.6197 9.38607 51.3607 9.68906C52.1066 9.99411 52.9394 10.5588 53.3516 11.5652C53.7639 12.5715 53.5666 13.5581 53.249 14.2988C52.9335 15.0346 52.4221 15.7255 51.8506 16.3538C50.7004 17.6186 48.9821 18.9797 46.9089 20.3598C46.2156 20.8214 45.4726 21.2916 44.6844 21.7677C44.4664 22.5109 44.2067 23.234 43.9055 23.9369C42.8482 26.448 41.3448 28.6286 39.3955 30.4789C37.4461 32.3292 35.1332 33.7664 32.457 34.7907C29.7807 35.7819 26.8566 36.2775 23.6847 36.2775C20.0833 36.2775 16.961 35.6167 14.3177 34.2951C14.2726 34.2722 14.2276 34.2492 14.1828 34.226C13.3622 34.4191 12.5728 34.5887 11.8188 34.7339C9.37309 35.2048 7.19376 35.4403 5.48677 35.346C4.6387 35.2991 3.78954 35.1655 3.04859 34.8625C2.30262 34.5574 1.46992 33.9928 1.05767 32.9864C0.64542 31.98 0.842699 30.9935 1.16029 30.2527C1.47575 29.517 1.98717 28.8261 2.55863 28.1977C3.4926 27.1707 4.8011 26.0802 6.37005 24.9676C6.03189 23.6498 5.86281 22.2494 5.86281 20.7664C5.86281 17.6936 6.39145 14.9017 7.44875 12.3906C8.53909 9.84651 10.0589 7.64931 12.0083 5.79905C13.9577 3.94878 16.2706 2.52804 18.9468 1.53683C21.6231 0.512575 24.5472 0.000448897 27.7191 0.000448897C31.3205 0.000448897 34.4263 0.661258 37.0365 1.98287C39.6797 3.30449 41.7117 5.13824 43.1325 7.48412Z"
            fill="white"
          />
          <path
            d="M275.58 4.07462C276.025 1.7116 278.089 0 280.494 0L339.972 0C343.104 0 345.465 2.84717 344.885 5.92538L341.235 25.309C340.79 27.672 338.726 29.3836 336.321 29.3836H276.844C273.711 29.3836 271.35 26.5364 271.93 23.4582L275.58 4.07462Z"
            fill="white"
          />
          <path
            d="M284.943 21.3212L281.703 7.32117H285.043L287.863 19.7412H285.763L293.643 7.32117H297.003L288.143 21.3212H284.943ZM299.991 21.4812C298.898 21.4812 297.944 21.2812 297.131 20.8812C296.318 20.4812 295.684 19.9212 295.231 19.2012C294.791 18.4812 294.571 17.6345 294.571 16.6612C294.571 15.4612 294.851 14.3945 295.411 13.4612C295.971 12.5145 296.738 11.7678 297.711 11.2212C298.698 10.6745 299.818 10.4012 301.071 10.4012C302.178 10.4012 303.131 10.6012 303.931 11.0012C304.744 11.4012 305.371 11.9612 305.811 12.6812C306.264 13.3878 306.491 14.2345 306.491 15.2212C306.491 16.4078 306.211 17.4745 305.651 18.4212C305.091 19.3678 304.324 20.1145 303.351 20.6612C302.378 21.2078 301.258 21.4812 299.991 21.4812ZM300.191 18.9212C300.804 18.9212 301.344 18.7745 301.811 18.4812C302.291 18.1745 302.664 17.7545 302.931 17.2212C303.198 16.6878 303.331 16.0678 303.331 15.3612C303.331 14.6412 303.118 14.0612 302.691 13.6212C302.264 13.1812 301.664 12.9612 300.891 12.9612C300.278 12.9612 299.731 13.1145 299.251 13.4212C298.784 13.7145 298.411 14.1278 298.131 14.6612C297.864 15.1945 297.731 15.8145 297.731 16.5212C297.731 17.2545 297.944 17.8412 298.371 18.2812C298.798 18.7078 299.404 18.9212 300.191 18.9212ZM307.457 21.3212L310.417 6.48117H313.537L310.577 21.3212H307.457ZM314.893 21.4812C314.359 21.4812 313.919 21.3145 313.573 20.9812C313.226 20.6345 313.053 20.2012 313.053 19.6812C313.053 19.0545 313.253 18.5545 313.653 18.1812C314.066 17.7945 314.559 17.6012 315.133 17.6012C315.666 17.6012 316.099 17.7678 316.433 18.1012C316.779 18.4345 316.953 18.8678 316.953 19.4012C316.953 19.8145 316.853 20.1812 316.653 20.5012C316.466 20.8078 316.219 21.0478 315.913 21.2212C315.606 21.3945 315.266 21.4812 314.893 21.4812ZM323.571 21.3212L323.991 19.2212L330.371 14.2212C330.904 13.7945 331.318 13.4212 331.611 13.1012C331.918 12.7812 332.131 12.4812 332.251 12.2012C332.371 11.9078 332.431 11.6078 332.431 11.3012C332.431 10.8345 332.258 10.4612 331.911 10.1812C331.564 9.90117 331.051 9.76117 330.371 9.76117C329.811 9.76117 329.271 9.88783 328.751 10.1412C328.244 10.3945 327.791 10.7545 327.391 11.2212L325.211 9.64117C325.784 8.86783 326.564 8.24783 327.551 7.78117C328.538 7.3145 329.638 7.08117 330.851 7.08117C331.838 7.08117 332.698 7.24783 333.431 7.58117C334.164 7.90117 334.731 8.34117 335.131 8.90117C335.544 9.46117 335.751 10.1078 335.751 10.8412C335.751 11.3878 335.651 11.9212 335.451 12.4412C335.251 12.9612 334.918 13.4945 334.451 14.0412C333.998 14.5745 333.358 15.1612 332.531 15.8012L327.291 19.8612L326.771 18.6812H334.691L334.171 21.3212H323.571Z"
            fill="black"
          />
        </svg>
        <StyledTitle>「Scroll Expedition」</StyledTitle>
        <StyledDesc>Venture into Scroll&apos;s Expansive DeFi Ecosystem</StyledDesc>
      </StyledContent>
    </StyledContainer>
  );
}
