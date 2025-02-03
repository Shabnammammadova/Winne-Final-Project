import Brand1 from "../../../assets/images/brand1.jpg"
import Brand2 from "../../../assets/images/brand2.avif"
import Brand3 from "../../../assets/images/brand3.avif"
import Brand4 from "../../../assets/images/brand4.webp"
import Brand5 from "../../../assets/images/brand5.avif"


export const WineBrand = () => {
  return (
    <div className="container w-full my-[50px] flex flex-row">
      <div className="w-full">
        <div className="max-h-[120px] border border-gray-200  py-5">
          <img src={Brand1} alt="" className="cursor-pointer mx-auto text-center" />
        </div>
      </div>
      <div className="w-full">
        <div className="max-h-[120px] border border-gray-200  py-5">
          <img src={Brand2} alt="" className="cursor-pointer mx-auto text-center" />
        </div>
      </div>
      <div className="w-full">
        <div className="max-h-[120px] border border-gray-200  py-5">
          <img src={Brand3} alt="" className="cursor-pointer mx-auto text-center" />
        </div>
      </div>
      <div className="w-full">
        <div className="max-h-[120px] border border-gray-200  py-5">
          <img src={Brand4} alt="" className="cursor-pointer mx-auto text-center" />
        </div>
      </div>
      <div className="w-full">
        <div className="max-h-[120px] border border-gray-200  py-5">
          <img src={Brand5} alt="" className="cursor-pointer mx-auto text-center" />
        </div>
      </div>
    </div>
  )
}
