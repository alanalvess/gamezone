import type Category from "@/models/Category.ts";

export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: Category | null;
    quantity?: number;
}