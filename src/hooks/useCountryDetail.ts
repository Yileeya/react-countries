import { useQuery } from '@tanstack/react-query';
import { getCountryDetails } from '@api/countryService.ts';
import type { iCountryDetail } from '@/types/country.ts';

/**
 * Custom Hook: useCountryDetailQuery
 * 根據 CCA3 代碼獲取單一國家的詳細資料。
 * @param {string | undefined} cca3Code - 國家的 3 字元代碼 (CCA3)，可能來自路由參數
 */
export const useCountryDetailQuery = (cca3Code: string | undefined) => {
  const queryKey = ['countryDetail', cca3Code];

  return useQuery<iCountryDetail, Error>({
    queryKey: queryKey,
    queryFn: () => getCountryDetails(cca3Code!),
    enabled: !!cca3Code, // 當 cca3Code 為真值時才啟用查詢
  });
};
