import { useNavigate } from "react-router-dom";
import News1 from "../../../assets/images/news1.webp";
import News2 from "../../../assets/images/news2.webp";
import News3 from "../../../assets/images/news3.webp";
import News4 from "../../../assets/images/news4.webp";
import News5 from "../../../assets/images/news5.webp";
import News6 from "../../../assets/images/news6.webp";


const blogData = [
    {
        img: News1,
        date: "30",
        month: "May",
        category: "News",
        title: "How to make handmade wine",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of u...",
    },
    {
        img: News2,
        date: "30",
        month: "May",
        category: "News",
        title: "Popular types of wine today",
        description:
            "Fermentation is a key step in winemaking. Here's how you can ensure the best results for your homemade wine...",
    },
    {
        img: News3,
        date: "30",
        month: "May",
        category: "News",
        title: "The art of making wine",
        description:
            "Storing wine correctly ensures that it stays fresh and flavorful for a long time. Discover the best tips...",
    },
    {
        img: News4,
        date: "30",
        month: "May",
        category: "News",
        title: "Things to know about alcohol",
        description:
            "Storing wine correctly ensures that it stays fresh and flavorful for a long time. Discover the best tips...",
    },
    {
        img: News5,
        date: "30",
        month: "May",
        category: "News",
        title: "How to make handmade wine",
        description:
            "Storing wine correctly ensures that it stays fresh and flavorful for a long time. Discover the best tips...",
    },
    {
        img: News6,
        date: "30",
        month: "May",
        category: "News",
        title: "Does the age of the wine matter?",
        description:
            "Storing wine correctly ensures that it stays fresh and flavorful for a long time. Discover the best tips...",
    },
];

export const BlogCards = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-white pb-[70px] border-b">
            <div className="flex justify-center items-center flex-col font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">News</p>
                <span className="border-red-800 border-2 w-[75px]"></span>
            </div>
            <div className="container pt-[50px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-10 lg:gap-x-8 md:gap-x-2">
                {blogData.map((blog, index) => (
                    <div key={index} className="relative" onClick={() => navigate("/blog/detail/${id}")}>
                        <img
                            src={blog.img}
                            alt={blog.title}
                            className="w-full min-h-[446px] object-cover opacity-1 z-10 transition-opacity duration-300 cursor-pointer hover:brightness-75"
                        />
                        <div className="absolute p-3 w-[76px] h-[76px] bg-white flex flex-col items-center rounded-full bottom-[85%] left-[2%] font-sans">
                            <p className="text-xl font-medium font-sans">{blog.date}</p>
                            <span className="border w-12 h-[1px] border-red-700"></span>
                            <p className="text-[14px] font-sans">{blog.month}</p>
                        </div>
                        <div className="flex flex-col items-start justify-center font-sans mt-4">
                            <p className="text-xs leading-8 font-medium uppercase text-red-800">{blog.category}</p>
                            <span className="text-[22px] font-medium pb-[10px] text-black capitalize cursor-pointer hover:text-red-800">{blog.title}</span>
                            <span className="h-[1px] w-[120px] bg-gray-400"></span>
                            <p className="text-sm text-start font-normal text-gray-400 pt-[10px]">{blog.description}</p>
                            <button className="text-sm mt-[23px] font-medium border-b border-black text-black hover:text-red-800 hover:border-red-800">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
