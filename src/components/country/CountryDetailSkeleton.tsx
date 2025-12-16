import Skeleton from 'react-loading-skeleton';

export function CountryDetailSkeleton() {
  return (
    <div className="mx-auto mt-[64px] mb-5 flex max-w-[320px] flex-wrap items-center gap-x-[120px] gap-y-[48px] md:my-[56px] md:max-w-[570px] md:gap-y-[56px] xl:mt-[80px] xl:max-w-[1278px] xl:gap-y-[0]">
      <div className="h-[229px] w-full rounded-[10px] md:h-[408px] xl:h-[401px] xl:w-[560px]">
        <Skeleton width="100%" height="100%" containerClassName="h-full" />
      </div>

      <div className="flex-1">
        <Skeleton width={'50%'} height={44} />

        <div className="mt-4 mb-8 flex flex-wrap justify-between gap-y-8 md:mt-6 md:mb-6 xl:mb-16">
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} height={32} width={200} />
            ))}
          </div>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} height={32} width={180} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Skeleton width={160} height={24} />

          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} width={96} height={28} borderRadius={4} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailSkeleton;
