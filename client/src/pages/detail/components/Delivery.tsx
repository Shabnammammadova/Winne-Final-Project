import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function Delivery() {
    return (
        <Dialog>
            <DialogTrigger asChild className="font-sans">
                <span className="cursor-pointer text-lg font-bold text-black mt-5 hover:text-red-800 transition-all duration-300">Delivery & Returns</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-black mb-2">Delivery</DialogTitle>
                    <div className="flex flex-col gap-2 text-gray-500">
                        <p>All orders shipped with UPS Express.</p>
                        <p>Always free shipping for orders over US $250.</p>
                        <p>All orders are shipped with a UPS tracking number.</p>
                    </div>
                </DialogHeader>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-black mb-2">Returns</DialogTitle>
                    <div className="flex flex-col gap-2 text-gray-500">
                        <p>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.</p>
                        <p>Refunds will be charged back to the original form of payment used for purchase..</p>
                        <p>Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
                        <p>All sale items are final purchases.</p>
                    </div>
                </DialogHeader>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-black mb-2">Help</DialogTitle>
                    <div className="flex flex-col gap-2 text-gray-500">
                        <p>Give us a shout if you have any other questions and/or concerns.</p>
                        <p>Email: <u className=" text-black hover:text-red-800 cursor-pointer"> help@example.com</u></p>
                        <p>Phone: +1 (23) 456 789</p>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

