import { useState, useRef, useEffect } from "react";
import UserIcon from "../../../assets/icons/user.svg";

export function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <img
                src={UserIcon}
                alt="User Icon"
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                    <div className="font-sans">
                        <button
                            className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                            onClick={() => console.log("Profile clicked")}
                        >
                            Profile
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                            onClick={() => console.log("Profile clicked")}
                        >
                            Dashboard
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 font-semibold text-red-800"
                            onClick={() => console.log("Log out clicked")}
                        >
                            Log out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
