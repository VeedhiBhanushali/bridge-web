import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
      <Image
        src={`${getImagePrefix()}images/logo/bridge-logo.png`}
        alt="Bridge Logo"
        width={364}
        height={96}
        sizes="(max-width: 768px) 160px, 200px"
        className="h-10 w-auto max-w-[200px] object-contain bg-transparent"
        priority
        unoptimized
      />
      <span className="text-midnight_text font-bold text-2xl"></span>
    </Link>
  );
};

export default Logo;
