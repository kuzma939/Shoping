"use client"; // Ensure this is a client-side component
import Layout from "./components/Layout"; // Import the Layout component
import Home from "./home"; // Import the Home component
import Head from "next/head";
export default function Page() {
  return (
    <>
      <Head>
        <title>Latore Atelier – Home</title>
        <meta
          name="description"
          content="Discover exclusive fashion collections at Latore Atelier."
        />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}