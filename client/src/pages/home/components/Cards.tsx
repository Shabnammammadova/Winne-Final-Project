import Drink1 from "../../../assets/images/Drink1.jpg";
import Drink2 from "../../../assets/images/Drink2.jpg";
import Drink3 from "../../../assets/images/Drink3.jpg";


export const Cards = () => {
    return (
        <section className="container py-[100px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-x-2 gap-y-2 lg:gap-x-8 md:gap-x-2 mt-10 mb-5 font-sans bg-background">
            {[
                {
                    img: Drink1,
                    title: "New Collection",
                },
                {
                    img: Drink3,
                    title: "Best Selling Collection",
                },
                {
                    img: Drink2,
                    title: "Popular Collection",
                },
            ].map((card, index) => (
                <div
                    key={index}
                    className="group  px-[15px] py-[15px] lg:px-[30px] lg:py-[40px] cursor-pointer overflow-hidden relative z-10 hover:transition-all hover:duration-500 ease-out"
                >
                    <img
                        src={card.img}
                        alt="Product"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-lg lg:text-2xl font-semibold mb-[10px]">
                            {card.title}
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
};
