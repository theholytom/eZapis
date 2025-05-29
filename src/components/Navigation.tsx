import { Link } from "react-router-dom";
import cvLogo from "../assets/cesky-volejbal.png";

function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-primary p-4 z-50">
            <ul className="flex items-center gap-8 tracking-wide [&>li_*]:(font-medium text-2xl text-white/90 transition-all duration-300)">
                <li>
                    <a href="https://www.cvf.cz" className="flex items-center">
                        <img
                            src={cvLogo}
                            alt="logo českého volejbalu"
                            className="h-10 hover:scale-110 transition-transform duration-300"
                        ></img>
                    </a>
                </li>
                <li className="items-center">
                    {
                        <Link
                            to="/"
                            className="relative after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white hover:translate-y-[-2px] rounded-md px-2 py-1"
                        >
                            Domů
                        </Link>
                    }
                </li>
                <li className="items-center">
                    {
                        <Link
                            to="/favorite"
                            className="relative after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white hover:translate-y-[-2px] rounded-md px-2 py-1"
                        >
                            Oblíbené
                        </Link>
                    }
                </li>
                <li className="items-center">
                    {
                        <Link
                            to="/matches/"
                            className="relative after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white hover:translate-y-[-2px] rounded-md px-2 py-1"
                        >
                            Zapsat zápas
                        </Link>
                    }
                </li>
                <li className="items-center">
                    {
                        <Link
                            to="/matches/"
                            className="relative after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white hover:translate-y-[-2px] rounded-md px-2 py-1"
                        >
                            Zápasy
                        </Link>
                    }
                </li>
                <li className="items-center ml-auto">
                    <Link
                        to="/login"
                        className="relative after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white hover:translate-y-[-2px] rounded-md px-2 py-1"
                    >
                        Přihlásit se
                    </Link>
                </li>
                <li className="items-center">
                    <Link
                        to="/register"
                        className="relative after:absolute after:bg-white after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-white hover:translate-y-[-2px] rounded-md px-2 py-1"
                    >
                        Registrovat se
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
