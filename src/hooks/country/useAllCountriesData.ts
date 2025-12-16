import { useQuery } from '@tanstack/react-query';
import { getCountries } from '@api/countryService.ts';
import type { iCountryShort } from '@/types/country.ts';

/**
 * Custom Hook: useAllCountriesData
 * 專門用於獲取並緩存「所有國家」的列表。
 * 這個 Hook 應該只在應用程式生命週期中執行一次，以優化搜尋性能。
 */
export const useAllCountriesData = () => {
  const queryKey = ['allCountriesList'];

  return useQuery<iCountryShort[], Error>({
    queryKey: queryKey,
    queryFn: () => getCountries(),

    staleTime: 1000 * 60 * 60 * 24, // 24 小時內數據都視為新鮮
    gcTime: 1000 * 60 * 60 * 24 * 7, // 緩存 7 天
  });
};
