import { ChevronsRight } from "lucide-react";
import Drink7 from "../../../assets/images/wine1.webp";
import Drink8 from "../../../assets/images/wine2.webp";
import { useNavigate } from "react-router-dom";


export const Cards = () => {
    const navigate = useNavigate()
    const cards = [
        {
            img: Drink7, title: "From $50", des: "Red wine"
        },
        {
            img: Drink8, title: "From $60", des: "Grape wine"
        },

    ];

    return (
        <section className="container pt-[30px] pb-[100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="group cursor-pointer overflow-hidden relative  shadow-lg transition-shadow duration-500 hover:shadow-2xl "
                >
                    <img
                        src={card.img}
                        alt="Product"
                        className="object-cover w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-center justify-end pb-4 opacity-90 transition-opacity duration-500 text-center">
                        <span className="text-black text-lg lg:text-3xl font-semibold px-48 py-32  opacity-0 group-hover:opacity-85 transition-opacity duration-1000 mx-auto bg-white">
                            {card.title}
                            <br />
                            <div className="text-4xl">
                                {card.des}
                            </div>
                            <p className="font-sans text-primary text-base mt-4 flex items-center justify-center" onClick={() => navigate("/shop")}>View more<ChevronsRight /></p>
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
};
