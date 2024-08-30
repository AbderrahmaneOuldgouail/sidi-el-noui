import React from "react";
import FormBook from "./FormBook";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"; // Adjust the import path as needed

export default function AutoCarousel() {
    const carouselItems = [
        "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428611218_371702122462614_5065970390852309285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOnZKDwnVsoLUz7RbZzLNeVL8bcF0GllRUvxtwXQaWVFzvmY0gUy6F-i3PMMtINvVk1FfxuDEc3MBEUs_MF6Mb&_nc_ohc=Q_tripheACwQ7kNvgEYQgd4&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYB1NT2pGZSvaIu-xpPnvW9_XEpaCXlEPUUr3Km8gSSFCw&oe=66D02866",
        "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428603936_371702929129200_1184689777793078171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHiAAqVe0aAEcUTslDNDdGtJAe-kvu90K0kB76S-73QrIcFe_6AE6c-AAUwmLsh7SfUsaDxlFQgxb-Dxy9MvCr&_nc_ohc=DY79bysyhJAQ7kNvgGpzgem&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYC8myNxY1jW5RiSTy_yZ7s7RKj5lx5ICTlAixi5TxWnjQ&oe=66D01039",
        "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428603936_371702929129200_1184689777793078171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHiAAqVe0aAEcUTslDNDdGtJAe-kvu90K0kB76S-73QrIcFe_6AE6c-AAUwmLsh7SfUsaDxlFQgxb-Dxy9MvCr&_nc_ohc=DY79bysyhJAQ7kNvgGpzgem&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYC8myNxY1jW5RiSTy_yZ7s7RKj5lx5ICTlAixi5TxWnjQ&oe=66D01039",
    ];

    return (
        <div className="relative h-dvh lg:-mx-28">
            <Carousel className="h-min ">
                <CarouselContent>
                    {carouselItems.map((asset, index) => (
                        <CarouselItem key={index}>
                            <img
                                src={asset}
                                alt={`Selected ${index}`}
                                className="rounded-md w-full h-dvh object-cover aspect-video"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <FormBook /> */}
                <CarouselPrevious className="bg-secondary left-0 text-secondary-foreground" />
                <CarouselNext className="bg-secondary right-0 text-secondary-foreground" />
            </Carousel>
        </div>
    );
}
