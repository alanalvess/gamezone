import Autoplay from "embla-carousel-autoplay"

import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";

import poster1 from "@/assets/img/posters/poster-1.jpg"
import poster2 from "@/assets/img/posters/poster-2.jpg"
import poster3 from "@/assets/img/posters/poster-3.jpg"

export default function Poster() {
    const posters = [poster1, poster2, poster3];

    return (
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({delay: 5000, stopOnInteraction: true}),
            ]}
            className="w-screen h-[60vh]"
        >
            <CarouselContent>
                {posters.map((poster, index) => (
                    <CarouselItem key={index}>
                        <div className="w-full h-[60vh]">
                            <img
                                src={poster}
                                alt={`poster-${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
