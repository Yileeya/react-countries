import React, { useState } from 'react';
import { useFilteredCountries } from '@hooks/useFilteredCountries';
import type { iCountryShort, tRegion } from '@/types/country';
import CountryCard from '@components/CountryCard';
import SearchInput from '@components/SearchInput.tsx';
import RegionSelect from '@components/RegionSelect.tsx';
import NoDataMessage from '@components/NoDataMessage.tsx';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [region, setRegion] = useState<tRegion>('All'); // 預設篩選 'All'

  const {
    data: countries,
    isError,
    error,
  } = useFilteredCountries({
    searchTerm,
    region,
  });

  if (isError) {
    return (
      <h2 className="text-3 mt-8 rounded-md border border-red-200 bg-red-50 p-6 text-center text-red-700">
        Loading error:{' '}
        {error instanceof Error ? error.message : 'An unknown error occurred'}
      </h2>
    );
  }

  return (
    <div className="mx-auto md:max-w-[688px] xl:max-w-[1272px]">
      <div className="sticky top-0 z-20 my-12 flex flex-wrap items-center justify-between gap-x-2 gap-y-10 bg-white">
        <SearchInput value={searchTerm} onChange={setSearchTerm} />
        <RegionSelect value={region} onChange={setRegion} />
      </div>
      {!countries?.length && (
        <NoDataMessage
          title="No countries found"
          description="Try changing the region or search keyword."
        />
      )}
      <div className="grid grid-cols-1 justify-items-center gap-500 md:grid-cols-2 md:justify-items-center md:gap-900 xl:grid-cols-4 xl:justify-items-start">
        {(countries || []).map((country: iCountryShort) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
