import RegisterForm from "../components/RegisterForm/RegisterForm";
import Layout from "../components/Layout";
import { Suspense } from "react";
export default function RegisterPage() {
  return (
    <Layout>
    <Suspense fallback={<div>Реєстрація</div>}>
    <RegisterForm />
    </Suspense>
  </Layout>
 
  );
}
