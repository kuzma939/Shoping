"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import validateRegisterForm from "../../utils/validateRegisterForm";
import { useLanguage } from "../../Functions/useLanguage";
export default function RegisterForm() {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    password: "",
    confirmPassword: "",
    
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Перевірка, що працює тільки на клієнті
  const { language } = useLanguage(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валідація форми
    const validationErrors = validateRegisterForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    console.log("Форма перед відправкою:", formData);

    try {
      console.log("Відправка даних для реєстрації:", formData);

      const res = await fetch(`/api/register?lang=${language}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Результат реєстрації:", data);

      if (res.ok) {
        // Збереження токена і userId в локальному сховищі
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        setMessage("Реєстрація успішна!");
        setFormData({ username: "", lastname: "", email: "", password: "" });

        // Перенаправлення на персональний кабінет
        router.push(`/dashboard/${data.userId}`);
      } else {
        setMessage(data.message || "Помилка реєстрації!");
      }
    } catch (error) {
      console.error("Помилка:", error);
      setMessage("Щось пішло не так...");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow-xl mt-12 mb-12 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isRegister ? "Реєстрація" : "Вхід"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="username"
                  placeholder="Ім'я"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Прізвище"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Адреса"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Оберіть країну</option>
                <option value="Україна">Україна</option>
                <option value="Польща">Польща</option>
                <option value="Німеччина">Німеччина</option>
                <option value="США">США</option>
              </select>
            </>
          )}

          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {isRegister && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Підтвердьте пароль"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          )}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            {isRegister ? "Зареєструватись" : "Увійти"}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <p
          className="text-center text-sm mt-2 cursor-pointer text-blue-600 hover:underline"
          onClick={() => {
            setIsRegister(!isRegister);
            setMessage(""); // Очищає повідомлення при перемиканні
          }}
        >
          {isRegister ? "Вже є акаунт? Увійдіть" : "Немає акаунту? Зареєструйтесь"}
        </p>
      </div>
    </div>
  );
}
  