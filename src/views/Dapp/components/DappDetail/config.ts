export const relativeOdyssey = [5, 8];

export interface Potential {
  key: string;
  value: string;
  label: string;
}

export const AirdropList: Potential[] = [
  {
    key: 'estimated_date',
    label: 'Estimated date',
    value: '',
  },
  {
    key: 'likelihood',
    label: 'Likelihood',
    value: '',
  },
  {
    key: 'difficulty',
    label: 'Difficulty',
    value: '',
  },
];

export const TABS = [
  {
    key: '1',
    label: 'Overview',
  },
  {
    key: '2',
    label: 'My History',
  }
]


// Polygon zkEVM, zkSync, Linea, Scroll, Blast
export const chainPortfolioShowConfig = [1101, 324, 59144, 534352, 81457];