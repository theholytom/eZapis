import React from "react";
import { InstagramIcon } from "./icons/InstagramIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YoutubeIcon } from "./icons/YouTubeIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import cevLogo from "../assets/cev.png";
import fivbLogo from "../assets/FIVB.png";

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-primary p-4">
            <div className="container mx-auto">
                <div className="flex justify-between px-8 mb-4">
                    <ul className="flex gap-6 [&>li]:text-white items-center [&_svg]:hover:scale-125 [&_svg]:transition-transform [&_img]:hover:scale-110 [&_img]:transition-transform">
                        <li>
                            <a href="https://www.instagram.com/czech_volleyball/?hl=cs">
                                <InstagramIcon size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/CeskyVolejbalovySvaz">
                                <FacebookIcon size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/explore">
                                <TikTokIcon size={18} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/CeskyVolejbalovySvaz">
                                <YoutubeIcon size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/czechvolleyball">
                                <TwitterIcon size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.cev.eu">
                                <img
                                    src={cevLogo}
                                    alt="CEV logo"
                                    className="h-8"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.fivb.com">
                                <img
                                    src={fivbLogo}
                                    alt="FIVB logo"
                                    className="h-16"
                                />
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col justify-center space-y-3 text-sm font-medium mr-12 [&>li>a]:text-white/90 [&>li>a]:hover:text-white [&>li>a]:transition-colors [&>li>a]:duration-200 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:tracking-wide">
                        <li>
                            <a href="https://gitlab.fel.cvut.cz/holytom5/ezapis-react-project">
                                Dokumentace
                            </a>
                        </li>
                        <li>
                            <a href="mailto:holytom5@fel.cvut.cz">Kontakt</a>
                        </li>
                        <li>
                            <a href="mailto:holytom5@fel.cvut.cz">
                                Hlášení chyb
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="border-t border-white/20 pt-4">
                    <p className="text-white/70 text-sm text-center">
                        © 2025 Všechna práva vyhrazena
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
