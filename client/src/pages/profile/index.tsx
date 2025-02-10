import { useState } from "react";
import { useAppSelector } from "@/hooks/redux";
import { selectUserData } from "@/store/features/userSlice";
import { PlusCircle } from "lucide-react";

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
        <div className="bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-white w-full flex gap-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                    <div className="text-center">
                        <div className="relative">
                            <img
                                src={avatarPreview}
                                alt="User Avatar"
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            <label htmlFor="avatar-upload" className="absolute -bottom-1 right-[100px] text-white  rounded-full cursor-pointer w-[30px] h-[30px]">
                                <PlusCircle className="fill-primary" />
                            </label>
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
                                    <label className="text-md font-medium text-black flex"><p className="text-primary font-semibold">Full Name:</p>{name}  {surname}</label>
                                    <label className="text-md font-medium text-black flex"><p className="text-primary">Email:</p>{email}</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-medium">
                    Orders
                </div>
            </div>
        </div>
    );
};

