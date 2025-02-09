import Drink7 from "../../../assets/images/Drink7.jpg";
import Drink8 from "../../../assets/images/Drink8.jpg";
import Drink9 from "../../../assets/images/Drink9.jpg";
import Drink10 from "../../../assets/images/Drink10.jpg";

export const Cards = () => {
    const cards = [
        { img: Drink7, title: "New Collection" },
        { img: Drink8, title: "Best Selling Collection" },
        { img: Drink9, title: "Popular Collection" },
        { img: Drink10, title: "Trending Collection" },
    ];

    return (
        <section className="container pt-[30px] pb-[100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="group cursor-pointer overflow-hidden relative rounded-xl shadow-lg transition-shadow duration-500 hover:shadow-2xl"
                >
                    <img
                        src={card.img}
                        alt="Product"
                        className="object-cover w-full h-72 md:h-80 lg:h-96 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-center justify-end pb-4 opacity-90 transition-opacity duration-500">
                        <span className="text-white text-lg lg:text-2xl font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {card.title}
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
};
