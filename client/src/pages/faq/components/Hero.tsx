import { ChevronRight } from "lucide-react"
import HeadingImage from "../../../assets/images/heading-about.webp"
import { Link } from "react-router-dom"
import { paths } from "@/constants/paths"

export const FaqHero = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-t h-[400px] w-full bg-cover bg-center mx-auto flex flex-col justify-center" style={{ backgroundImage: `url(${HeadingImage})` }}>
                <div className="font-sans text-white text-[46px] font-medium mx-auto flex items-center justify-center text-center">
                    FAQs
                </div>
                <div className="pt-[6px] pb-[30px] text-white text-base text-center font-sans flex items-center justify-center mx-auto">
                    <p className="hover:text-red-800 cursor-pointer"><Link to={paths.HOME}>Home</Link></p>
                    <ChevronRight className="w-[16px] h-[16px]" />
                    <span>FAQs</span>
                </div>
            </div>
        </div>
    )
}