import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SitemarkIcon() {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt='logo' width={86} height={19} />
    </Link>
  );
}
