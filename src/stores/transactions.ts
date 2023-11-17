import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Transaction = {
  icons: string[];
  failed: boolean;
  tx: string;
  handler: string;
  desc: string;
  time: number;
};

export const useTransactionsStore = create(
  persist(
    (set, get: any) => ({
      transactions: [],
      addTransaction: (transaction: Transaction) => {
        const _transactions = get().transactions;
        _transactions.push(transaction);
        set({ _icons: _transactions });
      },
      getTransactions: () => get().transactions,
    }),
    {
      name: 'transactions',
      version: 0.1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
