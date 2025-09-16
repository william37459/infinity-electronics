import { Camera, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";


interface NavbarLink {
    label: string;
    href: string;
}

const links: NavbarLink[] = [
    { label: "Dame", href: "/kategori?kategori=women's clothing" },
    { label: "Herre", href: "/kategori?kategori=men's clothing" },
    { label: "Smykker", href: "/kategori?kategori=jewelery" },
    { label: "Elektronik", href: "/kategori?kategori=electronics" },
]

export default function Navbar() {
    return <>
        <nav className="p-4 sticky">
            <ul className="flex flex-row h-14 justify-between">
                <li className="justify-start">
                    <Link 
                                href="/"
                                className="hover:underline">
                        Logo
                    </Link>
                </li>
                <div className="flex flex-row gap-4 justify-end">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </div>
                <div className="flex flex-row gap-4 justify-end">
                    <li>
                        <Link
                            href="/konto">
                            <UserRound />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/kurv">
                            <ShoppingCart />
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    </>
}