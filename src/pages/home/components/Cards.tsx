import CraftBeer from "../../../assets/images/craftbeer.webp";
import OrginalBerr from "../../../assets/images/originalbeer.webp";
import LargerBeer from "../../../assets/images/lagerbeer.webp";

export const Cards = () => {
    return (
        <section className="container py-[100px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-x-2 gap-y-2 lg:gap-x-8 md:gap-x-2 mt-10 mb-5 font-sans bg-background">
            {[
                {
                    img: OrginalBerr,
                    title: "New Collection",
                    description:
                        "Food is any substance consumed to provide nutritional support for an organism.",
                },
                {
                    img: CraftBeer,
                    title: "Popular Collection",
                    description:
                        "Food is any substance consumed to provide nutritional support for an organism.",
                },
                {
                    img: LargerBeer,
                    title: "Best Selling Collection",
                    description:
                        "Food is any substance consumed to provide nutritional support for an organism.",
                },
            ].map((card, index) => (
                <div
                    key={index}
                    className="group bg-white px-[15px] py-[15px] lg:px-[30px] lg:py-[40px] cursor-pointer  overflow-hidden relative z-10 hover:bg-primary hover:text-black hover:transition-all hover:duration-500 ease-out"
                >
                    <img
                        src={card.img}
                        alt="Product"
                        className="object-cover rounded-t-xl pb-[100px] transition-transform duration-500"
                    />
                    <div className="px-4 py-3 h-[150px] lg:h-[200px] bg-primary text-center absolute left-0 bottom-0 z-[-1] w-full group-hover:z-10 group-hover:transition-all group-hover:duration-500">
                        <span className="text-white mr-3 capitalize inline-block text-lg lg:text-2xl font-semibold mb-[15px] group-hover:text-black  transition-all duration-500">
                            {card.title}
                        </span>
                        <p className="text-[16px] mb-[30px] leading-6 text-white block  group-hover:text-black  transition-all duration-500 delay-150">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};
