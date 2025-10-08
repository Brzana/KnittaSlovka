"use client";

import Image from "next/image";

import icon from "../../public/icon.png";
import Link from "next/link";

export default function Logo() {
    const handleOnClick = () => {
        <Link href="/"></Link>;
    };

    return (
        <button onClick={handleOnClick}>
            <Image src={icon} alt="Logo" width={100} height={100} />
        </button>
    );
}
