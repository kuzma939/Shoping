import AllProducts from "../components/AllProducts/AllProducts";
import Layout from "../components/Layout";

export default function Products() {
    return (
      <div className="transition-colors">
       
            <Layout>
                <AllProducts />
            </Layout>
        </div>
    );
}