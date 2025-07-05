import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={`${getImagePrefix()}images/logo/bridge-logo.png`}
        alt="Bridge Logo"
        width={240}
        height={60}
        className="w-40 h-10 object-contain"
        priority
      />
      <span className="text-midnight_text font-bold text-2xl"></span>
    </Link>
  );
};

export default Logo;
