import Big from 'big.js';
import { useMemo, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 410px;
  height: 347px;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 16px 16px 30px 22px;
  border-radius: 10px;
  background: #1B1D25;
  backdrop-filter: blur(10px);

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
    }

    .tabs {
      width: 137px;
      height: 36px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid #373A53;
      background: #262836;
      padding: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .tab,
      .tab-active {
        width: 64px;
        height: 28px;
        line-height: 28px;
        flex-shrink: 0;
        color: #979ABE;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        border-radius: 8px;
        text-align: center;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: all .3s linear;

        &.active {
          color: #FFF;
        }
      }

      .tab-active {
        background: #3D4159;
        position: absolute;
        z-index: 0;
      }
    }
  }

  .chart-wrapper {
    margin: 25px auto 0;
    width: 240px;
    height: 240px;
    position: relative;

    .pie-tooltip {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;

      .icon {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .name {
        color: #FFF;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        margin-top: 4px;
      }

      .usd {
        color: #FFF;
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        margin-top: 5px;

        .sm {
          font-size: 14px;
        }
      }

      .rate {
        height: 25px;
        flex-shrink: 0;
        margin: 8px auto 0;
        border-radius: 22px;
        border: 1px solid #3D405A;
        background: #1E2028;
        color: #979ABE;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        padding: 0 11px;
      }
    }
  }
`;

const tabs = [
  {
    key: 1,
    label: 'Chain',
  },
  {
    key: 2,
    label: 'dApp',
  },
];

const COLORS = ['#40475e', '#565d75', '#717892', '#9096ad'];

const Distribution = (props: any) => {
  const { chainData, dAppData } = props;

  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const activeTabIndex = useMemo(() => {
    return tabs.findIndex((tab) => tab.key === activeTab);
  }, [activeTab]);
  const [activePie, setActivePie] = useState(0);
  const displayChartData = useMemo(() => {
    if (activeTab === tabs[0].key) return chainData;
    return dAppData;
  }, [chainData, dAppData, activeTab]);

  const handleTab = (tabKey: any) => {
    if (tabKey === activeTab) return;
    setActiveTab(tabKey);
    setActivePie(0);
  };

  const handleChartEnter = (e: any, index: number) => {
    setActivePie(index);
  };

  const calcChartRate = useMemo(() => {
    if (!displayChartData || activePie < 0) return;
    const total = displayChartData
      .map((chain: any) => chain.usd)
      .reduce((a: number, b: number) => Big(a).plus(b).toNumber());
    return Big(displayChartData[activePie].usd).div(total).times(100).toFixed(0);
  }, [displayChartData, activePie]);

  return (
    <StyledContainer>
      <div className="head">
        <div className="title">Assets Distribution</div>
        <div className="tabs">
          <div className="tab-active" style={{ transform: `translateX(${activeTabIndex * 64}px)` }} />
          {
            tabs.map(((tab) => (
              <div
                className={`tab ${activeTab === tab.key ? 'active' : ''}`}
                key={tab.key}
                onClick={() => handleTab(tab.key)}
              >
                {tab.label}
              </div>
            )))
          }
        </div>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={240} height={240}>
            <Pie
              data={displayChartData}
              cx={115}
              cy={115}
              innerRadius={93}
              outerRadius={117}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="usd"
              startAngle={90}
              endAngle={-270}
              onMouseEnter={handleChartEnter}
              cornerRadius={2}
            >
              {displayChartData.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={activePie === index ? '#edf48a' : COLORS[index % COLORS.length]}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pie-tooltip">
          <div className="icon"
               style={{ backgroundImage: `url("https://assets.dapdap.net/images/bafkreib5v3jonanuknj5db5ysuhb6ubowv2pqnopyg3yraknfr3jn7el4u.svg")` }}></div>
          <div className="name">{displayChartData[activePie].name}</div>
          <div className="usd">
            ${displayChartData[activePie].usd?.toString().split('.')[0]}
            <span className="sm">.{displayChartData[activePie].usd?.toString().split('.')[1]}</span>
          </div>
          <div className="rate">{calcChartRate}%</div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Distribution;
