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
import CooPong from "./components/coopong";
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
      <div className="sticky  top-0 z-50 w-full">
        <Header />
      </div>

      <motion.div className="w-full" {...fadeInUp}>
        <Swiper />
      </motion.div>

      <motion.div className="w-full mt-6 transform scale-90" {...fadeInUp}>
        <BrandSlider />
      </motion.div>

      <motion.div className="w-full transform scale-85" {...fadeInUp}>
        <BrandBooth />
      </motion.div>

      <motion.div className="w-full transform scale-85" {...fadeInUp}>
        <ProductCategories />
      </motion.div>

      <motion.div className="w-full mt-16 md:mt-20" {...fadeInUp}>
        <MovingLine />
      </motion.div>

        <motion.div className="w-full pt-20" {...fadeInUp}>
        <CooPong />
      </motion.div>


      <motion.div className="w-full" {...fadeInUp}>
        <div className=" mb-14">
          <Shop />
          <ShopBlock />
          <ShopSet />
          <ShopEnd />
          <div className="flex justify-center  items-center border-solid border-neutral-300">
            <span className="font-semibold text-[22.818288803100586px] leading-[26.07804298400879px] text-[#221692]">
              ดูสินค้าทั้งหมด
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div className="w-full" {...fadeInUp}>
        <Presenter />
      </motion.div>

      <motion.div className="w-full  mt-10 md:mt-10" {...fadeInUp}>
        <PromoScrollList />
      </motion.div>

      <motion.div className="w-full mt-40 md:mt-40" {...fadeInUp}>
        <TopFeatureBar />
        <Footer />
      </motion.div>

      <BottomBar />
    </motion.div>
  );
}
