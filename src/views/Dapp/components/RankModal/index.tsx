import Modal from '@/components/Modal';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Close from '@/components/Icons/Close';
import { balanceShortFormated } from '@/utils/balance';
import { columns } from './config';
import Rank from './Rank';
import User from './User';
import Loading from './Loading';
import useDappRank from '../../hooks/useDappRank';
import useUserInfo from '@/hooks/useUserInfo';
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledLogo,
  StyledHeaderRight,
  StyledContent,
  StyledDesc,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledCurrentRank,
} from './styles';

export default function RankModal({ dapp, show, onClose }: any) {
  const { loading, ranks, user, queryRank } = useDappRank();
  const { userInfo } = useUserInfo();

  useEffect(() => {
    if (dapp?.id && show) {
      queryRank(dapp.id);
    }
  }, [dapp, show]);

  return ReactDOM.createPortal(
    <Modal
      display={show}
      showHeader={false}
      width={680}
      content={
        <>
          <StyledHeader>
            <StyledLogoWrapper>
              <StyledLogo src={dapp.logo} />
              <div>{dapp.name}</div>
            </StyledLogoWrapper>
            <StyledHeaderRight>
              {/* <div>Last updated: 2024/5/15 13:00:00 (UTC)</div> */}
              <Close onClose={onClose} />
            </StyledHeaderRight>
          </StyledHeader>
          <StyledContent>
            <StyledDesc>
              The Swing X Ring Exchange X DapDap Galxe campaign is underway! Stay updated with your real-time ranking
              every 15 minutes and enhance your trading volume to achieve more rewards.
            </StyledDesc>
            <StyledTable>
              <StyledTableHeader>
                {columns.map((column) => (
                  <div
                    style={{
                      width: column.width,
                    }}
                    key={column.key}
                  >
                    {column.label}
                  </div>
                ))}
              </StyledTableHeader>
              {loading && <Loading rows={3} />}
              {ranks.map((record: any, i: number) => (
                <StyledTableRow key={i}>
                  {columns.map((column) => (
                    <div
                      style={{
                        width: column.width,
                      }}
                      key={column.key}
                    >
                      {column.key === 'rank' && <Rank rank={record.rank} />}
                      {column.key === 'account' && <User account={record.account} />}
                      {column.key === 'trading_volume' && (
                        <div style={{ textAlign: 'right' }}>${balanceShortFormated(record[column.key], 1)}</div>
                      )}
                    </div>
                  ))}
                </StyledTableRow>
              ))}
            </StyledTable>
            <StyledCurrentRank>
              <div>Your current rank</div>
              <StyledTable style={{ marginTop: 10 }}>
                {loading && <Loading rows={1} rowStyle={{ padding: '0px' }} />}
                {!loading && (
                  <StyledTableRow style={{ padding: '0px' }}>
                    {!user
                      ? 'You have no trading volume yet. Join now to start earning rewards!'
                      : columns.map((column) => (
                          <div
                            style={{
                              width: column.width,
                            }}
                            key={column.key}
                          >
                            {column.key === 'rank' && <Rank rank={user.rank} />}
                            {column.key === 'account' && (
                              <User
                                account={{
                                  avatar: userInfo.avatar,
                                  address: userInfo.address,
                                }}
                              />
                            )}
                            {column.key === 'trading_volume' && (
                              <div style={{ textAlign: 'right' }}>${balanceShortFormated(user.trading_volume, 1)}</div>
                            )}
                          </div>
                        ))}
                  </StyledTableRow>
                )}
              </StyledTable>
            </StyledCurrentRank>
          </StyledContent>
        </>
      }
    />,
    document.body,
  ) as JSX.Element;
}
