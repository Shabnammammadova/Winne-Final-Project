import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export const FaqAccordion = () => {
    return (
        <div className="bg-white py-10 border-b">
            <div className="container mx-auto max-w-4xl px-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full text-left bg-white rounded-lg mb-10">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            How long does it take for home delivery?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            We use Royal Mail and DHL for most UK orders. Euro Car Parts reserves the right to use an alternative delivery method where necessary.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            What courier do you use for deliveries?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            We primarily use Royal Mail and DHL for UK orders, but alternative methods may be used when more appropriate.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            Why am I being charged for delivery when it states standard delivery is free?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            Some oversized items require a specialist courier, which incurs an additional charge despite standard delivery being free.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            I haven’t received a dispatch email/email confirmation?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            Dispatch and confirmation emails are sent automatically. If you haven’t received one, please check your spam folder or contact customer support.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            Why am I being charged for delivery when it states standard delivery is free?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            Some oversized items require a specialist courier, which incurs an additional charge despite standard delivery being free.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            Who pays for return postage?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            If you are returning an unsuitable item for a refund we will refund the cost of the item only and not the original delivery cost.Should you be returning a faulty item for a refund we will refund both the original shipping costs and the return delivery costs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            Why have you not refunded the original delivery charge?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            If you are returning an unsuitable item for a refund we will refund the cost of the item only and not the original delivery cost. Should you be returning a faulty item for a refund we will refund both the original shipping costs and the return delivery costs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="w-full text-lg font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 border-b">
                            Do you offer a VAT discount to non EU customers?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-gray-600 text-base">
                            Customer’s ordering from outside the European Union can contact us via telephone, live chat, or e-mail and quote the order reference number. Our customer services team will go through the process to remove the VAT off of their order.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};
