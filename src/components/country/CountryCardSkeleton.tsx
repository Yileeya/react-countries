import Skeleton from 'react-loading-skeleton';

export default function CountryCardSkeleton() {
  return (
    <div className="w-[264px] overflow-hidden rounded-[5px] shadow-[0_0_7px_2px_rgba(0,0,0,0.1)]">
      <div className="h-[160px] w-full">
        <Skeleton
          width="100%"
          height="100%"
          containerClassName="h-full block leading-none"
        />
      </div>

      <div className="min-h-[176px] space-y-3 px-6 py-[22px]">
        <Skeleton height={26} width={160} className="mb-4" />

        <Skeleton height={16} width={180} />
        <Skeleton height={16} width={140} />
        <Skeleton height={16} width={120} />
      </div>
    </div>
  );
}
