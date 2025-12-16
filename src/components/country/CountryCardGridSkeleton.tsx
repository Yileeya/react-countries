import CountryCardSkeleton from '@components/country/CountryCardSkeleton.tsx';

export default function CountryCardGridSkeleton() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-500 md:grid-cols-2 md:gap-900 xl:grid-cols-4 xl:justify-items-start">
      {Array.from({ length: 8 }).map((_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </div>
  );
}
