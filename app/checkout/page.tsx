"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
  Paper,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Collapse,
  Alert,
} from "@mui/material";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import TopFeatureBar from "../components/topfooter";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import dynamic from "next/dynamic"; 
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const FireIcon = dynamic(() => import("../components/freIcon"), { ssr: false });

export default function CheckoutPage() {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const handleSubmitOrder = () => {
    if (!acceptTerms) return;

    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      router.push("/");
    }, 3000);
  };

  const router = useRouter();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("promptpay");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0); // ส่วนลดเป็นตัวเลขบาท

  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal - discount;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "SALE10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
      alert("โค้ดไม่ถูกต้อง");
    }
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
      <div>
        <Box px={4} py={6} maxWidth="800px" mx="auto">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => router.push("/cart-summary")}
            sx={{ mb: 2 }}
          >
            ← ย้อนกลับไปตะกร้าสินค้า
          </Button>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            หน้าชำระเงิน (Checkout)
          </Typography>


          {/* สรุปรายการสินค้า */}
          <Paper variant="outlined" sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              สรุปรายการสินค้า
            </Typography>

            {cartItems.map((item, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    style={{ objectFit: "cover" }}
                  />
                  <Box>
                    <Typography>{item.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      จำนวน {item.quantity} ชิ้น
                    </Typography>
                  </Box>
                </Box>
                <Typography>
                  ฿{(item.price * item.quantity).toLocaleString()}
                </Typography>
              </Box>
            ))}

            {/* คูปอง */}
            <Box mt={2} display="flex" gap={2} alignItems="center">
              <TextField
                label="รหัสส่วนลด"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                size="small"
              />
              <Button variant="outlined" onClick={handleApplyCoupon}>
                ใช้โค้ด 
              </Button>

            </Box>

            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography>รวมสินค้า</Typography>
              <Typography>฿{subtotal.toLocaleString()}</Typography>
            </Box>
            {discount > 0 && (
              <Box display="flex" justifyContent="space-between">
                <Typography color="success.main">ส่วนลด</Typography>
                <Typography color="success.main">
                  -฿{discount.toLocaleString()}
                </Typography>
              </Box>
            )}
            <Box display="flex" justifyContent="space-between" mt={1}>
              <strong>รวมทั้งหมด</strong>
              <strong style={{ color: "red" }}>
                ฿{total.toLocaleString()}
              </strong>
            </Box>
          </Paper>

          {/* ข้อมูลการจัดส่ง */}
          <Paper variant="outlined" sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              ข้อมูลการจัดส่ง
            </Typography>
            <TextField
              fullWidth
              label="ชื่อ-นามสกุล"
              name="name"
              value={shippingInfo.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="เบอร์โทรศัพท์"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="ที่อยู่จัดส่ง"
              name="address"
              multiline
              rows={3}
              value={shippingInfo.address}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="หมายเหตุ (ถ้ามี)"
              name="note"
              value={shippingInfo.note}
              onChange={handleChange}
            />
          </Paper>

          {/* วิธีการชำระเงิน */}
          <Paper variant="outlined" sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              วิธีการชำระเงิน
            </Typography>
            <FormControl>
              <FormLabel>เลือกช่องทาง</FormLabel>
              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="promptpay"
                  control={<Radio />}
                  label="QR PromptPay"
                />
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="เก็บเงินปลายทาง (COD)"
                />
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="บัตรเครดิต / เดบิต"
                />
                <FormControlLabel
                  value="Banking"
                  control={<Radio />}
                  label="Mobie Banking"
                />
              </RadioGroup>
            </FormControl>
          </Paper>

          {/* ยืนยัน */}
          <FormControlLabel
          
            control={
              <Checkbox

                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
            }
            label="ฉันยอมรับเงื่อนไขและข้อตกลงในการสั่งซื้อ"
          />

          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!acceptTerms}
            onClick={handleSubmitOrder}
          >
            ยืนยันการสั่งซื้อ
          </Button>
          
        </Box>

        <div className=" absolute flex justify-center items-center w-full z-40">
          <Collapse in={orderSuccess}>
            <Box px={4} maxWidth="800px" mx="auto" mb={2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Alert
                  severity="success"
                  sx={{
                    border: "2px solid",
                    borderColor: "#ffff",
                    color: "#fff",
                    backgroundColor: "#221692",
                  }}
                >
                    
                  <span className="font-bold flex text-xl">
                     <FireIcon/> การสั่งซื้อของคุณเสร็จสมบูรณ์แล้ว! กำลังกลับไปหน้าแรก...<FireIcon/> 
                  </span>
                </Alert>
              </motion.div>
            </Box>
          </Collapse>
        </div>

        <motion.div className="w-full mt-40 md:mt-40" {...fadeInUp}>
          <TopFeatureBar />
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
}
