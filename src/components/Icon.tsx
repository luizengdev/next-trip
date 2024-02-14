import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type IconProps = {
  path: string;
  name: string;
  alt: string;
  href: string;
};

const Icon: FC<IconProps> = ({ path, name, alt, href }) => {
  return (
    <Link href={href} className="flex flex-col items-center gap-2">
      <Image
        src={path}
        width={35}
        height={35}
        alt={alt}
        className="hover:scale-110 transition-all"
      />
      <span className="text-GrayPrimaryLighter hover:text-primary lg:text-base">
        {name}
      </span>
    </Link>
  );
};

export default Icon;
