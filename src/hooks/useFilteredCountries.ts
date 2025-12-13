import { useMemo } from 'react';
import { useAllCountriesData } from '@/hooks/useAllCountriesData.ts';
import type { iCountryQueryParams, iCountryShort } from '@/types/country.ts';

/**
 * Custom Hook: useFilteredCountries
 * 依賴緩存中的所有國家資料，在前端進行搜尋和地區篩選。
 * @param {iCountryQueryParams} params - 包含 searchTerm (搜尋詞) 和 region (地區) 的參數
 * @returns {object} 包含過濾後數據、isLoading 和錯誤狀態
 */
export const useFilteredCountries = ({
  searchTerm,
  region,
}: iCountryQueryParams) => {
  const {
    data: allCountries,
    isLoading,
    isError,
    error,
  } = useAllCountriesData();

  const filteredCountries: iCountryShort[] = useMemo(() => {
    if (!allCountries) {
      // 如果原始資料還沒載入，則返回空陣列
      return [];
    }

    let result: iCountryShort[] = allCountries;

    // 地區篩選
    if (region && region !== 'All') {
      result = result.filter(country => country.region === region);
    }

    // 搜尋過濾 (Auto-complete)
    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.toLowerCase();

      // 進行大小寫不敏感、包含匹配的過濾
      result = result.filter(country =>
        country.name.common.toLowerCase().includes(normalizedSearchTerm),
      );
    }

    return result;
  }, [allCountries, region, searchTerm]); // 依賴項：所有影響結果的變數

  return {
    data: filteredCountries,
    isLoading,
    isError,
    error,
  };
};
