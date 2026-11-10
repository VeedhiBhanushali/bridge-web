import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="group flex items-center" aria-label="Bridge home">
      <Image
        src="/images/bridge/bridge-logo.png"
        alt="Bridge"
        width={364}
        height={96}
        priority
        className="h-8 w-auto transition group-hover:opacity-80 sm:h-9"
      />
    </Link>
  );
};

export default Logo;
