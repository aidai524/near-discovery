import { useState } from 'react';
import styled from 'styled-components';

import { VmComponent } from '@/components/vm/VmComponent';

import LendingTable from '../LendingTable';

const RewardsTable = styled.div`
  background-color: var(--agg-secondary-color, rgba(53, 55, 73, 0.2));
  border: 1px solid var(--agg-border-color);
  margin-top: 20px;
  border-radius: 6px;
`;
const Title = styled.div`
  padding: 12px 20px;
  color: #979abe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 1px solid var(--agg-border-color, #292c42);
`;

const NoReward = styled.div`
  margin: 28px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

interface IProps {
  dapps: any;
  toast: any;
  account?: string;
  onSuccess: any;
  supplies: any;
  data: any;
}

const LendingRewardsTable = (props: IProps) => {
  const { dapps, toast, account, onSuccess, supplies } = props;

  const [state, setState] = useState<any>({
    loading: false,
    dapp: null,
    market: null,
    toastId: null
  });

  const columns =
    Object.keys(dapps)[0] === 'Valas Finance'
      ? [
          {
            type: 'name',
            width: '25%',
            name: 'Asset'
          },
          {
            type: 'market',
            width: '25%',
            name: 'Market'
          },
          {
            type: 'total',
            key: 'unclaimed',
            width: '25%',
            name: 'Rewards'
          },
          { type: 'button', width: '25%' }
        ]
      : [
          {
            type: 'name',
            width: '20%',
            name: 'Asset'
          },
          {
            type: 'market',
            width: '25%',
            name: 'Market'
          },
          {
            type: 'total',
            key: 'dailyReward',
            width: '20%',
            name: 'Daily Rewards'
          },
          {
            type: 'total',
            key: 'unclaimed',
            width: '20%',
            name: 'Unclaimed'
          },
          { type: 'button', width: '10%' }
        ];

  const handleButtonClick = (record: any) => {
    const toastId = toast?.loading({
      title: `Claiming rewards...`
    });
    setState((prevState: any) => ({
      ...prevState,
      dapp: dapps[record.dappName],
      market: record,
      loading: true,
      toastId
    }));
  };

  return (
    <>
      <RewardsTable>
        <Title>Your Earns</Title>
        <LendingTable
          totalReverse={true}
          columns={columns}
          emptyTips={
            <NoReward>
              <div>{`You don't have unclaimed rewards`}</div>
              <div style={{ fontSize: '18px' }}>$0.00</div>
            </NoReward>
          }
          data={props.data}
          buttons={[
            {
              text: 'Claim',
              loading: (record: any) => record.symbol === state.market?.symbol && state.loading
            }
          ]}
          onButtonClick={handleButtonClick}
          rowExpanded={false}
        />
      </RewardsTable>
      {state.dapp && state.market && (
        <VmComponent
          src={state.dapp.handlerClaim}
          props={{
            supplies,
            loading: state.loading,
            market: state.market,
            dapp: state.dapp,
            record: state.market,
            account,
            onSuccess: () => {
              toast?.dismiss(state.toastId);
              setState((prevState: any) => ({
                ...prevState,
                loading: false,
                market: null
              }));
              toast?.success({ title: 'Claimed successfully!' });
              onSuccess?.(state.dapp);
            },
            onError: (err: any) => {
              console.log('Claimed error: %o, state: %o', err, state);
              toast?.dismiss(state.toastId);
              setState((prevState: any) => ({
                ...prevState,
                loading: false,
                market: null
              }));
              toast?.fail({
                title: err?.message?.includes('user rejected transaction')
                  ? 'User rejected transaction'
                  : `Claim failed!`
              });
            }
          }}
        />
      )}
    </>
  );
};

export default LendingRewardsTable;
