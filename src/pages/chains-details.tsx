import { ethers } from 'ethers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import popupsData from '@/config/all-in-one/chains';
import { QUEST_PATH } from '@/config/quest';
import useDappOpen from '@/hooks/useDappOpen';
import { useDefaultLayout } from '@/hooks/useLayout';
import { get } from '@/utils/http';
import type { NextPageWithLayout } from '@/utils/types';
import useReport from '@/views/Landing/hooks/useReport';
import useCategoryDappList from '@/views/Quest/hooks/useCategoryDappList';

interface SelectBgProps {
  bgColor: string;
}
const arrow = (
  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4L1 7" stroke="#979ABE" strokeLinecap="round" />
  </svg>
);
const SelectBg: React.FC<SelectBgProps> = ({ bgColor }) => (
  <svg width="1300" height="420" viewBox="0 0 1149 302" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_21_1792)">
      <path d="M574.5 200C367.669 200 200 288.2 200 397L949 397C949 288.2 781.331 200 574.5 200Z" fill={bgColor} />
    </g>
    <defs>
      <filter
        id="filter0_f_21_1792"
        x="0"
        y="0"
        width="1149"
        height="597"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_21_1792" />
      </filter>
    </defs>
  </svg>
);
const arrowyellow = 'https://assets.dapdap.net/images/bafkreieovokoreirgn2zewqmqgddkq4vlaljgvaw6nlqs2psbcq7n3pffi.svg';
const diagonaltop = 'https://assets.dapdap.net/images/bafkreiewy27itzs3bq2et7bxmnv3dlt6rtwofiszkms3baroobjqq6wh5a.svg';
const Dapps = 'https://assets.dapdap.net/images/bafkreifyko6xoxde4srussisqazc3jnyqwqrwvhvphifknq4ybxa4kj7yu.svg';
const DeepDive = 'https://assets.dapdap.net/images/bafkreig4bv3xu73ouxj5x7zt4qlvnnbvgdqzj5oq6te6y7ax4tz2yid2ma.svg';
const Shotcut = 'https://assets.dapdap.net/images/bafkreibexhymj2bp2zhuhlwzcik5o42zg6xvt5i7rbsxcpk7ty7l6mmxum.svg';
const star = 'https://assets.dapdap.net/images/bafkreiduogs6um2scfu53rprwmjjt6f55npfycomoe4za2ve7uucej52vu.svg';
const line = 'https://assets.dapdap.net/images/bafkreia3362z25o4wope7mt3jffallldmtmodasm5crpltkfurnem2wxfe.svg';

const ChainsDetails = styled.div`
  color: #ffffff;
  position: relative;
  padding-bottom: 100px;
`;

const ChainsDetailsTitle = styled.div`
  /* margin: -54px -36px; */
  margin: -54px 0;
  padding: 30px 12% 0 12%;
  width: auto;
  .header-details-body {
    display: flex;
    position: relative;
    .details-body-img {
      overflow: hidden;
      position: absolute;
      z-index: 0;
      bottom: 0;
      img {
        width: 300px;
        position: absolute;
        left: 22%;
        top: 50%;
        opacity: 0.1;
      }
      svg {
        z-index: 0;
        opacity: 0.8;
        width: 80%;
      }
    }
    .details-body-left {
      z-index: 1;
      .body-left-detailed {
        display: flex;
        margin-bottom: 66px;
        img {
          width: 72px;
          height: 72px;
          margin-right: 24px;
        }
        .left-detailed-text {
          h1 {
            font-size: 32px;
            font-weight: 700;
            color: #ffffff;
          }
          p {
            cursor: pointer;
            border: 1px solid #373a53;
            background: linear-gradient(0deg, rgba(55, 58, 83, 0.5), rgba(55, 58, 83, 0.5));
            color: #979abe;
            border-radius: 8px;
            padding: 6px 12px;
            height: 30px;
            line-height: 16px;
            width: fit-content;
            img {
              width: 12px;
              height: 12px;
              margin: 0;
            }
          }
        }
      }
      .left-enter-Dapp {
        display: flex;
        margin-bottom: 30px;
        .enter-Dapp-item {
          background: rgba(22, 24, 29, 0.5);
          border-radius: 8px;
          padding: 8px 27px;
          text-align: center;
          margin-right: 16px;
          width: auto;
          height: 72px;
          p {
            color: #979abe;
            font-size: 14px;
            font-weight: 300;
            margin-bottom: 8px;
          }
          img {
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
          h1 {
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
          }
        }
        .Dapp-item-special {
          background: linear-gradient(180deg, #eef3bf 0%, #e9f456 100%);
          color: #02051e;
          font-size: 16px;
          font-weight: 700;
          line-height: 58px;
        }
      }
    }
    .details-body-right {
      z-index: 1;
      display: flex;
      flex: 1;
      text-align: center;
      justify-content: flex-end;
      position: relative;
      .body-right-btn {
        display: flex;
        .right-btn-item {
          width: 125px;
          height: 46px;
          text-align: center;
          background: linear-gradient(180deg, #eef3bf 0%, #e9f456 100%);
          border-radius: 12px;
          font-size: 16px;
          color: #02051e;
          font-weight: 700;
          line-height: 46px;
          margin-right: 16px;
          img {
            width: 16px;
            height: 16px;
            margin-right: 6px;
          }
          p {
            display: inline-block;
            margin: 0;
          }
        }
      }
      .body-right-img {
        position: absolute;
        bottom: 0;
        /* right: 2%; */
        right: 0;
      }
    }
  }
`;

const ChainsDetailsContent = styled.div`
  display: flex;
  padding: 100px 12%;
  .left-side-substance {
    width: 70%;
    /* margin-right: 86px; */
    padding-right: 86px;
    p {
      font-size: 14px;
      font-weight: 300;
      color: #979abe;
      margin-bottom: 100px;
    }
    .left-milestones-item {
      display: flex;
      .milestones-item-img {
        margin-right: 18px;
        width: 36px;
        text-align: center;
      }
      .milestones-item-text {
        margin-top: 12px;
        a {
          text-decoration: none;
        }
        h2 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }
        p {
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 6px;
        }
        span {
          font-size: 14px;
          font-weight: 300;
          color: #979abe;
          img {
            width: 12px;
          }
        }
      }
    }
  }
  .right-side-substance {
    width: 360px;
    img {
      width: 100%;
    }
  }
`;

const BreadCrumbs = styled.div`
  position: relative;
  z-index: 1;
  color: #979abe;
  font-size: 14px;
  margin-bottom: 30px;
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

const ChainsDetailsHot = styled.div`
  padding: 0 12%;
  .tab-content {
    /* border-bottom: 1px solid #383b48; */
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 100px;
    padding-right: 30px;

    .tab-content-item {
      margin: 30px 20px 0 0;
      border-bottom: 1px solid rgba(38, 40, 47, 1);
      display: flex;
      width: 30%;
      flex-basis: calc(33.3333% - 20px);
      justify-content: space-between;
      box-sizing: border-box;
      .content-item-img {
        /* margin-right: 16px; */
        width: 20%;
        img {
          width: 72px;
          height: 72px;
        }
      }
      .content-item-text {
        /* margin-right: 16px; */
        width: 49%;
        h1 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        p {
          font-size: 14px;
          color: #979abe;
          margin: 6px 0 9px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .content-item-btn {
        width: 22%;
        .item-btn-item {
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          background: linear-gradient(0deg, rgba(55, 58, 83, 0.5), rgba(55, 58, 83, 0.5));
          border: 1px solid #373a53;
          font-size: 14px;
          color: #ffffff;
          padding: 6px 20px;
          text-align: center;
          align-items: center;
          border-radius: 16px;
          margin-bottom: 14px;
          a {
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
      @media (max-width: 1500px) {
        flex-basis: calc(50% - 20px);
        .content-item-img {
          width: 15%;
        }
        .content-item-text {
          width: 60%;
        }
      }
      @media (max-width: 1400px) {
        flex-basis: calc(50% - 20px);
        .content-item-img {
          width: 15%;
        }
        .content-item-text {
          width: 50%;
        }
      }
      @media (max-width: 1200px) {
        flex-basis: calc(100% - 20px);
        .content-item-img {
          width: 15%;
        }
        .content-item-text {
          width: 70%;
        }
      }
    }
  }
`;

const ChainsDetailsActivities = styled.div`
  padding: 0 12%;
  p {
    font-size: 16px;
    font-weight: 400;
    color: #979abe;
    display: inline-block;
  }
  .right-btn-item {
    width: 125px;
    height: 46px;
    text-align: center;
    float: right;
    background: linear-gradient(180deg, #eef3bf 0%, #e9f456 100%);
    border-radius: 12px;
    font-size: 16px;
    color: #02051e;
    font-weight: 700;
    line-height: 46px;
    margin-right: 16px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
    p {
      display: inline-block;
      margin: 0;
      color: #02051e;
    }
  }
  .details-activities-list {
    /* display: flex; */
    .activities-list-item {
      display: inline-block;
      width: 298px;
      height: 136px;
      background: #21232a;
      border-radius: 16px;
      padding: 18px 15px;
      margin-right: 18px;
      margin-bottom: 18px;
      p {
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 30px;
        span {
          color: #979abe;
        }
      }
      h2 {
        font-size: 14px;
        color: #979abe;
        margin-bottom: 12px;
        span {
          color: #ffffff;
        }
      }
      h3 {
        font-size: 14px;
        color: #979abe;
        margin-bottom: 2px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 6px;
          margin-top: -2px;
        }
      }
    }
  }
`;
const Title = styled.div`
  font-family: Gantari;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  display: inline-block;
`;

const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
  .tag-item {
    margin-right: 6px;
    flex-basis: auto;
    border-radius: 30px;
    padding: 2px 8px;
    font-size: 12px;
    display: flex;
  }
  .Swap {
    color: rgba(172, 252, 237, 1);
    border: 1px solid rgba(172, 252, 237, 1);
  }
  .Bridge {
    color: rgba(227, 233, 157, 1);
    border: 1px solid rgba(227, 233, 157, 1);
  }
  .DEX {
    color: rgba(172, 252, 237, 1);
    border: 1px solid rgba(172, 252, 237, 1);
  }
  .Lending {
    color: rgba(173, 255, 181, 1);
    border: 1px solid rgba(173, 255, 181, 1);
  }
  .Liquidity {
    color: #aad6ff;
    border: 1px solid #aad6ff;
  }
  .Staking {
    color: rgba(193, 191, 255, 1);
    border: 1px solid rgba(193, 191, 255, 1);
  }
  .Yield {
    color: rgba(249, 181, 230, 1);
    border: 1px solid rgba(249, 181, 230, 1);
  }
`;

const ChainsDetailsColumn: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>(null);
  const [networkList, setNetworkList] = useState<any[]>([]);
  const [hotDapps, setHotDapps] = useState<any>(null);
  const [activities, setActivities] = useState<any>(null);
  const [matchedItem, setMatchedItem] = useState<any>(null);
  const { categories } = useCategoryDappList();
  const [advertise, setAdvertise] = useState<any>([]);
  const { open } = useDappOpen();
  const categoryArray = Object.values(categories);
  const { handleReport } = useReport();
  function getCategoryNames(dappCategories: any, categoryArray: any[]) {
    const categories = Array.isArray(dappCategories) ? dappCategories : Object.values(dappCategories);
    return categories.map((categoryItem: any) => {
      const categoryId =
        typeof categoryItem === 'object' && categoryItem !== null ? categoryItem.category_id : categoryItem;
      const category = categoryArray.find((c: any) => c.id === categoryId);
      return category && typeof category === 'object' && 'name' in category ? category.name : 'Category not found';
    });
  }
  useEffect(() => {
    const fetchNetworkData = async () => {
      try {
        const resultNetwork = await get(`${QUEST_PATH}/api/network/list`);
        setNetworkList(resultNetwork.data || []);
      } catch (error) {
        console.error('Error fetching resultNetwork data:', error);
      }
    };
    fetchNetworkData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await get(`${QUEST_PATH}/api/network?id=${id}`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    const fetchhotDappsData = async () => {
      if (id) {
        try {
          const response = await get(`${QUEST_PATH}/api/dapp/hot_list?network_id=${id}&size=9`);
          setHotDapps(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    const fetchActivities = async () => {
      if (id) {
        try {
          const response = await get(
            `${QUEST_PATH}/api/action/get-popular-actions-by-network?network_id=${id}&page=1&page_size=10`,
          );
          setActivities(response.data?.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    const fetchAdvertiseasync = async () => {
      if (id) {
        try {
          const response = await get(`${QUEST_PATH}/api/ad?category=network&category_id=${id}`);
          setAdvertise(response.data[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
    fetchhotDappsData();
    fetchActivities();
    fetchAdvertiseasync();
  }, [id]);
  useEffect(() => {
    if (data) {
      const popupsArray = Object.values(popupsData);
      setMatchedItem(popupsArray.find((item) => item.chainId === data.chain_id));
    }
  }, [data, popupsData]);

  const addMetaMask = async ({
    chainId,
    chainName,
    rpcUrls,
  }: {
    chainId: number;
    chainName: string;
    rpcUrls: string[];
  }) => {
    const etherProvider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(222, chainId, chainName, rpcUrls);
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

  const nativeCurrency = useMemo(() => {
    try {
      if (data.native_currency) return JSON.parse(data.native_currency);
    } catch (err) {}
    return {};
  }, [data]);
  const milestonesData = useMemo(() => {
    try {
      if (data.milestones) return JSON.parse(data.milestones);
    } catch (err) {}
    return {};
  }, [data]);

  useEffect(() => {
    if ([4, 6].includes(Number(id))) {
      handleReport('chains-details?id=' + id);
    }
  }, [id]);

  return (
    <ChainsDetails>
      <ChainsDetailsTitle>
        <BreadCrumbs>
          <Link href="/">Home</Link>
          {arrow}
          <Link href="/blockchains">L2 Blockchains</Link>
          {arrow}
          <span>{data && data.name}</span>
        </BreadCrumbs>
        <div className="header-details-body">
          <div className="details-body-img">
            <img src={matchedItem && matchedItem.icon} alt="" />
            <SelectBg bgColor={matchedItem && matchedItem.selectBgColor} />
          </div>
          <div className="details-body-left">
            <div className="body-left-detailed">
              <img src={data && data.logo} alt="" />
              <div className="left-detailed-text">
                <h1>
                  <span>{data && data.name}</span>
                  {/* <Golds>
                    <img src={gold} alt="" />
                    <span>20</span>
                  </Golds> */}
                </h1>
                <p
                  onClick={() =>
                    addMetaMask({
                      chainId: data.chain_id,
                      chainName: data.name,
                      rpcUrls: data.rpc,
                    })
                  }
                >
                  Add to MetaMask <img src={diagonaltop} alt="" />
                </p>
              </div>
            </div>
            <div className="left-enter-Dapp">
              <div className="enter-Dapp-item">
                <p>Technology</p>
                <h1>{data && data.technology}</h1>
              </div>
              <div className="enter-Dapp-item">
                <p>Native Token</p>
                <h1>
                  {data && data.tbd_token === 'Y' ? (
                    'TBD🔥'
                  ) : (
                    <>
                      {nativeCurrency.logo && <img src={nativeCurrency.logo} alt="" />}
                      {nativeCurrency.symbol}
                    </>
                  )}
                </h1>
              </div>
            </div>
          </div>
          <div className="details-body-right">
            <div className="body-right-btn">
              <Link href={`/alldapps?network=${id}`}>
                <div className="right-btn-item">
                  <img src={Dapps} alt="" />
                  <p>dApps</p>
                </div>
              </Link>
              {data && data.deepdive && (
                <Link href="/warmup">
                  <div className="right-btn-item">
                    <img src={DeepDive} alt="" />
                    <p>DeepDive</p>
                  </div>
                </Link>
              )}
              <Link href={`/all-in-one/${matchedItem && matchedItem.path}`}>
                <div className="right-btn-item">
                  <img src={Shotcut} alt="" />
                  <p>Shotcut</p>
                </div>
              </Link>
              {/* <div className="body-right-img">
                <img src={chart} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </ChainsDetailsTitle>

      <ChainsDetailsContent>
        <div className="left-side-substance">
          <Title>Description</Title>
          <p>{data && data.description}</p>
          <Title>Milestones</Title>
          {milestonesData.length > 0
            ? milestonesData.map((item: any, index: number) => (
                <div className="left-milestones-item" key={index}>
                  <div className="milestones-item-img">
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <div>
                      <img src={line} alt="" />
                    </div>
                  </div>
                  <div className="milestones-item-text">
                    <h2>{item.title}</h2>
                    <p>{item.date}</p>
                    {item.url && (
                      <Link href={item.url}>
                        <span>
                          Learn more <img src={arrowyellow} alt="" />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              ))
            : null}
        </div>
        {advertise?.ad_link && (
          <Link href={advertise?.ad_link} className="right-side-substance">
            <img src={advertise?.ad_images} alt="" />
          </Link>
        )}
      </ChainsDetailsContent>

      <ChainsDetailsHot>
        <Title>Hot dApps on {data && data.name}</Title>
        <div className="tab-content">
          {hotDapps &&
            hotDapps.map((dapp: any, index: number) => {
              const categoryNames = getCategoryNames(dapp.category_ids, categoryArray);
              return (
                <div className="tab-content-item" key={index}>
                  <div className="content-item-img">
                    <img src={dapp.logo} alt="" />
                  </div>
                  <div className="content-item-text">
                    <h1>{dapp.name}</h1>
                    <p>{dapp.description}</p>
                    <Tag>
                      {categoryNames.map((categoryName: string, index: number) => (
                        <div className={`tag-item ${categoryName}`} key={index}>
                          {categoryName}
                        </div>
                      ))}
                    </Tag>
                  </div>
                  <div className="content-item-btn">
                    <Link className="item-btn-item" href={`/dapps-details?dapp_id=${dapp.id}`}>
                      Detail
                    </Link>
                    <div
                      className="item-btn-item"
                      onClick={() => {
                        open({ dapp, from: 'alldapps' });
                      }}
                    >
                      dApp
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ChainsDetailsHot>

      {data && data.deepdive && (
        <ChainsDetailsActivities>
          <Title>Activities</Title>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ marginBottom: '0' }}>The most popular actions from other users</p>
            <Link href="/warmup">
              <div className="right-btn-item" style={{ marginRight: 0, marginTop: '-22px' }}>
                <img src={DeepDive} alt="" />
                <p>DeepDive</p>
              </div>
            </Link>
          </div>
          <div className="details-activities-list">
            {activities &&
              activities.slice(0, 4).map((item: any, index: number) => {
                const networkItem = networkList.find((network) => network.id === item.network_id);
                if (!networkItem) {
                  return null;
                }
                return (
                  <div className="activities-list-item" key={index}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.action_title.replace(
                          /\d+/g,
                          (match: string) => `<span style="color: rgba(151, 154, 190, 1);">${match}</span>`,
                        ),
                      }}
                    ></p>
                    <h2>
                      Total Execution <span>{item.count}</span>
                    </h2>
                    <h3>
                      <img src={networkItem.logo} alt="" />
                      {networkItem.name}
                    </h3>
                  </div>
                );
              })}
          </div>
        </ChainsDetailsActivities>
      )}
    </ChainsDetails>
  );
};

ChainsDetailsColumn.getLayout = useDefaultLayout;

export default ChainsDetailsColumn;
