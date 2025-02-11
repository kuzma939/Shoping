import LoginForm from "../components/LoginForm/LoginForm";
import Layout from "../components/Layout";
import { Suspense } from "react";
export default function RegisterPage() {
  return (
    <Layout>
    <Suspense fallback={<div>Кабінет</div>}>
    <LoginForm />
    </Suspense>
  </Layout>
 
  );
}
