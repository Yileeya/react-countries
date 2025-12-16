import { useQuery } from '@tanstack/react-query';
import { getBorderCountriesByCodes } from '@api/countryService.ts';
import type { iBorderCountry } from '@/types/country.ts';

/**
 * Custom Hook: useBorderCountriesQuery
 * 根據一組 CCA3 代碼 (鄰國代碼) 獲取對應的國家名稱。
 * 這是Detail Page的「依賴查詢」，它必須依賴主查詢的結果。
 * * @param {string[] | undefined} borderCodes - 鄰國的 CCA3 代碼列表
 */
export const useBorderCountriesQuery = (borderCodes: string[] | undefined) => {
  const hasBorderCodes = !!borderCodes && borderCodes.length > 0;

  const queryKey = ['borderCountries', borderCodes];

  return useQuery<iBorderCountry[], Error>({
    queryKey: queryKey,
    queryFn: () => getBorderCountriesByCodes(borderCodes!),
    enabled: hasBorderCodes,
  });
};
