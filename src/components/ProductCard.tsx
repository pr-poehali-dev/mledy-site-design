import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  className?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  isNew,
  isSale,
  className,
}: ProductCardProps) {
  return (
    <div className={cn("group relative", className)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center transition-colors hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
        
        {(isNew || isSale) && (
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {isNew && (
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary text-white rounded">
                Новинка
              </span>
            )}
            {isSale && (
              <span className="inline-block px-2 py-1 text-xs font-medium bg-destructive text-white rounded">
                Скидка
              </span>
            )}
          </div>
        )}
        
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <Link
            to={`/product/${id}`}
            className="text-sm font-medium text-white hover:underline"
          >
            Быстрый просмотр
          </Link>
        </div>
      </div>
      
      <div className="mt-3 space-y-1">
        <Link to={`/product/${id}`} className="text-sm hover:text-primary">
          {name}
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-medium">{price} ₽</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
