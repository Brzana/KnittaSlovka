import Logo from "@/app/_components/Logo";
import Menu from "@/app/_components/Menu";

export default function Navigation() {
    return (
        <nav className="border-border border-primary flex flex-row items-center justify-between border-b p-4">
            <Logo />
            <Menu />
        </nav>
    );
}
