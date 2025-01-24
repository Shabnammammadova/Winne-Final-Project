import { WineAbout } from "./components/About"
import { Description } from "./components/Description"
import { Information } from "./components/Information"



export const WineProductDetail = () => {
    return (
        <div className="bg-white">
            <WineAbout />
            <Description />
            <Information />
        </div>
    )
}
