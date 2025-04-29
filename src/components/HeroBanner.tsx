import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BannerItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1614093302611-8364e41f54bf?q=80&w=1200&auto=format&fit=crop",
    title: "Новая коллекция",
    subtitle: "Весна-Лето 2025",
    cta: "Смотреть коллекцию",
    link: "/collection/spring-summer-2025",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1200&auto=format&fit=crop",
    title: "Распродажа",
    subtitle: "Скидки до 50%",
    cta: "Перейти к товарам",
    link: "/sale",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1574015974293-817f0ebebb68?q=80&w=1200&auto=format&fit=crop",
    title: "Аксессуары",
    subtitle: "Дополните свой образ",
    cta: "Выбрать аксессуары",
    link: "/category/accessories",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === bannerItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {bannerItems.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="relative h-full">
            <div className="absolute inset-0 bg-black/30" />
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 animate-fade-in">
                  {item.subtitle}
                </p>
                <Button asChild size="lg" className="animate-fade-in">
                  <a href={item.link}>{item.cta}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm border-white/30 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm border-white/30 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
