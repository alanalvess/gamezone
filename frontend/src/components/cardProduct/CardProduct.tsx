import {useNavigate} from "react-router-dom";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";

import type Product from "@/models/Product.ts";

interface CardProductProps {
    product: Product;
}

export default function CardProduct({product}: CardProductProps) {
    const navigate = useNavigate();

    function handleNavigateToGameDetail(id: number) {
        navigate(`/${id}`);
    }

    return (
        <>
            <Card className="w-full max-w-xs m-2 shadow-md mx-auto dark:bg-neutral-700">

                <div
                    className="w-full h-48 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-t-md overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                    />
                </div>

                <CardContent className="text-center">
                    <CardTitle className="text-base capitalize mb-2">{product.title}</CardTitle>
                    <p className="font-bold text-black mb-4 dark:text-neutral-100">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                    </p>
                </CardContent>

                <CardFooter className="flex flex-col justify-center gap-5">
                    <Button
                        className="text-white py-10"
                        onClick={() => handleNavigateToGameDetail(product.id)}
                    >
                        Ver detalhe
                    </Button>
                    <div></div>
                </CardFooter>
            </Card>

        </>
    );
}
