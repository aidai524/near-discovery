import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAddLiquidityStore = create(
  persist(
    (set, get: any) => ({
      token0: null,
      token1: null,
      fee: 3000,
      setFee: (fee: number) => set({ fee }),
      getFee: () => get().fee,
      setToken0: (token0: any) => set({ token0 }),
      getToken0: () => get().token0,
      setToken1: (token1: any) => set({ token1 }),
      getToken1: () => get().token1,
    }),
    {
      name: 'import-tokens',
      version: 0.1,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
