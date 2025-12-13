import axiosInstance from '@api/axiosInstance';
import type { iCountryShort, iCountryDetail, iBorderCountry } from '@/types/country';

/**
 * 取得所有國家列表 (All Countries List)
 * @returns {Promise<iCountryShort[]>} 國家列表資料
 */
export const getCountries = async (): Promise<iCountryShort[]> => {
    const url = 'all';
    const fields = 'name,population,region,capital,flags,cca3';
    const fieldsQuery = `?fields=${fields}`;

    const { data } = await axiosInstance.get<iCountryShort[]>(`${url}${fieldsQuery}`);
    return data;
};

/**
 * 取得單一國家的詳細資料 (已優化欄位篩選)
 * @param {string} code - 國家的 3 字元代碼 (CCA3)
 * @returns {Promise<iCountryDetail>} 國家詳細資料
 */
export const getCountryDetails = async (code: string): Promise<iCountryDetail> => {
    if (!code) throw new Error('Country code must be provided.');

    const fields = 'name,population,region,capital,flags,cca3,subregion,tld,currencies,languages,borders';
    const query = `?fields=${fields}`;

    const { data } = await axiosInstance.get<iCountryDetail>(`alpha/${code}${query}`);
    return data;
};

/**
 * 取得一組國家代碼對應的名稱 (用於鄰國列表)
 * @param {string[]} codes - 一組國家的 3 字元代碼 (CCA3) 陣列
 * @returns {Promise<iBorderCountry[]>} 鄰國的名稱和代碼
 */
export const getBorderCountriesByCodes = async (codes: string[]): Promise<iBorderCountry[]> => {
    if (!codes || codes.length === 0) return [];

    const codesString = codes.join(',');
    const fields = 'name,cca3';

    const { data } = await axiosInstance.get<iBorderCountry[]>(`alpha?codes=${codesString}&fields=${fields}`);

    return Array.isArray(data) ? data : [];
};
