import { Link } from "react-router-dom";
import cvLogo from "../assets/cesky-volejbal.png";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-primary p-4 z-50">
            {/* Mobile menu button */}
            <button
                className="lg:hidden absolute right-4 top-4 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                )}
            </button>

            {/* Logo - always visible */}
            <a
                href="https://www.cvf.cz"
                className="flex items-center shrink-0 lg:hidden"
            >
                {isImageLoading && <Skeleton className="w-[110px] h-[40px]" />}
                <img
                    src={cvLogo}
                    alt="logo českého volejbalu"
                    className={`h-10 min-w-[40px] object-contain hover:scale-110 transition-transform duration-300 ${
                        isImageLoading ? "hidden" : "block"
                    }`}
                    onLoad={() => setIsImageLoading(false)}
                />
            </a>

            {/* Navigation links */}
            <ul
                className={`
                flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 
                tracking-wide [&>li_*]:(font-medium text-2xl text-white/90 transition-colors duration-300)
                ${isMenuOpen ? "flex mt-16" : "hidden lg:flex"}
            `}
            >
                <li className="hidden lg:block">
                    <a
                        href="https://www.cvf.cz"
                        className="flex items-center shrink-0"
                    >
                        {isImageLoading && (
                            <Skeleton className="w-[110px] h-[40px]" />
                        )}
                        <img
                            src={cvLogo}
                            alt="logo českého volejbalu"
                            className={`h-10 min-w-[40px] object-contain hover:scale-110 transition-transform duration-300 ${
                                isImageLoading ? "hidden" : "block"
                            }`}
                            onLoad={() => setIsImageLoading(false)}
                        />
                    </a>
                </li>
                <li className="w-full lg:w-auto">
                    <Link
                        to="/"
                        className="relative block w-full lg:w-auto py-2 lg:py-1 px-2 after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white rounded-lg"
                    >
                        Domů
                    </Link>
                </li>
                <li className="w-full lg:w-auto">
                    <Link
                        to="/favorite"
                        className="relative block w-full lg:w-auto py-2 lg:py-1 px-2 after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white rounded-lg"
                    >
                        Oblíbené
                    </Link>
                </li>
                <li className="w-full lg:w-auto">
                    <Link
                        to="/matches/"
                        className="relative block w-full lg:w-auto py-2 lg:py-1 px-2 after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white rounded-lg"
                    >
                        Zápasy
                    </Link>
                </li>
                <li className="w-full lg:w-auto lg:ml-auto">
                    <Link
                        to="/login"
                        className="relative block w-full lg:w-auto py-2 lg:py-1 px-2 after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white rounded-lg"
                    >
                        Přihlásit se
                    </Link>
                </li>
                <li className="w-full lg:w-auto">
                    <Link
                        to="/register"
                        className="relative block w-full lg:w-auto py-2 lg:py-1 px-2 after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white rounded-lg"
                    >
                        Registrovat se
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
