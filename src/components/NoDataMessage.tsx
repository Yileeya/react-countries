import SearchOffIcon from '@/assets/search-off.svg?react';

interface NoDataMessageProps {
  title?: string;
  description?: string;
}

const NoDataMessage: React.FC<NoDataMessageProps> = ({
  title = 'No results found.',
  description = 'Please try adjusting your filters or search terms.',
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-100 bg-white py-10 text-blue-950 shadow">
      <SearchOffIcon className="mb-4" width={60} height={60} />

      <p className="text-2 font-semibold">{title}</p>
      <p className="text-4">{description}</p>
    </div>
  );
};

export default NoDataMessage;
