interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

const Logo = ({ variant = 'header', className = '' }: LogoProps) => {
  const isFooter = variant === 'footer';

  return (
    <img
      src="/logos/master_electrician_logo.jpeg"
      alt="Master Electrician"
      className={`block w-auto object-contain rounded-xl ${
        isFooter ? 'h-12 shadow-md' : 'h-14 shadow-sm ring-1 ring-gray-200/60'
      } ${className}`}
    />
  );
};

export default Logo;
