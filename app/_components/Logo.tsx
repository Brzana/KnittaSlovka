import Image from "next/image";

import icon from "@/public/logo.png";

export default function Logo() {
    return <Image src={icon} alt="Logo" width={100} height={100} />;
}
