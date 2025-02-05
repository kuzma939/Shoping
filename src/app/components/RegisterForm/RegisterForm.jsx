"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Видалено імпорт Google OAuth
import validateRegisterForm from "../../utils/validateRegisterForm"; // Імпорт функції валідації

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateRegisterForm(formData);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
  
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (res.ok) {
        // Збереження userId у локальному сховищі
        localStorage.setItem("userId", data.userId);
  
        setMessage("Реєстрація успішна!");
        setFormData({ username: "", lastname: "", email: "", password: "" });
      } else {
        setMessage(data.message || "Помилка реєстрації!");
      }
    } catch (error) {
      setMessage("Щось пішло не так...");
    }
  };
  
  return (
    <div className="flex justify-center items-center bg-[#f5e7da] min-h-screen dark:bg-[#2e1f14]">
      <div className="bg-[#fcf8f3] dark:bg-[#f5e0da20] dark:text-gray-100 shadow-2xl mt-12 mb-12 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Реєстрація</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Ім'я користувача:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className={`w-full mt-1 p-2 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Прізвище:
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className={`w-full mt-1 p-2 border ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full mt-1 p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Пароль:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full mt-1 p-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Зареєструватись
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}

        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">
            Або зареєструйтесь через:
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Закоментовано Google OAuth */}
            {/* <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            /> */}
            <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <FaFacebook className="h-6 w-6" />
            </button>
            <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
              <FaInstagram className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
