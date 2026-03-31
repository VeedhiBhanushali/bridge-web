"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const path = usePathname();

  useEffect(() => {
    setIsClient(true);
    setCurrentPath(path);
  }, [path]);

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`font-display font-medium text-16 flex items-center gap-0.5 px-4 py-2.5 rounded-xl transition-colors ${
          isClient && currentPath === item.href
            ? "text-primary bg-primary/10"
            : "text-midnight_text hover:text-primary hover:bg-grey/50"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className="absolute py-2 left-0 mt-1 w-56 bg-white border border-border/50 shadow-xl rounded-xl overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2.5 text-16 transition-colors ${
                isClient && currentPath === subItem.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-midnight_text hover:bg-grey/50 hover:text-primary"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
