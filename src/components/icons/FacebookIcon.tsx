import React from "react";

interface FacebookIconProps {
    className?: string;
    size?: number;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
    className = "",
    size = 40,
}) => {
    return (
        <svg
            fill="currentColor"
            width={size}
            height={size}
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                className="st0"
                d="M12.6,16.1v11.6c0,0.2,0.1,0.3,0.3,0.3h4.6c0.2,0,0.3-0.1,0.3-0.3V15.9h3.4c0.2,0,0.3-0.1,0.3-0.3l0.3-3.6 c0-0.2-0.1-0.3-0.3-0.3h-3.7V9.2c0-0.6,0.5-1.1,1.2-1.1h2.6C21.9,8.1,22,8,22,7.8V4.3C22,4.1,21.9,4,21.7,4h-4.4 c-2.6,0-4.7,1.9-4.7,4.3v3.4h-2.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3h2.3V16.1z"
            />
        </svg>
    );
};
