import {useEffect, useState} from "react";

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

import {search} from "@/services/Api.ts";
import CardProduct from "@/components/cardProduct/CardProduct.tsx";
import type Product from "@/models/Product.ts";

export default function GamesSwitch() {
    const [products, setProducts] = useState<Product[]>([]);
    const [chunkSize, setChunkSize] = useState(products.length / 3);
    const slides = getSlides(products, chunkSize);

    function carrosselSize() {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) setChunkSize(1);
            else if (width < 992) setChunkSize(2);
            else setChunkSize(3);
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }

    function getSlides(products: Product[], chunk: number): Product[][] {
        const slides: Product[][] = [];

        for (let i = 0; i < products.length; i += chunk) {
            slides.push(products.slice(i, i + chunk));
        }

        return slides;
    }

    async function fetchSwitch() {
        try {
            await search('/products/all', (products: Product[]) => {
                const filtrados = products.filter(
                    (product) => product.category?.name === "Jogos de Switch"
                );
                setProducts(filtrados);
            });
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar os jogos de Switches");
        }
    }

    useEffect(
        () => {
            carrosselSize();
            (async () => {
                await fetchSwitch();
            })();
        }, []
    );

    return (
        <>
            <h2 className="text-center text-3xl font-bold !mt-10 border-b-4">
                Jogos | Switch
            </h2>

            <div className="flex justify-center w-full">
                {products.length > 0 ? (
                    <Carousel
                        opts={{loop: true}}
                        className="w-full max-w-5xl"
                    >
                        <CarouselContent className="w-full !my-5">
                            {slides.map((group, index) => (
                                <CarouselItem
                                    key={index}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
                                >
                                    {group.map((product) => (
                                        <CardProduct key={product.id} product={product}/>
                                    ))}
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="hidden md:flex text-white border-none hover:text-white"/>
                        <CarouselNext className="hidden md:flex text-white border-none hover:text-white"/>
                    </Carousel>
                ) : (
                    <p className="!pt-5 !pb-10">
                        O estoque de jogos de Switch se esgotou. Volte mais tarde!
                    </p>
                )}
            </div>
        </>
    );
}
