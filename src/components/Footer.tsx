import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-2 justify-center flex flex-col items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/logo-no-bg.png" width={50} height={32} alt="Logo" />
          <h1 className="text-primary text-xl font-semibold">Next Trip</h1>
        </div>
      </Link>

      <p className="text-sm font-medium mt-1 text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
