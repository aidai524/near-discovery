import { useRouter } from "next/router";
import { memo } from 'react';

import { StyledFlex } from "@/styled/styles";
import AllInOneCardView from '@/views/AllInOne/components/Card';
import { Gradient } from '@/views/AllInOne/components/Gradient';
import AllInOneHeaderView from '@/views/AllInOne/components/Header';
import { useChain } from '@/views/AllInOne/hooks/useChain';
import { StyledBg, StyledContainer, StyledContent } from '@/views/AllInOne/styles';

const AllInOneView = (props: Props) => {
  const { chain } = props;

  const router = useRouter();

  const { currentChain, showComponent, setShowComponent, currentChainMenuList } = useChain(props);

  const handleMenuSelect = (tab: string) => {
    router.push(`/all-in-one/${currentChain.path}/${tab}`);
  };

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

        {
          showComponent && (
            <StyledContent>
              {currentChainMenuList.map((item: any) => {
                return (
                  <AllInOneCardView
                    key={item.tab}
                    title={item.tab}
                    subTitle={item.description}
                    bgColor={currentChain.selectBgColor}
                    style={item.entryCardWidth}
                    path={currentChain.path}
                    onSelect={() => {
                      handleMenuSelect(item.tab.toLowerCase());
                    }}
                  >
                    <item.component chain={currentChain} disabled />
                  </AllInOneCardView>
                );
              })}
            </StyledContent>
          )
        }
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

export default memo(AllInOneView);

interface Props {
  chain: string;
}
