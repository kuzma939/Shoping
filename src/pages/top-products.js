"use client"; 
import { useParams } from "next/navigation"; 

export default function TopProductDetails() {
  // Получаем ID из параметров маршрута
  const { id } = useParams();

  // Список продуктов с их ID, названиями и описаниями
  const products = [
    { id: "1", name: "Product 1", description: "Description for Product 1" },
    { id: "2", name: "Product 2", description: "Description for Product 2" },
    { id: "3", name: "Product 3", description: "Description for Product 3" },
    { id: "4", name: "Product 4", description: "Description for Product 4" },
  ];
  // Находим продукт по его ID из URL
  const product = products.find((item) => item.id === id);
  // Если продукт не найден, выводим сообщение об ошибке
  if (!product) {
    return <div>Product not found</div>; // Сообщение, если продукт отсутствует
  }
  // Отображаем информацию о найденном продукте
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
    </div>
  );
}
