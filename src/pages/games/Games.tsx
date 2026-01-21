import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import {search} from "@/services/Api.ts";
import CardProduct from "@/components/cardProduct/CardProduct.tsx";
import type Product from "@/models/Product.ts";
import bannerGames from '@/assets/img/banner-games.jpg';

export default function Games() {

    const [allGames, setAllGames] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    async function searchProducts() {
        try {
            await search("/products/all", setAllGames);
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar os produtos");
        }
    }

    useEffect(
        () => {
            (async () => {
                await searchProducts();
            })();
        }, []
    );

    useEffect(() => {
        const onlyJogos = allGames.filter(
            (product) => product.category?.name !== "Consoles"
        );

        if (selectedCategory === "all") {
            setProducts(onlyJogos);
        } else {
            const filtrados = onlyJogos.filter(
                (product) => product.category?.name === selectedCategory
            );
            setProducts(filtrados);
        }
    }, [selectedCategory, allGames]);

    return (
        <>
            <Helmet>
                <title>GameZone | Games</title>
            </Helmet>

            <section
                className="relative flex items-center justify-center h-[350px] bg-cover bg-center rounded-2xl shadow-md"
                style={{
                    backgroundImage: `url(${bannerGames})`
                }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-lg">
                    Aqui você encontra os melhores jogos
                </h2>
            </section>

            <div className="flex justify-end !mt-6 !px-6 !text-neutral-300">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="!text-neutral-300">
                        <SelectItem value="all" className="!p-2">Todos os jogos</SelectItem>
                        <SelectItem value="Jogos de Playstation" className="!p-3">Jogos de Playstation</SelectItem>
                        <SelectItem value="Jogos de Xbox" className="!p-3">Jogos de Xbox</SelectItem>
                        <SelectItem value="Jogos de Switch" className="!p-3">Jogos de Switch</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full justify-items-center md:!px-32 !py-20">
                {products.length > 0 ? (
                    products.map((game) => <CardProduct key={game.id} product={game} />)
                ) : (
                    <p className="!pt-5 !pb-10">
                        O estoque de jogos se esgotou. Volte mais tarde!
                    </p>
                )}
            </div>
        </>
    );
}
