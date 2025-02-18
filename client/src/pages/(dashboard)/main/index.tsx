import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { useNavigate } from "react-router-dom"


const DashboardMainPage = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-white rounded-md w-full text-start dark:bg-black ">
            <main className="flex-1 p-4">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                    <div className="flex-1 bg-red-100 border border-indigo-200 rounded-xl p-6 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl text-blue-900">
                            Welcome <strong>Dash</strong>
                        </h2>
                        <span className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-red-800">
                            01:51
                        </span>
                    </div>

                    <div className="flex-1 bg-red-100 border border-blue-200 rounded-xl p-6 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl text-blue-900">
                            Inbox
                        </h2>
                        <a href="" className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-primary hover:bg-black transition-transform duration-300 hover:scale-105" onClick={() => navigate("/dashboard/chat")}>
                            See messages
                        </a>
                    </div>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Our
                    statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 text-center text-2xl">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total free
                                    servers</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary  dark:text-indigo-400">1.6M</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 text-center text-2xl" >
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Servers a
                                    month</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary dark:text-indigo-400">19.2K
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 text-center text-2xl">
                        <div className="px-4 py-5 sm:p-6">
                            <dl>
                                <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Servers a
                                    week</dt>
                                <dd className="mt-1 text-3xl leading-9 font-semibold text-primary dark:text-indigo-400">4.9K</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </main>

            <ScrollToTop />
        </div>
    )
}

export default DashboardMainPage