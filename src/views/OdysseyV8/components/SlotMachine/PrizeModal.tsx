import styled from 'styled-components';

import Modal from '../Modal';

import lbImg from './img/Congrates.gif';
import smImg from './img/sm.svg';
import ccmg from './img/cc.svg';
import { useState } from 'react';

const Iocn = styled.img`
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translate(-50%);
  width: 100px;
  height: 100px;
  &.fail {
    top: 30px;
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.div`
  font-family: Gantari;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: #fff;
  padding-top: 70px;
`;

const Content = styled.div`
  font-family: Gantari;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: rgba(235, 244, 121, 1);
  margin-top: 15px;
  &.fail {
    color: #fff;
  }
`;

const Btn = styled.div`
  width: 360px;
  height: 48px;
  border-radius: 10px;
  line-height: 48px;
  background: rgba(235, 244, 121, 1);
  font-family: Gantari;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 45px auto 0px;
  cursor: pointer;
`;

const CcImg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: -4px;
`;

const GetTitle = styled.div`
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
  color: #ebf479;
  margin-top: 20px;
`;

const GetContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-top: 20px;
  color: #979abe;
  .sp {
    color: #fff;
  }
`;

export default function PrizeModal({ onClose, prize }: { onClose: () => void; prize: number }) {
  const [getMoreShow, setGetMoreShow] = useState(false);

  return (
    <Modal onClose={onClose} width={450}>
      {prize <= 0 ? (
        <>
          <Iocn className="fail" src={smImg.src} />
          <Title>Oops!</Title>
          <Content className="fail">{"You haven't won this round."}</Content>
          <Btn onClick={onClose}>Keep trying</Btn>
        </>
      ) : (
        <>
          <Iocn src={lbImg.src} />
          <Title>Congrats!</Title>
          <Content>
            You’ve got {prize} <CcImg src={ccmg.src} /> PTS
          </Content>
          <Btn
            onClick={() => {
              onClose();
            }}
          >
            Continue
          </Btn>
          <GetTitle
            onClick={() => {
              setGetMoreShow(!getMoreShow);
            }}
          >
            Get more PTS
          </GetTitle>
          {getMoreShow ? (
            <GetContent>
              Share your win on Twitter by taking a screenshot of this page to enter the final grand prize draw! To
              qualify, your screenshot needs to include the DapDap logo at the top of your page and wallet address. You
              should also tag <span className="sp">@DapDapMeUp</span> and <span className="sp">#DapDapOdyssey</span> in
              your post.
            </GetContent>
          ) : null}
        </>
      )}
    </Modal>
  );
}
