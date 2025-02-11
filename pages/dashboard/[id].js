
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`/api/user/${id}`)
        .then((res) => {
          console.log("Статус відповіді:", res.status);
          return res.json();
        })
        .then((data) => {
          if (data.message) {
            console.error("Помилка з API:", data.message);
            setError(data.message);
          } else {
            setUser(data);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Помилка запиту:", err);
          setError("Помилка завантаження даних користувача!");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p className="text-center text-lg font-semibold">Завантаження...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center">👤 Особистий кабінет</h2>
        <p className="mt-2 text-lg font-medium text-center">Ваш ID: {user.id}</p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Особиста інформація</h3>
          <p>📛 Ім'я: {user.username} {user.lastname}</p>
          <p>📧 Email: {user.email}</p>
          <p>📞 Телефон: {user.phone}</p>
          <p>📍 Адреса: {user.address}, {user.country}</p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition"
        >
          На головну
        </button>
      </div>
    </div>
  );
}

{/*import { useRouter } from "next/router";

export default function UserDashboard() {
  const router = useRouter();
  const { id } = router.query; // Отримуємо userId з URL

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold">👤 Особистий кабінет</h2>
        <p className="mt-2">Ваш ID: {id}</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          На головну
        </button>
      </div>
    </div>
  );
}*/}