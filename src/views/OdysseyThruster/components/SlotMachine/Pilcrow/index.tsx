import { Desc, StyledContainer, Title, CtrolImg, UnionImg } from './styles';

import ctrolImg from '../img/ctrol-Img.svg?url'
import unionImg from '../img/union.svg?url'

export default function Pilcrow({ title, desc }: any) {
  return (
    <StyledContainer>
      <Title>
        <svg width="540" height="57" viewBox="0 0 540 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0069 0.559999H35.4469H59.1269V12.08H35.4469V21.6V33.12V56H24.0069V33.12V21.6V12.08H0.326875V0.559999H24.0069ZM130.088 0.559999V56H118.568V33.12H79.6881V56H68.1681V0.559999H79.6881V21.6H118.568V0.559999H130.088ZM204.251 16.96C204.251 19.04 203.877 21.0133 203.131 22.88C202.384 24.7467 201.344 26.4 200.011 27.84C198.731 29.28 197.184 30.48 195.371 31.44C193.611 32.3467 191.717 32.9067 189.691 33.12L204.251 56H190.651L176.171 33.2H156.171V56.08H144.731V0.719996H156.171H187.931C190.171 0.719996 192.277 1.14666 194.251 2C196.224 2.85333 197.957 4.02666 199.451 5.52C200.944 6.96 202.117 8.66666 202.971 10.64C203.824 12.6133 204.251 14.72 204.251 16.96ZM187.931 21.76C189.637 21.76 190.864 21.3867 191.611 20.64C192.357 19.8933 192.731 18.6667 192.731 16.96C192.731 15.2533 192.357 14.0267 191.611 13.28C190.864 12.5333 189.637 12.16 187.931 12.16H156.411H156.171V21.76H184.971H187.931ZM269.549 0.559999H274.189V25.12C274.189 29.3867 273.363 33.3867 271.709 37.12C270.109 40.8533 267.896 44.1333 265.069 46.96C262.296 49.7333 259.016 51.9467 255.229 53.6C251.496 55.2 247.496 56 243.229 56C238.963 56 234.963 55.2 231.229 53.6C227.496 51.9467 224.216 49.7333 221.389 46.96C218.616 44.1333 216.403 40.8533 214.749 37.12C213.149 33.3867 212.349 29.3867 212.349 25.12V0.559999H223.789V25.12C223.789 27.7867 224.296 30.32 225.309 32.72C226.323 35.0667 227.709 37.12 229.469 38.88C231.229 40.64 233.283 42.0267 235.629 43.04C238.029 44.0533 240.563 44.56 243.229 44.56C245.896 44.56 248.403 44.0533 250.749 43.04C253.149 42.0267 255.229 40.64 256.989 38.88C258.749 37.12 260.136 35.0667 261.149 32.72C262.163 30.32 262.669 27.7867 262.669 25.12V0.559999H266.669H269.549ZM282.702 16.96C282.702 14.6133 283.129 12.4533 283.983 10.48C284.836 8.50667 285.983 6.8 287.423 5.36C288.916 3.86667 290.649 2.69333 292.623 1.84C294.649 0.986664 296.783 0.559999 299.023 0.559999H336.143V12H319.903H316.063H299.023C297.316 12 296.089 12.4 295.343 13.2C294.596 14 294.223 15.2533 294.223 16.96C294.223 18.6667 294.596 19.8933 295.343 20.64C296.089 21.3867 297.316 21.76 299.023 21.76H318.943C321.343 21.76 323.583 22.2133 325.663 23.12C327.743 24.0267 329.556 25.2533 331.103 26.8C332.649 28.3467 333.876 30.16 334.783 32.24C335.689 34.32 336.143 36.56 336.143 38.96C336.143 41.36 335.689 43.6 334.783 45.68C333.876 47.76 332.649 49.5733 331.103 51.12C329.556 52.6667 327.743 53.8933 325.663 54.8C323.583 55.6533 321.343 56.08 318.943 56.08H315.663L282.702 56V44.64H318.943C320.543 44.64 321.903 44.08 323.023 42.96C324.143 41.84 324.703 40.5067 324.703 38.96C324.703 37.4133 324.143 36.08 323.023 34.96C321.903 33.7867 320.543 33.2 318.943 33.2H299.023C296.783 33.2 294.649 32.7733 292.623 31.92C290.649 31.0667 288.916 29.92 287.423 28.48C285.983 26.9867 284.836 25.2533 283.983 23.28C283.129 21.3067 282.702 19.2 282.702 16.96ZM368.851 0.559999H380.291H403.971V12.08H380.291V21.6V33.12V56H368.851V33.12V21.6V12.08H345.171V0.559999H368.851ZM416.212 0.559999H429.092H468.452V12H424.452V21.6H440.452H461.412V33.12H440.452H424.452V44.48H468.452V56H428.052H413.012V0.559999H416.212ZM539.094 16.96C539.094 19.04 538.721 21.0133 537.974 22.88C537.228 24.7467 536.188 26.4 534.854 27.84C533.574 29.28 532.028 30.48 530.214 31.44C528.454 32.3467 526.561 32.9067 524.534 33.12L539.094 56H525.494L511.014 33.2H491.014V56.08H479.574V0.719996H491.014H522.774C525.014 0.719996 527.121 1.14666 529.094 2C531.068 2.85333 532.801 4.02666 534.294 5.52C535.788 6.96 536.961 8.66666 537.814 10.64C538.668 12.6133 539.094 14.72 539.094 16.96ZM522.774 21.76C524.481 21.76 525.708 21.3867 526.454 20.64C527.201 19.8933 527.574 18.6667 527.574 16.96C527.574 15.2533 527.201 14.0267 526.454 13.28C525.708 12.5333 524.481 12.16 522.774 12.16H491.254H491.014V21.76H519.814H522.774Z" fill="url(#paint0_linear_14528_1840)" />
          <defs>
            <linearGradient id="paint0_linear_14528_1840" x1="271" y1="-5" x2="271" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
          </defs>
        </svg>

        <UnionImg src={unionImg.src} />
        <CtrolImg src={ctrolImg.src} />
      </Title>
      <Desc>
        <svg width="336" height="34" viewBox="0 0 336 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M295.055 33.0003L303.703 0.800293H313.777L321.091 16.1643L325.231 0.800293H335.903L327.255 33.0003H317.687L310.051 16.9923L305.727 33.0003H295.055Z" fill="url(#paint0_linear_14642_503)" />
          <path d="M275.621 33.0003L284.269 0.800293H295.033L286.385 33.0003H275.621Z" fill="url(#paint1_linear_14642_503)" />
          <path d="M239.879 33.0003L248.527 0.800293H259.337C265.271 0.800293 268.905 1.9503 271.297 4.34229C272.999 6.04429 273.827 8.2983 273.827 10.8283C273.827 18.8783 267.755 24.2603 257.543 24.2603H252.989L250.643 33.0003H239.879ZM255.059 16.5783H256.991C261.085 16.5783 262.971 14.7383 262.971 12.3003C262.971 11.6103 262.695 10.9203 262.189 10.4143C261.453 9.6783 260.165 9.4023 258.969 9.4023H256.945L255.059 16.5783Z" fill="url(#paint2_linear_14642_503)" />
          <path d="M220.589 33.6443C214.195 33.6443 208.629 31.3442 204.719 27.8022L210.883 20.4423C214.563 23.5243 218.335 24.9963 221.739 24.9963C223.119 24.9963 224.085 24.4903 224.085 23.5703C224.085 22.5583 223.487 22.2363 218.795 20.4883C212.815 18.2803 210.009 16.1642 210.009 11.4263C210.009 5.21625 215.713 0.15625 224.499 0.15625C230.249 0.15625 235.355 1.99625 238.851 4.98625L232.687 12.3463C230.249 10.3683 226.799 8.75825 223.395 8.75825C222.015 8.75825 221.049 9.12625 221.049 10.0463C221.049 11.0123 221.739 11.1963 226.201 12.8523C231.675 14.8763 235.171 17.1763 235.171 22.0983C235.171 28.5843 229.835 33.6443 220.589 33.6443Z" fill="url(#paint3_linear_14642_503)" />
          <path d="M165.766 33.6443C156.29 33.6443 149.758 27.2963 149.758 19.0623C149.758 9.08025 157.9 0.15625 168.71 0.15625C178.186 0.15625 184.718 6.50425 184.718 14.7383C184.718 24.7203 176.576 33.6443 165.766 33.6443ZM166.502 24.1683C171.01 24.1683 173.908 19.7523 173.908 15.7043C173.908 12.3003 171.838 9.63225 167.974 9.63225C163.466 9.63225 160.568 14.0483 160.568 18.0963C160.568 21.5003 162.638 24.1683 166.502 24.1683Z" fill="url(#paint4_linear_14642_503)" />
          <path d="M108.59 33.0003L117.238 0.800293H131.498C141.388 0.800293 143.78 4.43429 143.78 8.3903C143.78 12.3003 141.158 15.5663 136.236 16.8543C139.272 17.6363 141.48 19.8903 141.48 23.2023C141.48 28.6303 137.156 33.0003 126.116 33.0003H108.59ZM124.322 13.4503H129.29C132.05 13.4503 133.292 12.2083 133.292 10.8283C133.292 9.49429 132.28 8.9423 129.98 8.9423H125.518L124.322 13.4503ZM121.24 24.8583H126.438C129.06 24.8583 130.624 23.7083 130.624 22.0983C130.624 20.7183 129.474 20.0743 127.174 20.0743H122.528L121.24 24.8583Z" fill="url(#paint5_linear_14642_503)" />
          <path d="M70.7383 33.0003L79.3863 0.800293H91.9443C97.8783 0.800293 101.65 2.08829 103.812 4.2503C105.606 6.04429 106.342 8.43629 106.342 10.9663C106.342 15.9803 103.72 20.3043 97.3723 22.2823L101.834 33.0003H90.2423L86.6543 23.8003H83.9863L81.5023 33.0003H70.7383ZM86.0103 16.1183H89.9203C93.5083 16.1183 95.3943 14.4623 95.3943 12.4383C95.3943 11.7943 95.1643 11.1963 94.7043 10.7363C94.1063 10.1383 93.0483 9.8163 91.5303 9.8163H87.7123L86.0103 16.1183Z" fill="url(#paint6_linear_14642_503)" />
          <path d="M48.2036 33.6443C39.1416 33.6443 34.2656 29.3203 34.2656 22.0523C34.2656 20.3963 34.4956 18.6023 34.9556 16.8543L39.2796 0.800293H50.2276L45.7196 17.5443C45.4896 18.4643 45.3516 19.3383 45.3516 20.0743C45.3516 22.7423 46.9156 24.1223 49.7676 24.1223C51.1016 24.1223 52.3436 23.6623 53.2176 22.7883C54.1836 21.8223 54.8276 20.5803 55.5176 18.0963L60.1636 0.800293H71.1116L66.0056 19.7523C64.8556 24.0303 63.1996 27.1583 60.9456 29.4123C57.9096 32.4483 53.3096 33.6443 48.2036 33.6443Z" fill="url(#paint7_linear_14642_503)" />
          <path d="M3.266 33.0003L9.476 9.90829H0L2.438 0.800293H32.154L29.716 9.90829H20.24L14.03 33.0003H3.266Z" fill="url(#paint8_linear_14642_503)" />
          <defs>
            <linearGradient id="paint0_linear_14642_503" x1="164.51" y1="-9.99971" x2="164.51" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint1_linear_14642_503" x1="164.509" y1="-9.99971" x2="164.509" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint2_linear_14642_503" x1="164.511" y1="-9.99971" x2="164.511" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint3_linear_14642_503" x1="164.509" y1="-9.99976" x2="164.509" y2="41.0002" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint4_linear_14642_503" x1="164.51" y1="-9.99976" x2="164.51" y2="41.0002" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint5_linear_14642_503" x1="164.509" y1="-9.99971" x2="164.509" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint6_linear_14642_503" x1="164.51" y1="-9.99971" x2="164.51" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint7_linear_14642_503" x1="164.509" y1="-9.99971" x2="164.509" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <linearGradient id="paint8_linear_14642_503" x1="164.51" y1="-9.99971" x2="164.51" y2="41.0003" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
          </defs>
        </svg>

      </Desc>

    </StyledContainer>
  );
}
