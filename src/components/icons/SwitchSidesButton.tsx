import { Button } from "../ui/button";

function SwitchSidesButton() {
    return (
        <div className="flex justify-center">
            <Button className="bg-white h-12 w-12 hover:bg-secondary transition-colors m-5 group">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="var(--primary)"
                    className="scale-200 group-hover:stroke-white transition-colors"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{" "}
                    </g>
                </svg>
            </Button>
        </div>
    );
}

export default SwitchSidesButton;
