import type { iCountryShort } from '@/types/country';
import { useNavigate } from 'react-router-dom';

const CountryCard: React.FC<{
  country: iCountryShort;
}> = ({ country }) => {
  const navigate = useNavigate();
  const handleCardClick = (cca3Code: string) => {
    navigate(`/country/${cca3Code}`);
  };

  const { flags, name, capital, region, population } = country;

  return (
    <div
      className="w-[264px] cursor-pointer rounded-[5px] bg-white shadow-[0_0_7px_2px_rgba(0,0,0,0.1)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
      onClick={() => handleCardClick(country.cca3)}
    >
      <img src={flags.png} alt={flags.alt} className="h-[160px] w-full" />
      <div className="text-grey-950 min-h-[176px] px-6 py-[22px]">
        <h3 className="text-3 mb-4 font-extrabold">{name.common}</h3>
        <p className="country-card-info" data-label="Population">
          {population.toLocaleString()}
        </p>
        <p className="country-card-info my-2" data-label="Region">
          {region}
        </p>
        <p className="country-card-info" data-label="Capital">
          {capital?.length ? capital.join(', ') : '-'}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
