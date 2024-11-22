import dynamic from 'next/dynamic';

import LottieJSON from './eyes.json';

export default function LottieControl({}: any) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieJSON
  };
  // fix#ReferenceError: document is not defined
  const Lottie: any = dynamic(() => import('react-lottie'), { ssr: false });

  return (
    <Lottie
      options={defaultOptions}
      height={38}
      width={38}
      style={{
        margin: 0,
        transform: 'rotate(-180deg)'
      }}
    />
  );
}
