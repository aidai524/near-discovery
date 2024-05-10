import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

import { StyledFlex } from '@/styled/styles';
import AllInOneCardView from '@/views/AllInOne/components/Card';
import AllInOneDetailCardView from '@/views/AllInOne/components/Card/DetailCard';
import { Gradient } from '@/views/AllInOne/components/Gradient';
import AllInOneHeaderView from '@/views/AllInOne/components/Header';
import { useChain } from '@/views/AllInOne/hooks/useChain';
import { StyledBg, StyledContainer, StyledContent, StyledNavList } from '@/views/AllInOne/styles';

import Bridge from '@/views/AllInOne/components/Bridge';
import Lending from '@/views/AllInOne/components/Lending';
import Liquidity from '@/views/AllInOne/components/Liquidity';
import Trade from '@/views/AllInOne/components/Trade';

const AllInOneDetailView = (props: Props) => {
  const { chain, menu } = props;

  const router = useRouter();

  const {
    currentChain,
    showComponent,
    setShowComponent,
    currentChainMenuList,
  } = useChain(props);

  const handleMenuSelect = (tab: string) => {
    router.replace(`/all-in-one/${currentChain.path}/${tab}`);
  };

  const currentMenu = useMemo<any>(() => {
    const defaultMenu = { tab: menu, description: "" };
    if (!currentChain) return defaultMenu;
    if (!currentChain.menuConfig) return defaultMenu;
    const currMenu = Object.values(currentChain.menuConfig).find((it: any) => it.tab === menu);
    return currMenu || defaultMenu;
  }, [menu, currentChain]);

  return (
    <StyledContainer>
      <StyledFlex
        flexDirection="column"
        justifyContent="center"
        className="all-in-one-wrapper"
      >
        <AllInOneHeaderView
          chain={chain}
          currentChain={currentChain}
          handleShowComponent={(visible) => {
            setShowComponent(visible);
          }}
        />

        <StyledContent>
          {
            showComponent && (
              <AllInOneDetailCardView
                key={menu}
                title={menu}
                subTitle={currentMenu.description}
                bgColor={currentChain.selectBgColor}
              >
                {
                  menu === 'Bridge' && (
                    <Bridge chain={currentChain} />
                  )
                }
                {
                  menu === 'Lending' && (
                    <Lending />
                  )
                }
                {
                  menu === 'Liquidity' && (
                    <Liquidity />
                  )
                }
                {
                  menu === 'Trade' && (
                    <Trade chain={currentChain} />
                  )
                }
              </AllInOneDetailCardView>
            )
          }
        </StyledContent>
        <StyledNavList>
          {currentChainMenuList.map((item: any) => {
            return (
              <AllInOneCardView
                type="nav"
                key={item.tab}
                title={item.tab}
                subTitle={item.description}
                bgColor={currentChain.selectBgColor}
                path={currentChain.path}
                onSelect={() => {
                  if (item.tab === menu) return;
                  handleMenuSelect(item.tab);
                }}
              >
                <item.component chain={currentChain} />
              </AllInOneCardView>
            );
          })}
        </StyledNavList>
      </StyledFlex>
      <StyledBg>
        <Gradient
          bgColor={currentChain.selectBgColor}
          width={720}
          height={241}
          rx={280}
          ry={40.5}
        />
      </StyledBg>
    </StyledContainer>
  );
};

export default memo(AllInOneDetailView);

interface Props {
  chain: string;
  menu: string;
}

