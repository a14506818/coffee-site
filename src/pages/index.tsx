// 📁 src/pages/index.tsx
import Head from "next/head";
// import Image from "next/image";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  const sampleProducts = [
    {
      name: "耶加雪菲 日曬豆",
      origin: "衣索比亞 Yirgacheffe",
      roast: "中淺焙",
      flavor: "莓果、花香",
      image: "/coffee1.jpg",
    },
    {
      name: "哥倫比亞 水洗豆",
      origin: "哥倫比亞 Huila",
      roast: "中焙",
      flavor: "核果、焦糖",
      image: "/coffee2.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>自家烘焙咖啡豆｜Your Brand</title>
      </Head>

      <Header />

      <section className="text-center py-16 px-4 bg-white">
        <h1 className="text-4xl font-bold mb-4">用心烘焙每一顆咖啡豆</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          我們選用全球優質生豆，小批量烘焙，保留風味層次，讓每一杯都值得細細品味。
        </p>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">商品精選</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">聯絡我們</h2>
        <div className="max-w-xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
