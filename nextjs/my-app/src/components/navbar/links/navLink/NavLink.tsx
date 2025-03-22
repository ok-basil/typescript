'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkItem {
  title: string;
  path: string;
}

const NavLink = ({ item }: { item: NavLinkItem }) => {
  const containerStyle: string = 'min-w-[100px] text-center p-[10px] rounded-[20px] font-medium text-center';
  const linkActive: string = 'bg-[#ededed] text-[#0a0a0a!important]';
  const pathName = usePathname();
  return (
    <div>
      <Link href={item.path} className={`${containerStyle} ${pathName === item.path && linkActive}`}>
        {item.title}
      </Link>
    </div>
  )
}

export default NavLink;
