'use client';

import { useRouter, usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // not on the home page, navigate there first
    if (pathname !== '/') {
      // navigate to home page with hash
      router.push(`/#${href}`);
      
      // wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // scroll
      const element = document.getElementById(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <a 
      href={`/#${href}`} 
      onClick={handleClick}
      className={`cursor-pointer hover:opacity-80 transition ${className}`}
    >
      {children}
    </a>
  );
}