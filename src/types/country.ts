export type tRegion =
  | 'All'
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania';

interface iCountryName {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      // 例如：fra, eng
      official: string;
      common: string;
    };
  };
}

export interface iCountryShort {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: iCountryName;
  cca3: string;
  capital: string[];
  region: tRegion;
  population: number;
}

export interface iCountryDetail extends iCountryShort {
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      // 例如：TWD, USD
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[]; //島國如日本，回傳空陣列。
}

export interface iBorderCountry {
  name: iCountryName;
  cca3: string;
}

// 搜尋用
export interface iCountryQueryParams {
  searchTerm: string;
  region: tRegion;
}
