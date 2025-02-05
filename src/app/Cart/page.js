import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout";
import { Suspense } from "react";
export default function CartPage() {
  return (
    <Layout>
    <Suspense fallback={<div>Корзина</div>}>
    <Cart />
    </Suspense>
  </Layout>
 
  );
}