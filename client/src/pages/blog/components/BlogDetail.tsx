import { HomeBlog } from "@/pages/home/components/Blog"

export const BlogDetail = () => {
    return (
        <div className="bg-white font-sans pt-5 border-b border-b-gray-200">
            <div className="container mx-auto text-center flex justify-between flex-col xs:items-center gap-20">
                <div className="w-full max-w-[1180px]">
                    <img src="https://winne-store-demo.myshopify.com/cdn/shop/articles/blog2_1024x1024.png?v=1653885473" alt="" className="pb-5 object-cover w-full  max-w-[1180px]" />
                    <p className="mx-auto text-center text-[22px] font-medium pb-[10px] text-black cursor-pointer hover:text-red-800">Popular types of wine today</p>
                    <span className="w-full text-sm text-start flex items-start font-normal text-gray-400 py-[20px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </span>
                    <div className="relative w-full pb-[56.25%]">
                        <iframe
                            src="https://www.youtube.com/embed/yYQOjWlQkxg?rel=0"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen
                            scrolling="no"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        </iframe>
                    </div>

                </div>
            </div>
            <HomeBlog />
        </div>
    )
}
