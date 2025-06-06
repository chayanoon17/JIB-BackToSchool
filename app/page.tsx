"use client";
import React from "react";
import Swiper from "./components/swiper";
import Header from "./components/header";
import BrandSlider from "./components/brandslider";
import BrandBooth from "./components/brandbooth";
import ProductCategories from "./components/product";
import MovingLine from "./components/moving";
import Shop from "./components/shop";
import ShopBlock from "./components/shopblock";
import ShopSet from "./components/shopset";
import ShopEnd from "./components/shopend";
import Presenter from "./components/presenter";
import PromoScrollList from "./components/promo";
import Footer from "./components/footer";
import TopFeatureBar from "./components/topfooter";
import BottomBar from "./components/bottombar";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <Header />

</div>

      <motion.div className="w-full" {...fadeInUp}>
        <Swiper />
      </motion.div>

      <motion.div className="w-full mt-4 sm:mt-4 md:mt-4" {...fadeInUp}>
        <BrandSlider />
      </motion.div>

      <motion.div className="w-full mt-10 md:mt-16" {...fadeInUp}>
        <BrandBooth />
      </motion.div>

      <motion.div className="w-full mt-6 md:mt-12 " {...fadeInUp}>
        <ProductCategories />
      </motion.div>

      <motion.div className="w-full mt-16 md:mt-20" {...fadeInUp}>
        <MovingLine />
      </motion.div>

      <motion.div
        className="w-full pt-20 px-4 py-6 sm:px-6 md:px-8 lg:px-16 xl:px-20"
        {...fadeInUp}
      >
        <div className="w-full px-4">
          <Shop />
        <ShopBlock />
        <ShopSet />
        <ShopEnd />
        </div>
      </motion.div>

      <motion.div className="w-full mt-16 md:mt-20" {...fadeInUp}>
        <Presenter />
      </motion.div>

      <motion.div className="w-full mt-16 md:mt-20" {...fadeInUp}>
        <PromoScrollList />
      </motion.div>

      <motion.div className="w-full mt-16 md:mt-20" {...fadeInUp}>
        <TopFeatureBar />
        <Footer />
      </motion.div>

      <BottomBar />
    </motion.div>
  );
}
