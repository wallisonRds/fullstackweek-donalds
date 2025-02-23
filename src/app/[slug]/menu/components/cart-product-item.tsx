import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import formatCurrency from "@/helpers/format-currency";

import { CartProduct } from "../contexts/card";

interface CartItemProps {
    product: CartProduct;
}


const CartProductItem = ({ product }: CartItemProps) => {
    return (
        <div className="flex items-center justify-between">
              {/* ESQUERDA */}
            <div className="flex items-center gap-3">
                <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
                    <Image src={product.imageUrl} alt={product.name} fill />
                </div>
                <div className="space-y-1">
                    <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
                    <p className="text-sm font-semilbold">{formatCurrency(product.price)}</p>
                    {/* QUANTIDADE */}
                    <div className="flex items-center gap-1 text-center">
                        <Button className="w-7 h-7 rounded-lg" variant="outline">
                            <ChevronLeftIcon />
                        </Button>
                        <p className="h-7 w-7">{product.quantity}</p>
                        <Button className="w-7 h-7 rounded-lg" variant="destructive">
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </div>

            </div>
            {/* BOTÃO DE DELETAR */}
            <Button className="h-7 w-7 rounded-lg" variant="outline">
                <TrashIcon />
            </Button>
        </div>
    );
}

export default CartProductItem;