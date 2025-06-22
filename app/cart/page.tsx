"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "../components/header";
import Topfooter from "../components/topfooter";
import Footer from "../components/footer";
import { Alert } from "@mui/material";
import { useCart } from "../context/CartContext";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  TextField,
  Collapse,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MessageIcon from "@mui/icons-material/Message"; 
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const LoadingAnimation = dynamic(() => import("../components//loadinganimation"), { ssr: false });



const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};
const initialFavorites = 130;

export default function Cart() {
  const router = useRouter();
  
  const [quantity, setQuantity] = useState(1);
  const thumbnails = [
    "rtxti.png",
    "rtx1.png",
    "rtx2.png",
    "rtx3.png",
    "rtx4.png",
    "rtx5.png",
    "rtx6.png",
    "rtx7.png",
    "rtxred.png",
  ];
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "product-001",
      name: "GALAX RTX 3060",
      price: 9990,
      image: `/images/shop/${mainImage}`,
      quantity: quantity,
    });
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };

  const handleQtyChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const [liked, setLiked] = useState(false);
  const [favorites, setFavorites] = useState(initialFavorites);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setFavorites((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      <div className="flex justify-center items-center top-100 absolute z-60 w-full">
        <Collapse in={open}>
          <Alert
            severity="success"
            sx={{
              width: 300,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "#FFF",
              backgroundColor: "#221692",
            }}
          >
           <LoadingAnimation />
          </Alert>
        </Collapse>
      </div>

      <div className=" w-full">
        <Box px={{ xs: 2, sm: 4, md: 6, lg: 10 }} py={{ xs: 4, md: 6 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 2, md: 4 },
            }}
          >
            {/* Image Section */}
            <Paper elevation={3} sx={{ p: 2 }}>
              <motion.div
                key={mainImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/shop/${mainImage}`}
                  alt="Product"
                  width={500}
                  height={400}
                  style={{
                    width: "100%",
                    maxHeight: 600,
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              </motion.div>

              {/* Thumbnails */}
              <Box display="flex" gap={1} mt={2} flexWrap="wrap">
                {thumbnails.map((img, i) => (
                  <Box
                    key={i}
                    onClick={() => setMainImage(img)}
                    sx={{
                      border:
                        mainImage === img
                          ? "2px solid #1976d2"
                          : "1px solid #ccc",
                      cursor: "pointer",
                      borderRadius: 1,
                      overflow: "hidden",
                      width: 80,
                      height: 60,
                    }}
                  >
                    <Image
                      src={`/images/shop/${img}`}
                      alt={`Thumbnail ${i}`}
                      width={80}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* Info Section */}
            <Box>
              <span className="text-2xl font-bold">
                VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060<br></br>
              </span>

              <span className="text-xs font-bold mb-1">
                ขายแล้ว 70 ชิ้น | ยังไม่มีคะแนน
              </span>

              <Typography
                variant="h4"
                color="error"
                fontWeight="bold"
                gutterBottom
                mb={5}
              >
                ฿9,990
              </Typography>
              <h4 className="text-sm font-bold mb-2">
                การผ่อนชำระ: 12x ฿833.25
              </h4>
              <Typography variant="body1" mb={3}>
                การจัดส่ง: 🚚 ได้รับสินค้าภายใน 24 - 28 มิ.ย.
              </Typography>
              <Typography variant="body1" mb={3}>
                ช้อปอย่างมั่นใจ: ✅ เก็บเงินปลายทาง
              </Typography>

              {/* Quantity Selector */}
              <Box
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                rowGap={1}
                mb={2}
              >
                <Typography mr={2}>จำนวน:</Typography>
                <Button onClick={() => handleQtyChange(-1)}>-</Button>
                <TextField
                  value={quantity}
                  size="small"
                  sx={{ width: 60, mx: 1 }}
                  inputProps={{ style: { textAlign: "center" } }}
                />
                <Button onClick={() => handleQtyChange(1)}>+</Button>
                <Typography ml={2}>มีสินค้า 330 ชิ้น</Typography>
              </Box>

              {/* Action Buttons */}
              <Box
                display="flex"
                gap={2}
                mb={2}
                flexDirection={{ xs: "column", sm: "row" }}
              >
                <Button
                  onClick={handleAddToCart}
                  variant="outlined"
                  startIcon={<ShoppingCartIcon />}
                  size="large"
                  color="error"
                  fullWidth={true}
                >
                  เพิ่มไปยังรถเข็น
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  fullWidth={true}
                   onClick={() => {
              addToCart({
                id: "product-001",
                name: "GALAX RTX 3060",
                price: 9990,
                image: `/images/shop/${mainImage}`,
                quantity: quantity,
              });
              router.push("/checkout");
                }}
                >
                  ซื้อสินค้า
                </Button>
              </Box>

              {/* Favorite + Share */}
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <IconButton onClick={handleLikeToggle}>
                  <FavoriteBorderIcon
                    onClick={() => setLiked(!liked)}
                    sx={{
                      color: liked ? "red" : "inherit",
                      transition: "color 0.3s",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
                <Typography>{favorites} (Favorite)</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2} >
                <span className="font-bold text-sm"> แชร์:</span>
                <IconButton sx={{ bgcolor: "#0084FF", color: "white" }}>
                  <MessageIcon />
                </IconButton>

                <IconButton sx={{ bgcolor: "#3b5998", color: "white" }}>
                  <FacebookIcon />
                </IconButton>

                <IconButton sx={{ bgcolor: "#E60023", color: "white" }}>
                  <PinterestIcon />
                </IconButton>

                <IconButton sx={{ bgcolor: "#1DA1F2", color: "white" }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Recommended Products */}
        <Box px={{ xs: 2, sm: 4, md: 6, lg: 10 }} py={6}>
          <span className="font-bold text-2xl mb-2">สินค้าที่แนะนำ</span>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={3}
          >
            {[
              {
                id: 1,
                name: "คีย์แคป LOGA X PimDit : Thai Mutelu keycap set",
                price: 1780,
                image: "/images/shop/loga.png",
              },
              {
                id: 2,
                name: "เมาส์เกมมิ่งไร้สาย Glorious รุ่น Model O Wireless ประกันศูนย์ 2 ปี",
                price: 3580,
                image: "/images/shop/mosuegame.png",
              },
              {
                id: 3,
                name: "กล่องสุ่มคีย์แคป LOGA Mutelu Blindbox series keycap",
                price: 11200,
                image: "/images/shop/caploga.png",
              },
              {
                id: 4,
                name: "คสคอม HAVN HS 420 VGPU ประกันศูนย์ 3 ปี",
                price: 9940,
                image: "/images/shop/casecom.png",
              },
            ].map((product) => (
              <Paper key={product.id} elevation={2} sx={{ p: 2 }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={220}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <span className="font-bold">{product.name}</span>
                <Typography color="error">
                  ฿{product.price.toLocaleString()}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 1 }}
                  onClick={() => {
                    addToCart({
                      id: `product-${product.id}`,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    });
                    setOpen(true);
                    setTimeout(() => setOpen(false), 3000);
                  }}
                >
                  เพิ่มลงรถเข็น
                </Button>
              </Paper>
            ))}
          </Box>
        </Box>
      </div>

      <motion.div className="w-full" {...fadeInUp}>
        <Topfooter />
      </motion.div>
      <motion.div className="w-full" {...fadeInUp}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}
