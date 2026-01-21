import {useEffect, useState} from 'react';
import { Link } from "react-router-dom"
import Helmet from "react-helmet";
import {Minus, Plus, Trash2} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"

import type Product from "@/models/Product.ts";

export default function Cart() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const dataLocalStorage = localStorage.getItem("@CART");
        if (dataLocalStorage) {
            const data: Product[] = JSON.parse(dataLocalStorage);
            const withQuantity = data.map((product: Product) => ({...product, quantity: product.quantity ?? 1}));
            setProducts(withQuantity);
        }
    }, [])

    function calcularSubtotal() {
        return products
            .reduce((acc, p) => acc + p.price * (p.quantity ?? 1), 0)
            .toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    }

    function updateLocalStorage(updated: Product[]) {
        setProducts(updated)
        localStorage.setItem("@CART", JSON.stringify(updated))
    }

    function increaseQuantity(id: number) {
        const updated = products.map((p) =>
            p.id === id ? {...p, quantity: (p.quantity ?? 1) + 1} : p
        )
        updateLocalStorage(updated)
    }

    function decreaseQuantity(id: number) {
        const updated = products.map((p) =>
            p.id === id && (p.quantity ?? 1) > 1
                ? {...p, quantity: (p.quantity ?? 1) - 1}
                : p
        )
        updateLocalStorage(updated)
    }

    function removeProduct(id: number) {
        const updated = products.filter((p) => p.id !== id)
        updateLocalStorage(updated)
    }

    function finalizarCompra() {
        setProducts([]);
        localStorage.setItem("@CART", JSON.stringify([]));

        alert("Compra realizada com sucesso!");
    }

    if (products.length === 0) {
        return (
            <>
                <Helmet>
                    <title>GameZone | Carrinho</title>
                </Helmet>

                <div className="flex flex-col items-center justify-center text-center !py-28 !px-4">
                    <h1 className="text-2xl font-bold text-muted-foreground !mb-4">
                        Sua sacola está vazia 🛒
                    </h1>
                    <p className="text-lg text-muted-foreground !mb-6">
                        Deseja adicionar algo ao carrinho?
                    </p>
                    <Link to="/">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white !px-6 !py-3 rounded-xl">
                            Clique aqui para ver os jogos
                        </Button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>GameZone | Carrinho</title>
            </Helmet>

            <div className="!pt-40 !px-4">
                <div className="w-full max-w-3xl !mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 !mb-6">
                        <h2 className="text-2xl font-bold">Sacola de compras</h2>
                        <span className="text-lg">
                            Subtotal: <strong>{calcularSubtotal()}</strong>
                        </span>
                    </div>

                    <div className="space-y-4">
                        {products.map((product) => (
                            <Card key={product.id} className="shadow-sm dark:bg-neutral-700 !m-5">
                                <CardContent className="flex gap-4 items-start sm:items-center !py-4">
                                    <div className="flex-shrink-0 flex justify-center items-center w-28">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full max-w-[140px] h-auto object-contain"
                                        />
                                    </div>

                                    <div className="flex-1 flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <strong className="font-semibold capitalize">
                                                {product.title}
                                            </strong>
                                            <p className="text-muted-foreground">R$ {product.price}</p>
                                        </div>

                                        <div className="flex flex-col items-center gap-2 !px-3">
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => decreaseQuantity(product.id)}
                                                    className="!bg-neutral-500"
                                                >
                                                    <Minus className="h-4 w-4"/>
                                                </Button>
                                                <span className="px-2 text-lg font-medium">{product.quantity}</span>
                                                <Button
                                                    size="icon"
                                                    variant="outline"
                                                    onClick={() => increaseQuantity(product.id)}
                                                    className="!bg-neutral-500"
                                                >
                                                    <Plus className="h-4 w-4"/>
                                                </Button>
                                            </div>

                                            <Button
                                                size="icon"
                                                variant="destructive"
                                                onClick={() => removeProduct(product.id)}
                                                className="!w-full !mt-2 !bg-red-800"
                                            >
                                                <Trash2 className="h-4 w-4"/>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white !mb-6"
                        onClick={finalizarCompra}
                    >
                        Finalizar Compra
                    </Button>
                </div>
            </div>
        </>
    )
}
