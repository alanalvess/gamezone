import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import CardProduct from '@/components/cardProduct/CardProduct.tsx';

import {search} from "@/services/Api.ts";
import type Product from "@/models/Product.ts";
import bannerConsole from '@/assets/img/banner-console.jpg';

export default function Consoles() {

    const [products, setProducts] = useState<Product[]>([]);

    async function searchProducts() {
        try {
            await search("/products/all", (products: Product[]) => {
                const filtrados = products.filter(
                    (product) => product.category?.name === "Consoles"
                );
                setProducts(filtrados);
            });
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar produtos");
        }
    }

    useEffect(
        () => {
            (async () => {
                await searchProducts();
            })();
        }, []
    );

    return (
        <>
            <Helmet>
                <title>GameZone | Consoles</title>
            </Helmet>

            <section
                className="relative flex items-center justify-center h-[350px] bg-cover bg-center rounded-2xl shadow-md"

                style={{backgroundImage: `url(${bannerConsole})`}}
            >
                <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
                    Aqui você encontra os melhores consoles
                </h2>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full justify-items-center md:!px-32 !py-20">
                {products.length > 0 ? (
                    products.map(product => (
                        <CardProduct key={product.id} product={product}/>
                    ))
                ) : (
                    <p className="!pt-5 !pb-10">
                        O estoque de console de jogos se esgotou. Volte mais tarde!
                    </p>
                )}
            </div>
        </>
    );
}
