import { Facebook, Instagram, Twitter, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col md:flex-row gap-6 mb-4 md:mb-0">
                    <Link href="/about" className="hover:underline">About us</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <Link href="/privacy" className="hover:underline">Privacy policy</Link>
                </div>
                <div className="flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <X />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram />
                    </a>
                </div>
            </div>
            <div className="text-center text-xs text-gray-400 mt-6">
                &copy; {new Date().getFullYear()} Infinity Electronics. All rights reserved.
            </div>
        </footer>
    );
}   
