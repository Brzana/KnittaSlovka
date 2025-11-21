// TODO: update social links to actual profiles

export default function Footer() {
    return (
        <footer className="bg-accent2 p-4 text-center">
            <ul className="flex justify-center gap-12">
                {["Instagram", "Facebook", "LinkedIn"].map((item) => (
                    <li
                        key={item}
                        className="hover:text-accent text-text cursor-pointer text-lg transition-colors"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </footer>
    );
}
