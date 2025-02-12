import { ScrollToTop } from "@/components/shared/ScrollToTop"

const DashboardMainPage = () => {
    return (
        <div>
            <div>
                <main className="relative  flex flex-col justify-center bg-white overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                        <section className="grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto">
                            <div className="group [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box] relative before:absolute before:inset-0 before:bg-[url('./noise.png')] before:bg-[length:352px_382px] rounded-2xl border border-transparent">
                                <div className="relative">
                                    <div className="px-6 py-5">
                                        <div className="font-nycd text-lg text-red-500 mb-1">Label</div>
                                        <div className="text-lg font-bold text-slate-200 mb-1">Daily Reports</div>
                                        <p className="text-sm text-slate-500">Building truly great products is both art and science. It's part intuition and part data.</p>
                                    </div>
                                    <div className="relative group-hover:-translate-y-1 transition-transform duration-500 ease-in-out">
                                        <img className="group-hover:opacity-0 transition-opacity duration-500" src="https://cruip-tutorials.vercel.app/cards-hover-effect//card-01.png" width="350" height="240" alt="Card image 01" />
                                        <img className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://cruip-tutorials.vercel.app/cards-hover-effect//card-01-hover.png" width="350" height="240" alt="Card image 01 displaying on hover" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                            <div className="group [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box] relative before:absolute before:inset-0 before:bg-[url('./noise.png')] before:bg-[length:352px_382px] rounded-2xl border border-transparent">
                                <div className="relative">
                                    <div className="px-6 py-5">
                                        <div className="font-nycd text-lg text-red-500 mb-1">Label</div>
                                        <div className="text-lg font-bold text-slate-200 mb-1">Powerful Analytics</div>
                                        <p className="text-sm text-slate-500">Building truly great products is both art and science. It's part intuition and part data.</p>
                                    </div>
                                    <div className="relative group-hover:-translate-y-1 transition-transform duration-500 ease-in-out">
                                        <img className="group-hover:opacity-0 transition-opacity duration-500" src="https://cruip-tutorials.vercel.app/cards-hover-effect//card-03.png" width="350" height="240" alt="Card image 03" />
                                        <img className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://cruip-tutorials.vercel.app/cards-hover-effect//card-03-hover.png" width="350" height="240" alt="Card image 03 displaying on hover" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default DashboardMainPage