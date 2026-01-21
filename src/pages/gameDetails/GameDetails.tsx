import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import { Button } from "@/components/ui/button"

import {search} from "@/services/Api.ts";
import type Product from "@/models/Product.ts";
import {CartContext} from "@/contexts/CartContext";

export default function GameDetails() {
    const [product, setProduct] = useState<Product>({} as Product);

    const {id} = useParams<{ id: string }>();

    const {insertInToCart} = useContext(CartContext);

    async function searchProduct() {
        try {
            await search(`/products/${id}`, setProduct);
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar os produtos");
        }
    }

    function handlePutOnCart(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        insertInToCart(product);
        alert('Jogo adicionado ao carrinho!')
    }

    useEffect(
        () => {
            (async () => {
                await searchProduct();
            })();
        },
    );

    return (
        <div className="!pt-40 !px-4">
            <div className="max-w-6xl !mx-auto !mx-40 grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
                <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-xs sm:max-w-md w-full h-auto object-contain rounded-lg shadow-md"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold capitalize">{product.title}</h2>
                    <p className="text-muted-foreground">{product.description}</p>
                    <p className="text-3xl font-semibold">R$ {product.price}</p>

                    <Button
                        onClick={handlePutOnCart}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-lg !py-6"
                    >
                        Adicionar ao Carrinho
                    </Button>
                </div>
            </div>
        </div>
    );
}
