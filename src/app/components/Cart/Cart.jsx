"use client";

import { useState, useEffect } from "react";

import { useLanguage } from "../../Functions/useLanguage";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]); // Товари у кошику
  const [message, setMessage] = useState(""); // Повідомлення для користувача
  const [loading, setLoading] = useState(false); // Стан завантаження
  const { language } = useLanguage(); // Поточна мова з хука useLanguage()

  // Генерація унікального sessionId
  const generateSessionId = () => "_" + Math.random().toString(36).substr(2, 9);

  useEffect(() => {
    // Отримуємо або створюємо sessionId
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem("sessionId", sessionId);
    }

    // Функція для отримання товарів у кошику
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const userId = localStorage.getItem("userId"); // Може бути null
        const sessionId = localStorage.getItem("sessionId"); // Завжди існує
        const res = await fetch(
          `/api/cart?userId=${userId || ""}&sessionId=${sessionId}&lang=${language}`
        );
        const data = await res.json();
        if (res.ok) {
          setCartItems(data.cart); // Встановлюємо товари у кошик
        } else {
          setMessage(data.message || "Не вдалося завантажити корзину.");
        }
      } catch (error) {
        setMessage("Сталася помилка при завантаженні корзини.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems(); // Викликаємо функцію для отримання товарів
  }, [language]); // Викликаємо знову при зміні мови

  // Оновлення кількості товару
  const handleQuantityChange = async (cartId, quantity) => {
    if (quantity < 1) {
      setMessage("Кількість не може бути менше 1.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/cart`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, quantity }),
      });
      const data = await res.json();
      if (res.ok) {
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === cartId ? { ...item, quantity } : item
          )
        );
        setMessage(data.message);
      } else {
        setMessage(data.message || "Не вдалося оновити кількість.");
      }
    } catch (error) {
      setMessage("Сталася помилка при оновленні кількості.");
    } finally {
      setLoading(false);
    }
  };

  // Видалення товару з кошика
  const handleRemoveItem = async (cartId) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId }),
      });
      const data = await res.json();
      if (res.ok) {
        setCartItems((prev) => prev.filter((item) => item.id !== cartId));
        setMessage(data.message);
      } else {
        setMessage(data.message || "Не вдалося видалити товар.");
      }
    } catch (error) {
      setMessage("Сталася помилка при видаленні товару.");
    } finally {
      setLoading(false);
    }
  };

  // Розрахунок загальної суми товарів у кошику
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Рендеринг компоненту
  return (
    <div className="min-h-screen bg-gray-100 py-6 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Ваша корзина
        </h1>
        {message && <p className="text-center text-red-500">{message}</p>}
        {loading ? (
          <p className="text-center">Завантаження...</p>
        ) : cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 dark:text-gray-200">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ціна: {item.price} грн
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center border rounded-md dark:bg-gray-700 dark:text-gray-200"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Загальна сума: {calculateTotal()} грн
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Оформити замовлення
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Ваша корзина порожня.
          </p>
        )}
      </div>
    </div>
  );
}

{/*"use client";

import { useState, useEffect } from "react";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]); // Товари у кошику
  const [message, setMessage] = useState(""); // Повідомлення для користувача
  const [loading, setLoading] = useState(false); // Стан завантаження

  // Генерація унікального sessionId
  const generateSessionId = () => "_" + Math.random().toString(36).substr(2, 9);

  useEffect(() => {
    // Отримуємо або створюємо sessionId
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem("sessionId", sessionId);
    }

    // Функція для отримання товарів у кошику
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const userId = localStorage.getItem("userId"); // Може бути null
        const sessionId = localStorage.getItem("sessionId"); // Завжди існує
        const res = await fetch(
          `/api/cart?userId=${userId || ""}&sessionId=${sessionId}`
        );
        const data = await res.json();
        if (res.ok) {
          setCartItems(data.cart); // Встановлюємо товари у кошик
        } else {
          setMessage(data.message || "Не вдалося завантажити корзину.");
        }
      } catch (error) {
        setMessage("Сталася помилка при завантаженні корзини.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems(); // Викликаємо функцію для отримання товарів
  }, []);

  // Оновлення кількості товару
  const handleQuantityChange = async (cartId, quantity) => {
    if (quantity < 1) {
      setMessage("Кількість не може бути менше 1.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/cart`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, quantity }),
      });
      const data = await res.json();
      if (res.ok) {
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === cartId ? { ...item, quantity } : item
          )
        );
        setMessage(data.message);
      } else {
        setMessage(data.message || "Не вдалося оновити кількість.");
      }
    } catch (error) {
      setMessage("Сталася помилка при оновленні кількості.");
    } finally {
      setLoading(false);
    }
  };

  // Видалення товару з кошика
  const handleRemoveItem = async (cartId) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId }),
      });
      const data = await res.json();
      if (res.ok) {
        setCartItems((prev) => prev.filter((item) => item.id !== cartId));
        setMessage(data.message);
      } else {
        setMessage(data.message || "Не вдалося видалити товар.");
      }
    } catch (error) {
      setMessage("Сталася помилка при видаленні товару.");
    } finally {
      setLoading(false);
    }
  };

  // Розрахунок загальної суми товарів у кошику
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Рендеринг компоненту
  return (
    <div className="min-h-screen bg-gray-100 py-6 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Ваша корзина
        </h1>
        {message && <p className="text-center text-red-500">{message}</p>}
        {loading ? (
          <p className="text-center">Завантаження...</p>
        ) : cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.category}
                   
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 dark:text-gray-200">
                      {item.category}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ціна: {item.price} грн
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center border rounded-md dark:bg-gray-700 dark:text-gray-200"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Загальна сума: {calculateTotal()} грн
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Оформити замовлення
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Ваша корзина порожня.
          </p>
        )}
      </div>
    </div>
  );
}
*/}