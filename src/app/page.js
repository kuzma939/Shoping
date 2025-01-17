"use client"; // Ensure this is a client-side component
import Layout from "./components/Layout"; // Import the Layout component
import Home from "./home"; // Import the Home co
//import { ThemeProvider } from "../app/contexts/ThemeContext"; // Додайте шлях до провайдера

export default function Page() {
  return (

      <Layout>
        <Home />
      </Layout>
  
  );
}
