"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Paper,
  TextField,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../components/header";
import { motion } from "framer-motion";
import Topfooter from "../components/topfooter";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function CartSummary() {
  const router = useRouter();
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const { increaseQuantity, decreaseQuantity } = useCart();


  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allIds = cartItems.map((item) => item.id);
      setSelectedItems(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  useEffect(() => {
  setSelectAll(selectedItems.length === cartItems.length && cartItems.length > 0);
}, [selectedItems, cartItems]);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <div className="sticky top-0 z-50 w-full">
          <Header />
        </div>
        <div className="w-full h-full">
          <Box px={{ xs: 2, md: 4 }} py={3}>
             <Button
              variant="outlined"
              color="primary"
              onClick={() => router.push("/cart")}
              sx={{ mb: 2 }}
            >
              ← ย้อนกลับ
            </Button>
            <Typography variant="h5" fontWeight="bold" mb={2}></Typography>
            <span className="text-2xl font-bold">ตะกร้าสินค้า </span>
            {cartItems.length === 0 ? (
              <span className="text-sm font-light">ยังไม่มีสินค้าในตะกร้า</span>
            ) : (
              <>
                <Paper variant="outlined">
                  {cartItems.map((item, index) => (
                    <Box key={index} px={2} py={2}>
                      <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        alignItems="center"
                        justifyContent="space-between"
                        gap={2}
                        flexWrap="wrap"
                      >
                        {/* Checkbox */}
                        <Checkbox
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleItemSelect(item.id)}
                        />

                        {/* Product Image */}
                        <Box>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            style={{ objectFit: "cover", borderRadius: 8 }}
                          />
                        </Box>

                        {/* Product Info */}
                        <Box flex="1" minWidth={120}>
                          <Typography>{item.name}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            จำนวนในคลัง:
                          </Typography>
                        </Box>

                        {/* Unit Price */}
                        <Box minWidth={80}>
                          <Typography>
                            ฿{item.price.toLocaleString()}
                          </Typography>
                        </Box>

                        {/* Quantity Controls */}
                        <Box display="flex" alignItems="center" minWidth={120}>
                        <Button size="small" onClick={() => decreaseQuantity(item.id)}>-</Button>
                        <TextField
                          value={item.quantity}
                          size="small"
                          sx={{ width: 50, mx: 1 }}
                          inputProps={{ style: { textAlign: "center" }, readOnly: true }}
                        />
                        <Button size="small" onClick={() => increaseQuantity(item.id)}>+</Button>
                      </Box>

                        {/* Total Price */}
                        <Box minWidth={100}>
                          <Typography color="error" fontWeight="bold">
                            ฿{(item.price * item.quantity).toLocaleString()}
                          </Typography>
                        </Box>

                        {/* Delete Button */}
                        <IconButton
                          color="error"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                    </Box>
                  ))}
                </Paper>

                {/* Summary Section */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={3}
                  flexWrap="wrap"
                  gap={2}
                >
                  <Box display="flex" gap={2} alignItems="center">
                    <Checkbox checked={selectAll} onChange={handleSelectAll} />
                    <Typography>เลือกทั้งหมด</Typography>
                    <Button
                      color="error"
                      onClick={() => {
                        selectedItems.forEach((id) => removeFromCart(id));
                        setSelectedItems([]);
                      }}
                    >
                      ลบ
                    </Button>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography fontWeight="bold">
                      รวม ({cartItems.length} สินค้า):
                    </Typography>
                    <Typography fontWeight="bold" color="error">
                      ฿{total.toLocaleString()}
                    </Typography>
                    <Button variant="contained" color="error"
                    onClick={() => {
                      router.push("/checkout");
                    }}
                    >
                      สั่งสินค้า
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </div>

        <motion.div className="w-full" {...fadeInUp}>
          <Topfooter />
        </motion.div>
        <motion.div className="w-full" {...fadeInUp}>
          <Footer />
        </motion.div>
      </>
    </motion.div>
  );
}

