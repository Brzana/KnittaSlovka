import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function IconCarousele() {
    return (
        <div>
            <div className="flex gap-8">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <Facebook
                        size={48}
                        className="text-[#8e5f3c] transition-colors group-hover:text-[#d19c6c]"
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <Instagram
                        size={48}
                        className="text-[#8e5f3c] transition-colors group-hover:text-[#d19c6c]"
                    />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <Linkedin
                        size={48}
                        className="text-[#8e5f3c] transition-colors group-hover:text-[#d19c6c]"
                    />
                </a>
            </div>
        </div>
    );
}
