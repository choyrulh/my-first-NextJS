import Link from "next/link";
import React from "react";

interface NavItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const navbar: NavItem[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  return (
    <header className="px-5 h-auto py-3 bg-[#222222]">
      <nav className="">
        <ul className="flex flex-row gap-3">
          {navbar.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <span className="text-white">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
