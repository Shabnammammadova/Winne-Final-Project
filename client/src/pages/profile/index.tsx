import { useState } from "react";
import { useAppSelector } from "@/hooks/redux";
import { selectUserData } from "@/store/features/userSlice";
import OrderPage from "../order";


export const UserProfile = () => {
    const { user } = useAppSelector(selectUserData);

    const [avatarPreview, setAvatarPreview] = useState<string>(user?.avatar || "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg");
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [name, setName] = useState<string>(user?.name || "");
    const [surname, setSurname] = useState<string>(user?.surname || "")
    const [email, setEmail] = useState<string>(user?.email || "");

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setAvatarFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    console.log(setName, setSurname, setEmail);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit avatar file:", avatarFile);
        console.log("Submit name:", name);
        console.log("Submit email:", email);

    };

    return (
        <div className="bg-gray-100 flex justify-center items-center p-4 dark:bg-black dark:text-white ">
            <div className="bg-white w-full flex  2xs:flex-col gap-6 dark:bg-black dark:border border-gray-200 rounded-lg dark:text-white container ">
                <div className="p-6 bg-red-50 dark:bg-primary dark:border border-primary rounded-lg dark:text-white">
                    <div className="text-start flex items-center">
                        <div className="relative">
                            <img
                                src={avatarPreview}
                                alt="User Avatar"
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            <input
                                id="avatar-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                        </div>
                        <div className="p-6 md:col-span-2">
                            <form onSubmit={handleSubmit} className="flex">
                                <div>
                                    <label className="text-md font-medium text-black flex"><p className="text-primary font-semibold dark:text-white">Full Name:</p>{name}  {surname}</label>
                                    <label className="text-md font-medium text-black flex"><p className="text-primary font-semibold dark:text-white">Email:</p>{email}</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-medium mx-6">
                    <OrderPage />
                </div>
            </div>
        </div>
    );
};

