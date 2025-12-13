import React, { useState } from 'react';
import CountryCard from '@components/CountryCard';
import { useFilteredCountries } from '@hooks/useFilteredCountries';
import type { iCountryShort, tRegion } from '@/types/country';

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
    <div>
      <div className="grid grid-cols-1 justify-items-center gap-500 md:grid-cols-2 md:gap-900 xl:grid-cols-4">
        {(countries || []).map((country: iCountryShort) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
