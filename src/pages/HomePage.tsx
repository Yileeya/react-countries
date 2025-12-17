import React, { useState } from 'react';
import { useFilteredCountries } from '@hooks/country/useFilteredCountries.ts';
import { useStickyObserver } from '@hooks/shared/useStickyObserver.ts';
import type { iCountryShort, tRegion } from '@/types/country';
import CountryCard from '@components/country/CountryCard.tsx';
import SearchInput from '@components/country/SearchInput.tsx';
import RegionSelect from '@components/country/RegionSelect.tsx';
import NoDataMessage from '@components/ui/NoDataMessage.tsx';
import CountryCardGridSkeleton from '@components/country/CountryCardGridSkeleton.tsx';

const HomePage: React.FC = () => {
  const { ref, isSticky } = useStickyObserver({
    offsetDesktop: 10,
    offsetMobile: 10,
  });

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [region, setRegion] = useState<tRegion>('All'); // 預設篩選 'All'

  const {
    data: countries,
    isError,
    error,
    isLoading,
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
    <div className="mx-auto pt-6 md:max-w-[688px] md:pt-12 xl:max-w-[1272px]">
      <div ref={ref} className="h-px" />
      <div
        className={`sticky top-[96px] z-20 mb-9 flex flex-wrap items-center justify-between gap-x-2 gap-y-10 rounded-[5px] transition-all duration-300 ease-in-out md:mb-12 ${isSticky ? 'rounded-lg bg-white/95 p-2.5 shadow-lg backdrop-blur-sm md:px-6 md:py-4 dark:bg-blue-950/95' : 'bg-transparent'}`}
      >
        <SearchInput value={searchTerm} onChange={setSearchTerm} />
        <RegionSelect value={region} onChange={setRegion} />
      </div>

      {isLoading ? (
        <CountryCardGridSkeleton />
      ) : !countries?.length ? (
        <NoDataMessage
          title="No countries found"
          description="Try changing the region or search keyword."
        />
      ) : (
        <div className="grid grid-cols-1 justify-items-center gap-500 md:grid-cols-2 md:gap-900 xl:grid-cols-4 xl:justify-items-start">
          {countries.map((country: iCountryShort) => (
            <CountryCard country={country} key={country.cca3} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
