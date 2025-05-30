import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FavoriteAccordions() {
    return (
        <>
            <Accordion
                type="single"
                collapsible
                className="py-5 max-w-[1000px] text-primary-foreground text-xl items-center"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-chart-1 px-3">
                        Oblíbené Soutěže
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="text-black px-4 flex flex-col gap-3 pt-3">
                            <li>EX-M - Extraliga Mužů</li>
                            <li>EX-U22 - Extraliga U22</li>
                            <li>1-M - První liga Mužů </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion
                type="single"
                collapsible
                className=" max-w-[1000px] text-primary-foreground text-xl items-center"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-chart-1 px-3">
                        Oblíbené Týmy
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="text-black px-4 flex flex-col gap-3 pt-3">
                            <li>VK Lvi Praha</li>
                            <li>VK ČEZ Karlovarsko</li>
                            <li>VK Ostrava</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default FavoriteAccordions;
