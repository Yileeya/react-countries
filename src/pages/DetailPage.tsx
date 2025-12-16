import { useParams } from 'react-router-dom';
import { useCountryDetailQuery } from '@hooks/useCountryDetail';
import { useBorderCountriesQuery } from '@hooks/useBorderCountries';
import NoDataMessage from '@components/NoDataMessage.tsx';
import RouterButton from '@components/RouterButton.tsx';
import StickyBackButton from '@components/StickyBackButton.tsx';
import CountryDetailSkeleton from '@components/skeletons/CountryDetailSkeleton.tsx';

const stickyContainerClasses =
  'mx-auto max-w-[320px] md:max-w-[570px] xl:max-w-[1278px]';

const DetailPage: React.FC = () => {
  const { cca3Code } = useParams<{ cca3Code: string }>();

  // 主查詢：獲取國家詳細資訊
  const {
    data: country,
    isError: isCountryError,
    isLoading: isCountryLoading,
  } = useCountryDetailQuery(cca3Code);

  // 依賴查詢：獲取鄰國名稱(只有在主查詢成功且 country.borders 存在時，才會執行)
  const { data: borderCountries, isLoading: isBorderLoading } =
    useBorderCountriesQuery(country?.borders);

  if (isCountryLoading) {
    return (
      <div className="relative mx-auto py-10 md:py-20 xl:max-w-[1278px]">
        <StickyBackButton
          to="/"
          extraTopDesktop={60}
          extraTopMobile={16}
          className={`top-[120px] mb-10 xl:top-[160px] ${stickyContainerClasses}`}
        />
        <CountryDetailSkeleton />
      </div>
    );
  } else if (isCountryError || !country) {
    return (
      <div className="relative mx-auto py-10 md:py-20 xl:max-w-[1278px]">
        <StickyBackButton
          to="/"
          extraTopDesktop={60}
          extraTopMobile={16}
          className={`top-[120px] mb-10 xl:top-[160px] ${stickyContainerClasses}`}
        />
        <NoDataMessage
          title="Failed to Load Country Details"
          description={`Could not fetch country details for code: ${cca3Code}`}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto py-10 md:py-10 xl:max-w-[1278px] xl:py-20">
      <StickyBackButton
        to="/"
        extraTopDesktop={60}
        extraTopMobile={16}
        className={`top-[120px] xl:top-[160px] ${stickyContainerClasses}`}
      />

      <div
        className={`mx-auto mt-[64px] mb-5 flex flex-wrap items-center gap-x-[120px] gap-y-[48px] md:my-[56px] md:gap-y-[56px] xl:mt-[80px] xl:gap-y-[0] ${stickyContainerClasses}`}
      >
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="max-h-[229px] w-full rounded-[10px] shadow-[0_0_14px_4px_#00000008] md:max-h-[408px] xl:max-h-[401px] xl:max-w-[560px]"
        />
        <div className="text-grey-950 flex-1 dark:text-white">
          <h1 className="text-2 md:text-1 font-extrabold">
            {country.name.common}
          </h1>
          <div className="mt-4 mb-8 flex flex-wrap justify-between gap-y-8 md:mt-6 md:mb-6 xl:mb-16">
            <div>
              <p
                className="country-info"
                data-size="detail"
                data-label="Native Name"
              >
                {Object.values(country.name.nativeName)[0]?.common ||
                  country.name.common}
              </p>
              <p
                className="country-info"
                data-size="detail"
                data-label="Population"
              >
                {country.population.toLocaleString()}
              </p>
              <p
                className="country-info"
                data-size="detail"
                data-label="Region"
              >
                {country.region}
              </p>
              <p
                className="country-info"
                data-size="detail"
                data-label="Sub Region"
              >
                {country.subregion || '-'}
              </p>
              <p
                className="country-info"
                data-size="detail"
                data-label="Capital"
              >
                {country.capital?.length ? country.capital.join(', ') : '-'}
              </p>
            </div>
            <div>
              <p
                className="country-info"
                data-size="detail"
                data-label="Top Level Domain"
              >
                {country.tld?.length ? country.tld.join(', ') : '-'}
              </p>
              <p
                className="country-info"
                data-size="detail"
                data-label="Currencies"
              >
                {country.currencies
                  ? Object.values(country.currencies)
                      .map(currency => currency.name)
                      .join(', ')
                  : '-'}
              </p>
              <p
                className="country-info"
                data-size="detail"
                data-label="Languages"
              >
                {country.languages
                  ? Object.values(country.languages).join(', ')
                  : '-'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="text-4 leading-6 font-semibold">
              Border Countries:
            </h2>
            <div className="flex flex-wrap gap-4">
              {isBorderLoading ? (
                <p>Loading border countries...</p>
              ) : borderCountries && borderCountries.length > 0 ? (
                borderCountries.map(borderCountry => (
                  <RouterButton
                    key={borderCountry.cca3}
                    to={`/country/${borderCountry.cca3}`}
                    className="text-6 md:text-5 min-h-[28px] min-w-[96px] px-2 py-[2px] shadow-[0_0_4px_1px_#0000001B]"
                  >
                    {borderCountry.name.common}
                  </RouterButton>
                ))
              ) : (
                <p className="text-5 md:text-4 leading-8 font-light">
                  No bordering countries.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
