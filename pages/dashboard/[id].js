import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <p>Завантаження...</p>;
  }
  return (
    <div>
      <h1>Персональний кабінет</h1>
      <p>Ваш ID: {id}</p>
    </div>
  );
}
