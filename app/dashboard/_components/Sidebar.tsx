import Link from "next/link";

export default function Sidebar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/dashboard/shop">Shop</Link>
                </li>
                <li>
                    <Link href="/dashboard/messages">Messages</Link>
                </li>
                <li>
                    <Link href="/dashboard/blog">Blog</Link>
                </li>
            </ul>
        </div>
    );
}
