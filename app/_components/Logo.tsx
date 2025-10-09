"use client";

import Image from "next/image";

import icon from "../../public/icon.png";
import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();

    const handleOnClick = () => {
        router.push("/");
    };

    return (
        <button className="cursor-pointer" onClick={handleOnClick}>
            <Image src={icon} alt="Logo" width={80} height={80} />
        </button>
    );
}
