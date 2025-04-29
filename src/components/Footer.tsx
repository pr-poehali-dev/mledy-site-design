import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-sm text-gray-600 hover:text-primary">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-gray-600 hover:text-primary">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-600 hover:text-primary">
                  Возврат
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/dresses" className="text-sm text-gray-600 hover:text-primary">
                  Платья
                </Link>
              </li>
              <li>
                <Link to="/category/blouses" className="text-sm text-gray-600 hover:text-primary">
                  Блузки
                </Link>
              </li>
              <li>
                <Link to="/category/shoes" className="text-sm text-gray-600 hover:text-primary">
                  Обувь
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-sm text-gray-600 hover:text-primary">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-600">8 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-600">info@mledy.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            <h3 className="text-lg font-medium mb-2">Способы оплаты</h3>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          © 2025 MLedy. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
