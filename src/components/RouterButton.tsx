import { useNavigate } from 'react-router-dom';

interface RouterButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string; // 父層可選傳入 class
}

const RouterButton: React.FC<RouterButtonProps> = ({
  to,
  children,
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!to) return;
    navigate(to);
  };

  const baseClass = 'theme-primary rounded-[2px] font-light flex justify-center items-center cursor-pointer hover:bg-gray-50 hover:shadow-[0_2px_10px_0_#00000026] dark:hover:bg-blue-900/40  dark:hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.6)]';

  return (
    <button onClick={handleClick} className={`${baseClass} ${className || ''}`}>
      {children}
    </button>
  );
};

export default RouterButton;
