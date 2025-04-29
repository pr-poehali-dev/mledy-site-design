import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductSliderProps {
  title: string;
  viewAll?: string;
  products: Product[];
}

export default function ProductSlider({ title, viewAll, products }: ProductSliderProps) {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -270, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 270, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {viewAll && (
          <a href={viewAll} className="text-sm text-primary hover:underline">
            Смотреть все
          </a>
        )}
      </div>

      <div className="relative group">
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              className="min-w-[230px] flex-shrink-0 snap-start"
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={scrollRight}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
