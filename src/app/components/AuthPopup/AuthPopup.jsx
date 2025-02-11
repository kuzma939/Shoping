"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPopup({ isOpen, onClose }) {
  const router = useRouter();

  // Закриття попапу при натисканні на ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
      aria-hidden="true"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative transform scale-95 transition-transform duration-300">
        <h2 className="text-xl font-bold text-center mb-4">Увійдіть або зареєструйтесь</h2>
        <div className="flex flex-col space-y-3">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => {
              router.push("/Login");
              onClose();
            }}
          >
            Увійти
          </button>
          <button
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            onClick={() => {
              router.push("/Register");
              onClose();
            }}
          >
            Зареєструватися
          </button>
          <button
            className="w-full bg-gray-300 py-2 rounded-md hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
}
