// import { Blog } from "@/types";
// import { useNavigate } from "react-router-dom";

// type Props = {
//     blog: Blog[]
// }

// export const BlogCards = ({ blog }: Props) => {

//     const navigate = useNavigate()
//     return (
//         <div className="bg-white pb-[70px] border-b">
//             <div className="flex justify-center items-center flex-col font-sans">
//                 <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">News</p>
//                 <span className="border-red-800 border-2 w-[75px]"></span>
//             </div>
//             <div className="container pt-[50px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-10 lg:gap-x-8 md:gap-x-2">
//                 {blog?.map((bloglist) => (
//                     <div key={bloglist._id} className="relative" onClick={() => { navigate(`/blog/detail/${bloglist._id}`) }}
//                     >
//                         <img
//                             src={bloglist.images[0]}
//                             alt="blog"
//                             className="w-full min-h-[446px] object-cover opacity-1 z-10 transition-opacity duration-300 cursor-pointer hover:brightness-75"
//                         />
//                         <div className="absolute p-3 w-[76px] h-[76px] bg-white flex flex-col items-center rounded-full bottom-[85%] left-[2%] font-sans">
//                             <p className="text-xl font-medium font-sans">30</p>
//                             <span className="border w-12 h-[1px] border-red-700"></span>
//                             <p className="text-[14px] font-sans">May</p>
//                         </div>
//                         <div className="flex flex-col items-start justify-center font-sans mt-4">
//                             <span className="text-[22px] font-medium pb-[10px] text-black capitalize cursor-pointer hover:text-red-800">{bloglist.name}</span>
//                             <span className="h-[1px] w-[120px] bg-gray-400"></span>
//                             <p className="text-sm text-start font-normal text-gray-400 pt-[10px]">{bloglist.description}</p>
//                             <button className="text-sm mt-[23px] font-medium border-b border-black text-black hover:text-red-800 hover:border-red-800">
//                                 Read more
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
