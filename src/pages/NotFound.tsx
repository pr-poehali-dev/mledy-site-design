import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-20">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold mt-6 mb-3">Страница не найдена</h2>
            <p className="text-gray-600 mb-8">
              К сожалению, страница, которую вы ищете, не существует или была перемещена.
            </p>
            <Button asChild size="lg">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
