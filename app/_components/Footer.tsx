import Link from "next/link";
import SocialLinks from "../_data/SocialLinks.json";

export default function Footer() {
    const socials = [
        { label: "Instagram", href: SocialLinks.instagram ?? "#" },
        { label: "Facebook", href: SocialLinks.facebook ?? "#" },
        { label: "LinkedIn", href: SocialLinks.linkedin ?? "#" },
    ];

    return (
        <footer className="bg-accent2 p-4 text-center">
            <ul className="flex justify-center gap-12">
                {socials.map(({ label, href }) => (
                    <li key={label}>
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent text-text cursor-pointer text-lg transition-colors"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
