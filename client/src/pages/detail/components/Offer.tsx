

export const Offer = () => {
    return (
        <div>
            <div className="mt-7 border-solid border py-7 px-[17px] relative  border-gray-200">
                <h3 className="text-lg font-semibold text-green-600 absolute bg-white  top-[-14px] left-[60px]">Special Offer</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>✔ In Stock</li>
                    <li>✔ Free Delivery Available*</li>
                    <li>
                        ✔ Sale 30% Off Use Code: <span className="font-semibold">Deal30</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
