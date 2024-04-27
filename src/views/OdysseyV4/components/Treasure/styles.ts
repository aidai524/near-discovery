import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background-color: #000;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const IconGroup = styled.div`
  position: absolute;
  display: flex;
  img {
    margin-left: -5px;
  }
`;

const Treasure = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;
  cursor: pointer;
  .star {
    position: absolute;
  }
  .scale {
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Treasure1 = styled(Treasure)`
  .title {
    left: 133px;
    width: 230px;
  }
  .td1 {
    position: absolute;
    left: 133px;
    top: 33px;
  }
`;
export const Treasure2 = styled(Treasure)`
  .title {
    left: 0;
  }
  .td2 {
    left: 110px;
    top: 31px;
  }
  .particle {
    left: 7px;
    top: 132px;
  }
  .hyperlock {
    left: 236px;
    top: 251px;
  }
`;
export const Treasure3 = styled(Treasure)`
  .title {
    left: -105px;
  }
  .td3 {
    position: absolute;
    left: 15px;
    top: 33px;
  }
`;
export const Treasure4 = styled(Treasure)`
  width: 503px;
  height: 300px;
  .title {
    left: 262px;
  }
  .td4 {
    position: absolute;
    left: 260px;
    top: 31px;
  }
  .track1 {
    position: absolute;
    top: 66px;
    left: 70px;
  }

  .thruster {
    left: 300px;
    top: 114px;
  }
  .renzo {
    left: 124px;
    top: 174px;
  }
  .hyperlock {
    left: 389px;
    top: 42px;
  }
  .particle {
    left: 173px;
    top: 86px;
  }
`;
export const Treasure5 = styled(Treasure)`
  width: 503px;
  height: 300px;
  .title1 {
    left: 136px;
  }
  .title2 {
    left: 84px;
    top: 58px;
  }
  .td5 {
    position: absolute;
    left: 206px;
    top: 35px;
  }
  .pac {
    position: absolute;
    left: 16px;
    top: 100px;
    z-index: 2;
  }
  .ring {
    position: absolute;
    left: 223px;
    top: 88px;
    z-index: 1;
  }
`;

export const Title = styled.div`
  position: absolute;
  color: #ebf479;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 26px */
`;
export const Desc = styled.div``;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ebf479;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const ModalDesc = styled.div`
  color: white;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
  .bold {
    color: #ebf479;
  }
`;
export const ModalIconGroup = styled.div`
  display: flex;
`;
export const ModalBody = styled.div`
  .modal-body-1 {
    display: flex;
    gap: 60px;
  }
  .modal-body-2 {
    display: flex;
    gap: 26px;
    .step {
      color: #ebf479;
      text-align: center;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
    }
    .desc {
      color: #ebf479;
      text-align: center;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .modal-sec-1 {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    align-items: center;
    background-color: #000000;
    padding: 54px 0 37px;
  }
  .modal-sec-2 {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    padding: 14px 0 50px;
  }
  .coin-title {
    margin-top: 13px;
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 20px */
  }
  .coin-group {
    display: flex;
    align-items: baseline;
  }
  .tags {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 20px auto 30px;
  }
  .prep {
    padding: 6px 14px;
    border: 1px solid #363940;
    color: #979abe;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
  }
  .points {
    padding: 6px 14px;
    border-radius: 4px;
    background: #fa0;
    color: #000;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
  }

  .modal-list {
    padding: 19px 25px;
    background-color: #000;
    margin-bottom: 20px;
  }
  .modal-list-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head-left {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }
    .head-title {
      color: #ebf479;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
    }
    .tag-thr {
      /* width: 156px; */
      height: 36px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background: #252525;
      margin-left: 7px;
    }
    .tag-juice {
      /* width: 92px; */
      height: 36px;
      gap: 5px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background: #252525;
      margin-left: 7px;
    }
  }
  .tag-points {
    padding: 0 5px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #3d405a;
    color: #979abe;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
  }
  .coin-pairs {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 14px 0;
    .pairs {
    }
    .txt {
      color: #fff;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 19.2px */
    }
  }
  .tag-coins {
    padding: 0 7px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #3d405a;
    color: #979abe;
    text-align: center;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
  }
  .modal-list-body {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    .body-left {
      .lp-img {
        margin-left: -18px;
      }
      flex-grow: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      .body-left-content {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
      .body-left-content-title {
        color: #fff;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
      }
      .body-left-content-desc {
        color: #979abe;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
      }
    }
  }
`;
export const ModalList = styled.div``;
export const ModalSection = styled.div``;
