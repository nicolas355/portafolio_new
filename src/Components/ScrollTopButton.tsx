'use client';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
interface Props {
  limit: number;
  right?: number | string | object;
  bottom?: number | string | object;
  translateY?: string;
  accessibilityContent?: string;
}

const ScrollTopButton: React.FC<Props> = ({
  limit,
  right = 10,
  bottom = 10,
  translateY = '30px',
  accessibilityContent = 'Go to top',
}) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScroll = useCallback((): void => {
    if (!hasScrolled && window.scrollY >= limit) {
      setHasScrolled(true);
    } else if (hasScrolled && window.scrollY < limit) {
      setHasScrolled(false);
    }
  }, [limit, hasScrolled]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Link
      className="hidden md:flex z-10 items-center justify-center bg-blue-300 w-16 h-16 rounded-full fixed transition-all ease-in-out right-20 bottom-20 hover:cursor-pointer"
      duration={500}
      offset={-100}
      smooth={true}
      style={{
        opacity: hasScrolled ? 1 : 0,
        pointerEvents: hasScrolled ? 'initial' : 'none',
        transform: !hasScrolled ? `translateY(${translateY})` : '',
      }}
      to="home"
    >
      <Image alt="Scroll top" height={40} src="/arrow.svg" width={40} />
    </Link>
  );
};

export default ScrollTopButton;
