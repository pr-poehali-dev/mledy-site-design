import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ProductSlider from "@/components/ProductSlider";
import { Button } from "@/components/ui/button";
import { Truck, ArrowLeftRight, Award } from "lucide-react";

const newProducts = [
  {
    id: "1",
    name: "Элегантное платье с кружевными вставками",
    price: 3990,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8fc?q=80&w=500&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "2",
    name: "Лёгкая блузка из хлопка",
    price: 2490,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=500&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "3",
    name: "Джинсы с высокой посадкой",
    price: 3290,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "4",
    name: "Классическое пальто",
    price: 7990,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=500&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "5",
    name: "Кожаная сумка",
    price: 4990,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500&auto=format&fit=crop",
    isNew: true
  }
];

const saleProducts = [
  {
    id: "10",
    name: "Шелковая блузка с бантом",
    price: 2490,
    oldPrice: 3990,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=500&auto=format&fit=crop",
    isSale: true
  },
  {
    id: "11",
    name: "Юбка-карандаш",
    price: 1990,
    oldPrice: 3490,
    image: "https://images.unsplash.com/photo-1582142306909-195724d0b8d5?q=80&w=500&auto=format&fit=crop",
    isSale: true
  },
  {
    id: "12",
    name: "Классические туфли",
    price: 3990,
    oldPrice: 5990,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=500&auto=format&fit=crop",
    isSale: true
  },
  {
    id: "13",
    name: "Пуловер из мериносовой шерсти",
    price: 2990,
    oldPrice: 4490,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=500&auto=format&fit=crop",
    isSale: true
  },
  {
    id: "14",
    name: "Шарф кашемировый",
    price: 1490,
    oldPrice: 2490,
    image: "https://images.unsplash.com/photo-1520903920243-b579500504ec?q=80&w=500&auto=format&fit=crop",
    isSale: true
  }
];

const popularCategories = [
  {
    name: "Платья",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    link: "/category/dresses"
  },
  {
    name: "Блузки",
    image: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?q=80&w=600&auto=format&fit=crop",
    link: "/category/blouses"
  },
  {
    name: "Обувь",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=600&auto=format&fit=crop",
    link: "/category/shoes"
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroBanner />
        
        <section className="py-12">
          <div className="container">
            <ProductSlider 
              title="Новинки" 
              viewAll="/new" 
              products={newProducts} 
            />
          </div>
        </section>
        
        <section className="py-12 bg-accent">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Популярные категории</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularCategories.map((category) => (
                <a 
                  key={category.name} 
                  href={category.link}
                  className="group relative block overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 px-6 py-3 rounded-md text-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <h3 className="text-lg font-medium">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <ProductSlider 
              title="Распродажа" 
              viewAll="/sale" 
              products={saleProducts} 
            />
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Быстрая доставка</h3>
                <p className="text-sm text-gray-600">
                  Доставка по всей России от 1 до 5 дней
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ArrowLeftRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Удобный возврат</h3>
                <p className="text-sm text-gray-600">
                  Возврат товара в течение 14 дней
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Гарантия качества</h3>
                <p className="text-sm text-gray-600">
                  Только проверенные бренды и поставщики
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-primary text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Подпишитесь на рассылку</h2>
              <p className="mb-6">
                Будьте в курсе наших новинок и акций
              </p>
              <div className="w-full flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-grow px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
