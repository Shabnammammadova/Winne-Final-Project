import Newsimage from "../../../assets/images/img-newsletter.webp"
import Email from "../../../assets/icons/email.svg"

export const News = () => {
    return (
        <div className="bg-white pt-[60px]">
            <div className="relative w-full h-[359px] pt-[10px]  bg-cover bg-center mx-auto flex flex-col justify-center" style={{ backgroundImage: `url(${Newsimage})` }}>
                <div className="container max-w-[1170px] flex  2xs:flex-col xs:flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img src={Email} alt="" className="w-[64px] h-[64px]" />
                        <span className="border-l-2 h-[120px] border-white">
                            <div className="flex flex-col ml-5 text-white font-sans">
                                <p className="text-[26px] uppercase">Our</p>
                                <b className="font-bold text-[26px] leading-[4.8px] uppercase">Newsletter!</b>
                                <p className="text-xl leading-6 font-normal mt-[30px]">It only takes a second to be the first to find <br />
                                    out about our latest news</p>
                            </div>
                        </span>
                    </div>
                    <div className="max-w-[585px] relative flex flex-row lg:m-0 mt-10 font-sans">
                        <input
                            type="text"
                            className="leading-[40px] md:w-[525px] xs:min-w-[300px] h-[60px] text-sm lg:text-base px-3 py-2 font-medium text-gray-800 bg-slate-50 outline-none placeholder-gray-500"
                            placeholder="Your email address..." />
                        <button
                            type="submit"
                            className="bg-black text-white md:w-[152px] xs:min-w-[140px] h-[60px] flex items-center justify-center text-sm lg:text-base hover:bg-primary"> SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
