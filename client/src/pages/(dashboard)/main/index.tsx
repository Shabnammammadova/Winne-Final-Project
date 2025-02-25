import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { FaChartBar, FaEnvelope, FaServer } from "react-icons/fa";

const DashboardMainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-br from-red-200 to-indigo-200 dark:from-gray-900 dark:to-black rounded-md w-full text-start p-6">
            <main className="flex-1">
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-lg transition-transform duration-300">
                        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold">
                            Welcome <strong className="text-primary">Dash</strong>
                        </h2>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-lg transition-transform duration-300  flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold">
                                Inbox
                            </h2>
                        </div>
                        <button
                            className="mt-6 px-8 py-3 rounded-full text-lg font-semibold text-white bg-primary  transition-transform duration-300  flex items-center gap-2"
                            onClick={() => navigate("/dashboard/chat")}
                        >
                            <FaEnvelope className="text-xl" /> See messages
                        </button>
                    </div>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-6 flex items-center gap-3">
                    <FaChartBar className="text-primary dark:text-indigo-400" /> Our Statistics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {[{ label: "Total free servers", value: "1.6M", icon: FaServer },
                    { label: "Servers a month", value: "19.2K", icon: FaServer },
                    { label: "Servers a week", value: "4.9K", icon: FaServer }].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 h-64 flex flex-col items-center justify-center text-center">
                            <stat.icon className="text-primary dark:text-indigo-400 text-4xl mb-4" />
                            <dt className="text-lg font-medium text-gray-500 dark:text-gray-400">{stat.label}</dt>
                            <dd className="mt-2 text-4xl font-bold text-primary dark:text-indigo-400">{stat.value}</dd>
                        </div>
                    ))}
                </div>
            </main>
            <ScrollToTop />
        </div>
    );
};

export default DashboardMainPage;
