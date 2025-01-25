import UserIcon from "../../../assets/icons/user.svg";


export const Review = () => {
    return (
        <div className="container max-w-[1170px]  py-[40px] ">
            <div className="border border-solid border-gray-200 rounded-lg  p-4">
                <div >
                    <img
                        src={UserIcon}
                        alt="User Icon"
                        className="w-[24px] h-[24px]  border-2 bg-white border-solid rounded-full cursor-pointer"

                    />

                </div>
            </div>
        </div>
    )
}
