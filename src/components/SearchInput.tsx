import SearchIcon from '@/assets/magnifier.svg?react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="text-grey-400 relative w-full max-w-[480px]">
      <SearchIcon
        width={18}
        height={18}
        className="absolute top-1/2 left-8 -translate-y-1/2 transform"
      />
      <input
        type="text"
        placeholder="Search for a country…"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="text-6 md:text-5 focus:blue-950 h-[48px] w-full rounded-[5px] bg-white pr-8 pl-[74px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.055)] focus:border-blue-950 focus:ring-2 focus:outline-none md:h-[56px]"
      />
    </div>
  );
};

export default SearchInput;
