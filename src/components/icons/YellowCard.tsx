import { cn } from "@/lib/utils";

interface Props {
    classname?: string
}

function YellowCard({classname}: Props) {
    return (
        <svg
            viewBox="-10 -10 120.00 120.00"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className={cn("iconify iconify--gis rotate-90", classname)}
            preserveAspectRatio="xMidYMid meet"
            fill="#000000"
            stroke="#000000"
            strokeWidth="0.5"
            width={30}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M8.5 22.5A3.5 3.5 0 0 0 5 26v48a3.5 3.5 0 0 0 3.5 3.5h83A3.5 3.5 0 0 0 95 74V26a3.5 3.5 0 0 0-3.5-3.5h-83z"
                    fill="#fffb00"
                ></path>
            </g>
        </svg>
    );
}

export default YellowCard;
