import Logo from "@/app/_components/Logo";
import Menu from "@/app/_components/Menu";

export default function Navigation() {
    return (
        <nav className="bg-background flex flex-row items-center justify-between p-4">
            <Logo />
            <Menu />
        </nav>
    );
}
