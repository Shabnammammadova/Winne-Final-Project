import { useTranslation } from "react-i18next"
import About1 from "../../../assets/images/about1.1.webp"
import About2 from "../../../assets/images/about1.2.webp"

export const Story = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <div className="sm:w-[525px] lg:w-[950px] xl:w-[1170px] mx-auto pt-[60px] grid xs:grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-4">
                <div className="font-sans xs:ml-6">
                    <h2 className="xs:text-[30px] lg:text-[40px] font-medium leading-[43px] mb-5 capitalize">{t("our story")}</h2>
                    <div className="flex items-center">
                        <span className="w-[45px] h-[2px] mr-[18px] bg-primary"></span>
                        <p className="text-xs text-gray-500 font-medium tracking-[3.2px] uppercase">{t("the_high_stress_favourite")}</p>
                    </div>
                    <p className="text-[15px] text-gray-400 leading-[1.6] font-normal mt-[35px]">Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum <br />  volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis <br /> mauris sodales aliquam. Aenean massa.
                    </p>
                    <p className="text-[15px] text-gray-400 leading-[1.6] font-normal mt-[15px]"> In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem <br /> ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="w-full relative mx-auto h-auto overflow-hidden z-0  transition-all duration-500 hover:scale-95">
                    <img src={About1} alt="" className="w-full h-auto relative cursor-pointer" />
                </div>
            </div>
            <div className="sm:w-[525px] lg:w-[950px] xl:w-[1170px] mx-auto pt-[60px] grid xs:grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-4">
                <div className="w-full relative mx-auto h-auto overflow-hidden z-0  transition-all duration-500 hover:scale-95">
                    <img src={About2} alt="" className="w-full h-auto relative cursor-pointer" />
                </div>
                <div className="font-sans xs:pt-6 lg:pt-28 ml-6">
                    <h2 className="xs:text-[30px] lg:text-[40px]  font-medium leading-[43px] mb-5 capitalize">{t("who we are?")}</h2>
                    <div className="flex items-center">
                        <span className="w-[45px] h-[2px] mr-[18px] bg-primary"></span>
                        <p className="text-xs text-gray-500 font-medium tracking-[3.2px] uppercase">{t("the_high_stress_favourite")}</p>
                    </div>
                    <p className="text-[15px] text-gray-400 leading-[1.6] font-normal mt-[35px]">Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum <br />  volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis <br /> mauris sodales aliquam. Aenean massa.
                    </p>
                    <p className="text-[15px] text-gray-400 leading-[1.6] font-normal mt-[15px]"> In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem <br /> ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}
