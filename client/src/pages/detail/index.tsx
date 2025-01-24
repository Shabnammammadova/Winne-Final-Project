import { WineAbout } from "./components/About"
import { Description } from "./components/Description"



export const WineProductDetail = () => {
    return (
        <div className="bg-white">
            <WineAbout />
            <Description />
        </div>
    )
}
