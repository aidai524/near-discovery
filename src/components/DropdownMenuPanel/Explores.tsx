import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { IdToPath } from '@/config/all-in-one/chains';
import { QUEST_PATH } from '@/config/quest';
import { useChainsStore } from '@/stores/chains';
import { get } from '@/utils/http';
import useCategoryDappList from '@/views/Quest/hooks/useCategoryDappList';

import {
  StyledExplore,
  StyledExploreDesc,
  StyledExploreItem,
  StyledExploreItems,
  StyledExplores,
  StyledExploreTitle,
} from './styles';

const Explore = ({ title, desc, items, link, loading, onLinkClick, onItemClick }: any) => {
  const mergedItems = useMemo(() => {
    if (!items.length) return [];
    if (items.length < 5) return items;
    return items.slice(0, 3);
  }, [items]);
  return (
    <StyledExplore>
      <div>
        <StyledExploreTitle>{title}</StyledExploreTitle>
        <StyledExploreDesc>{desc}</StyledExploreDesc>
        <StyledExploreItems>
          {mergedItems?.map((item: any, index: number) => {
            return (
              <StyledExploreItem
                key={index}
                onClick={() => {
                  onItemClick(item);
                }}
                data-bp="30011-001"
              >
                {item.name}
              </StyledExploreItem>
            );
          })}
          {loading && (
            <>
              {[1, 2].map((item) => (
                <StyledExploreItem key={item}>
                  <Skeleton height="24px" containerClassName="skeleton" />
                </StyledExploreItem>
              ))}
            </>
          )}
          {items.length > 4 && (
            <StyledExploreItem
              onClick={() => {
                onItemClick();
              }}
            >
              ...
            </StyledExploreItem>
          )}
        </StyledExploreItems>
      </div>
      <Link href={link} onClick={onLinkClick} className="explore-link" data-bp="30011-001">
        <div className="content-item-arrow">
          <ArrowIcon />
        </div>
      </Link>
    </StyledExplore>
  );
};

const Explores = ({ setShow }: any) => {
  const { loading, categories } = useCategoryDappList();
  const chains = useChainsStore((store: any) => store.chains);
  const [quests, setQuests] = useState<any[]>([]);
  const [questLoading, setQuestLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const fetchQuests = async () => {
      setQuestLoading(true);
      try {
        const result = await get(`${QUEST_PATH}/api/quest/campaign_list`);
        setQuests(result.data || []);
        setQuestLoading(false);
      } catch (error) {
        console.error('Error fetching quests data:', error);
        setQuestLoading(false);
      }
    };
    fetchQuests();
  }, []);
  return (
    <StyledExplores>
      <Explore
        title="Explore dApps"
        desc="Filter by network, token, and main features."
        items={Object.values(categories || {})}
        link="/alldapps"
        loading={loading}
        onItemClick={(item: any) => {
          setShow(false);
          if (item) {
            router.push({
              pathname: '/alldapps',
              query: { category: item.id },
            });
          } else {
            router.push('/alldapps');
          }
        }}
        onLinkClick={() => {
          setShow(false);
        }}
      />
      <Explore
        title="Explore Layer-2s"
        desc="Discover the latest and most popular Layer-2 networks."
        items={chains}
        link="/blockchains"
        onItemClick={(item: any) => {
          setShow(false);
          if (item) {
            router.push(`/network/${IdToPath[item.id]}`);
          } else {
            router.push('/blockchains');
          }
        }}
        onLinkClick={() => {
          setShow(false);
        }}
      />
      <Explore
        title="Explore Quests"
        desc="Participate and discover a range of different quests across Layer-2s."
        items={quests}
        link="/quest/leaderboard"
        loading={questLoading}
        onItemClick={(item: any) => {
          setShow(false);
          // console.log(item);
          if (item.category === 'Shush') {
            router.push({
              pathname: '/shush',
              query: { questId: item.id },
            });
            return;
          }
          if (item) {
            router.push(`/quest/leaderboard/${item.name.replaceAll(' ', '')}`);
          } else {
            router.push('/quest/leaderboard');
          }
        }}
        onLinkClick={() => {
          setShow(false);
        }}
      />
    </StyledExplores>
  );
};

export default memo(Explores);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M10.2929 28.2929C9.90237 28.6834 9.90237 29.3166 10.2929 29.7071C10.6834 30.0976 11.3166 30.0976 11.7071 29.7071L10.2929 28.2929ZM29 12C29 11.4477 28.5523 11 28 11L19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13L27 13L27 21C27 21.5523 27.4477 22 28 22C28.5523 22 29 21.5523 29 21L29 12ZM11.7071 29.7071L28.7071 12.7071L27.2929 11.2929L10.2929 28.2929L11.7071 29.7071Z"
      fill="#979ABE"
    />
    <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" stroke="#979ABE" strokeOpacity="0.3" />
  </svg>
);
