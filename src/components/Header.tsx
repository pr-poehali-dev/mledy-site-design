import React from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  {
    title: "Одежда",
    items: ["Платья", "Блузки", "Юбки", "Брюки", "Верхняя одежда"],
  },
  {
    title: "Обувь",
    items: ["Туфли", "Ботинки", "Кроссовки", "Сандалии"],
  },
  {
    title: "Аксессуары",
    items: ["Сумки", "Украшения", "Шарфы", "Ремни"],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">MLedy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            {showSearch ? (
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="w-full pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            ) : (
              <div 
                className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-4 w-4" />
                <span>Поиск по каталогу</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">8 (800) 123-45-67</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100">
        <div className="container">
          <NavigationMenu className="max-w-none justify-start py-1">
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category.title}>
                  <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {category.items.map((item) => (
                        <ListItem key={item} title={item} href="#" />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link to="/new" className="block py-2 px-4 text-sm hover:text-primary">
                  Новинки
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/sale" className="block py-2 px-4 text-sm hover:text-primary">
                  Распродажа
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
