import { ethers } from 'ethers';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import popupsData, { IdToPath } from '@/config/all-in-one/chains';
import chains from '@/config/chains';
import { QUEST_PATH } from '@/config/quest';
import { ethereum } from '@/config/tokens/ethereum';
import { useDefaultLayout } from '@/hooks/useLayout';
import { get } from '@/utils/http';
import type { NextPageWithLayout } from '@/utils/types';

const blueBg = (
  <svg width="719" height="719" viewBox="0 0 719 719" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6" filter="url(#filter0_f_513_4283)">
      <circle cx="359.5" cy="359.5" r="159.5" fill="#1868B3" />
    </g>
    <defs>
      <filter
        id="filter0_f_513_4283"
        x="0"
        y="0"
        width="719"
        height="719"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_513_4283" />
      </filter>
    </defs>
  </svg>
);
const yellowBg = (
  <svg width="628" height="570" viewBox="0 0 628 570" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4" filter="url(#filter0_f_513_4284)">
      <circle cx="314" cy="256" r="114" fill="#EBF479" />
    </g>
    <defs>
      <filter
        id="filter0_f_513_4284"
        x="0"
        y="-58"
        width="628"
        height="628"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_513_4284" />
      </filter>
    </defs>
  </svg>
);
const arrow = (
  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4L1 7" stroke="#979ABE" strokeLinecap="round" />
  </svg>
);
const diagonaltop = 'https://assets.dapdap.net/images/bafkreiewy27itzs3bq2et7bxmnv3dlt6rtwofiszkms3baroobjqq6wh5a.svg';
const BlockchainsPage = styled.div`
  color: #ffffff;
  padding: 50px 12% 80px 12%;
  position: relative;
`;

const BreadCrumbs = styled.div`
  color: #979abe;
  font-size: 14px;
  margin-bottom: -4%;
  margin-left: -4%;
  a {
    text-decoration: none;
    color: #979abe;
    display: inline-block;
    cursor: pointer;
  }
  svg {
    margin: 0 8px;
  }
  span {
    color: #ffffff;
  }
`;

const BlockchainsBanner = styled.div`
  width: 100%;
  height: 448px;
  position: relative;
  background-image: url(/images/chains/blockchains_bg.png);
  background-repeat: no-repeat;
  background-size: 94%;
  background-position-x: 50%;
  background-position-y: 26%;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 12px;
  .yellow-bg {
    position: absolute;
    left: 15%;
    top: -20%;
  }
  .blue-bg {
    position: absolute;
    right: 0;
    @media (max-width: 1556px) {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
  .blockchainsBanner-title {
    color: #ffe7e7;
    h1 {
      font-size: 42px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      margin-top: 12px;
      width: 50%;
    }
  }
`;

const BlockchainsConetent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  /* justify-content: center; */
  a {
    color: #ffffff;
    text-decoration: none;
  }
  .blockchains-conetent-item {
    width: 32%;
    flex-basis: calc(32% - 20px);
    margin-bottom: 30px;
    margin-right: 15px;
    margin-left: 15px;
    background: #21232a;
    border: 1px solid #21232a;
    border-radius: 20px;
    padding: 20px;
    position: relative;
    @media (max-width: 1350px) {
      flex-basis: calc(45% - 20px);
    }
    &:hover {
      border: 1px #ebf479 solid;
      .list-item-bottom {
        display: inline-block;
      }
    }
    .content-item-title {
      display: flex;
      margin-bottom: 18px;
      .item-title-img {
        margin-right: 16px;
        img {
          width: 72px;
          height: 72px;
        }
      }
      .item-title-right {
        h1 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
        }
        p {
          border: 1px solid #373a53;
          background: linear-gradient(0deg, rgba(55, 58, 83, 0.5), rgba(55, 58, 83, 0.5));
          color: #979abe;
          border-radius: 8px;
          padding: 6px 12px;
          font-weight: 500;
          cursor: pointer;
          width: fit-content;
        }
      }
    }
    p {
      color: #979abe;
      font-size: 14px;
      font-weight: 300;
    }
    .body-paragraph {
      width: 100%;
      height: 85px;
      margin-bottom: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .minor-paragraph {
      margin-bottom: 6px;
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 20px;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 4px;
      }
    }
    .minor-paragraph-btn {
      display: flex;
      gap: 10px;
      .paragraph-btn-item {
        cursor: pointer;
        flex: 1;
        border: 1px solid rgba(55, 58, 83, 1);
        background: linear-gradient(0deg, rgba(55, 58, 83, 0.5), rgba(55, 58, 83, 0.5));
        font-family: Gantari;
        font-size: 16px;
        font-weight: 500;
        border-radius: 12px;
        padding: 12px 0;
        text-align: center;
        &:hover {
          background: linear-gradient(180deg, #eef3bf 0%, #e9f456 100%);
          color: rgba(30, 32, 40, 1);
        }
        @media (max-width: 1478px) {
          font-size: 14px;
        }
      }
    }
  }
  .conetent-item-img {
    padding: 0;
    background-color: transparent;
    border: none;
    position: relative;
    overflow: hidden;
    /* @media (min-width: 1556px) {
     text-align: center;
      img {
        width: auto!important;
      }
    } */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      border: none;
    }
  }
`;

const BlockchainsColumn: NextPageWithLayout = () => {
  const [networkList, setNetworkList] = useState<any[]>([]);
  const [advertise, setAdvertise] = useState<any>([]);
  const popupsDataArray = Object.values(popupsData);
  useEffect(() => {
    const fetchNetworkData = async () => {
      try {
        const resultNetwork = await get(`${QUEST_PATH}/api/network/list`);
        setNetworkList(resultNetwork.data || []);
      } catch (error) {
        console.error('Error fetching resultNetwork data:', error);
      }
    };
    const fetchAdvertiseasync = async () => {
      try {
        const response = await get(`${QUEST_PATH}/api/ad?category=networks`);
        setAdvertise(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchNetworkData();
    fetchAdvertiseasync();
  }, []);

  const addMetaMask = async ({
    index,
    chainId,
    chainName,
    rpcUrls,
  }: {
    index: number;
    chainId: number;
    chainName: string;
    rpcUrls: string[];
  }) => {
    const etherProvider = new ethers.providers.Web3Provider(window.ethereum);

    etherProvider
      .send('wallet_switchEthereumChain', [{ chainId: `0x${Number(chainId).toString(16)}` }])
      .catch((err) => {
        const chain = {
          chainId: `0x${Number(chainId).toString(16)}`,
          chainName: chainName,
          rpcUrls: rpcUrls,
        };

        if (err.code === 4902) {
          etherProvider.send('wallet_addEthereumChain', [chain]);
        }
      });
  };
  return (
    <BlockchainsPage>
      <BreadCrumbs>
        <Link href="/">Home</Link>
        {arrow}
        <span>L2 Blockchains</span>
      </BreadCrumbs>
      <BlockchainsBanner>
        <div className="blue-bg">{blueBg}</div>
        <div className="yellow-bg">{yellowBg}</div>
        <div className="blockchainsBanner-title">
          <h1>List of L2 Blockchains</h1>
          <p>
            Discover L2s Blockchains across the most popular web3 ecosystems. Also explore related collections including
            L1s, Sidechains, Testnets.
          </p>
        </div>
      </BlockchainsBanner>

      <BlockchainsConetent>
        {networkList &&
          networkList.map((child, index) => {
            const matchedItem = popupsDataArray.find((item) => item.chainId === child.chain_id);
            const path = matchedItem ? matchedItem.path : '';
            return (
              <>
                <div key={index} className="blockchains-conetent-item">
                  <div className="content-item-title">
                    <div className="item-title-img">
                      <img src={child.logo} alt="" />
                    </div>
                    <div className="item-title-right">
                      <h1>{child.name}</h1>
                      <p
                        onClick={() =>
                          addMetaMask({
                            index,
                            chainId: child.chain_id,
                            chainName: child.name,
                            rpcUrls: child.rpc,
                          })
                        }
                        data-bp="10012-001"
                      >
                        Add to MetaMask <img src={diagonaltop} alt="" />
                      </p>
                    </div>
                  </div>
                  <p className="body-paragraph">{child.description}</p>
                  <p className="minor-paragraph">Technology</p>
                  <h3>{child.technology || '-'}</h3>
                  <p className="minor-paragraph">Native Token</p>
                  <h3>
                    {child.tbd_token === 'Y' ? (
                      'TBD🔥'
                    ) : (
                      <>
                        {JSON.parse(child.native_currency).logo && (
                          <img src={JSON.parse(child.native_currency).logo} alt="" />
                        )}
                        {JSON.parse(child.native_currency).name}
                      </>
                    )}
                  </h3>
                  <div className="minor-paragraph-btn">
                    <Link href={`/network/${IdToPath[child.id]}`} data-bp="10012-002" className="paragraph-btn-item">
                      Detail
                    </Link>
                    <Link href={`/all-in-one/${path}`} data-bp="10012-003" className="paragraph-btn-item">
                      Navigation
                    </Link>
                    {child.deepdive && (
                      <Link href={`/onboarding/${path}`} data-bp="10012-004" className="paragraph-btn-item">
                        Onboarding
                      </Link>
                    )}
                  </div>
                </div>
                {index === 4 && (
                  <>
                    {advertise?.ad_link && (
                      <Link
                        data-bp="10012-005"
                        href={advertise?.ad_link}
                        className="blockchains-conetent-item conetent-item-img"
                      >
                        <img src={advertise?.ad_images} alt="" />
                      </Link>
                    )}
                  </>
                )}
              </>
            );
          })}
      </BlockchainsConetent>
    </BlockchainsPage>
  );
};

BlockchainsColumn.getLayout = useDefaultLayout;

export default BlockchainsColumn;
