import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthPopup from "../AuthPopup/AuthPopup";

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [id, setId] = useState(null); // ✅ Використовуємо `id`, бо у нас `[id].js`
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedId = localStorage.getItem("userId"); // ✅ Переконайся, що `userId` збережено правильно

    if (token && storedId) {
      setIsAuth(true);
      setId(storedId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuth(false);
    setId(null);
    router.push("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between p-4 bg-white shadow-md z-50">
        <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
          LATORE ATELIER
        </div>
        <div className="flex items-center space-x-4">
          {isAuth ? (
            <>
              {/* ✅ Передаємо `id` замість `userId` */}
              <button onClick={() => router.push(`/dashboard/${id}`)}>👤 Кабінет</button>
              <button onClick={handleLogout}>Вийти</button>
            </>
          ) : (
            <button onClick={() => setIsPopupOpen(true)} className="p-2 border rounded-full">
              🔑 Вхід/Реєстрація
            </button>
          )}
        </div>
      </nav>

      <AuthPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
