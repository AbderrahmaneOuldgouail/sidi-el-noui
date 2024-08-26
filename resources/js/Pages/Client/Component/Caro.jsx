import React, { useState, useEffect } from "react";
import FormBook from "./FormBook";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel"; // Adjust the import path as needed

export default function AutoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = [
        "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428611218_371702122462614_5065970390852309285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOnZKDwnVsoLUz7RbZzLNeVL8bcF0GllRUvxtwXQaWVFzvmY0gUy6F-i3PMMtINvVk1FfxuDEc3MBEUs_MF6Mb&_nc_ohc=Q_tripheACwQ7kNvgEYQgd4&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYB1NT2pGZSvaIu-xpPnvW9_XEpaCXlEPUUr3Km8gSSFCw&oe=66D02866",
        "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428603936_371702929129200_1184689777793078171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHiAAqVe0aAEcUTslDNDdGtJAe-kvu90K0kB76S-73QrIcFe_6AE6c-AAUwmLsh7SfUsaDxlFQgxb-Dxy9MvCr&_nc_ohc=DY79bysyhJAQ7kNvgGpzgem&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYC8myNxY1jW5RiSTy_yZ7s7RKj5lx5ICTlAixi5TxWnjQ&oe=66D01039",
        "https://scontent.forn2-1.fna.fbcdn.net/v/t39.30808-6/428603936_371702929129200_1184689777793078171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHiAAqVe0aAEcUTslDNDdGtJAe-kvu90K0kB76S-73QrIcFe_6AE6c-AAUwmLsh7SfUsaDxlFQgxb-Dxy9MvCr&_nc_ohc=DY79bysyhJAQ7kNvgGpzgem&_nc_zt=23&_nc_ht=scontent.forn2-1.fna&cb_e2o_trans=t&oh=00_AYC8myNxY1jW5RiSTy_yZ7s7RKj5lx5ICTlAixi5TxWnjQ&oe=66D01039",
    ];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % carouselItems.length
            );
        }, 2000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [carouselItems.length]);

    return (
        <div className=" relative      ">
            <Carousel className="h-auto w-full">
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className={
                                currentIndex === index ? "block" : "hidden"
                            }
                        >
                            <img
                                src={item}
                                alt={`Carousel Image ${index + 1}`}
                                className="w-full h-lvh"
                            />
                        </CarouselItem>
                    ))}
            <FormBook />
                </CarouselContent>
            </Carousel>
        </div>
    );
}
