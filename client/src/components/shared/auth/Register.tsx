import Logo from "../../../assets/images/logo.webp";

export const Register = ({ onSwitch }: { onSwitch: any }) => {

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center px-4 py-7 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 sm:p-12 flex flex-col justify-center">
                    <div className="text-center">
                        <img src={Logo} alt="Logo" className="w-32 mx-auto" />
                    </div>
                    <div className="mt-12">
                        <form className="mx-auto max-w-xs">
                            <input className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none " type="email" placeholder="Name" />
                            <input className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  mt-5" type="password" placeholder="Surname" />
                            <input className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-5 " type="email" placeholder="Email address" />
                            <input className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  mt-5" type="password" placeholder="Password" />
                            <input className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  mt-5" type="password" placeholder="Confirm password" />
                            <button className="w-full py-4 mt-5 bg-black text-white rounded-lg hover:bg-primary transition duration-300 focus:outline-none uppercase font-semibold">
                                Register
                            </button>
                        </form>
                        <p className="mt-6 text-sm flex items-center justify-center gap-2 text-black">
                            Already have an account?<p className="text-gray-600 font-medium hover:text-primary cursor-pointer" onClick={onSwitch}
                            >Log in</p>
                        </p>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?t=st=1738063202~exp=1738066802~hmac=9c8c4f0abec8d2c1de0f521cb54fd3a7a9ebd532979fd10f481fa2fa7cf37406&w=996" alt="Register" className="w-full h-full object-contain rounded-r-lg" />
                </div>
            </div>
        </div>
    );
};
