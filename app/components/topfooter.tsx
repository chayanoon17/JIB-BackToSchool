import React from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import ShieldIcon from "@mui/icons-material/Shield";

const Frame = () => {
  const benefits = [
    {
      icon: <ShieldIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "#221692" }} />,
      title: "การรับประกัน\nสินค้าของแท้ 100%",
      subtitle: "",
    },
    {
      icon: (
        <LocalShippingIcon
          sx={{ fontSize: { xs: 30, md: 40 }, color: "#221692" }}
        />
      ),
      title: "ช้อปครบ 500 บาท\nจัดส่งฟรีทั่วประเทศ",
      subtitle: "*จัดส่งด้วยบริษัทขนส่งเอกชน",
    },
    {
      icon: (
        <DeliveryDiningIcon
          sx={{ fontSize: { xs: 30, md: 40 }, color: "#221692" }}
        />
      ),
      title: "ช้อปครบ 3,000 บาท\nส่งฟรีภายใน 3 ชั่วโมง",
      subtitle: "*เฉพาะกรุงเทพและปริมณฑล ในเขตพื้นที่ที่กำหนดฯ",
    },
    {
      icon: <PaymentIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "#221692" }} />,
      title: "ชำระเงินสินค้า\nได้หลากหลายช่องทาง",
      subtitle: "",
    },
  ];

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 3,
        px: 2,
        bgcolor: "#f4f6f8",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      {benefits.map((benefit, index) => (
        <Stack
          key={index}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          width={{ xs: "100%", sm: "auto" }}
        >
          <Box>{benefit.icon}</Box>

          <Stack spacing={0.5}>
            <Typography
              sx={{
                fontFamily: "'Noto Sans Thai', sans-serif",
                fontWeight: 600,
                color: "#221690",
                fontSize: { xs: 14, md: 16 },
                lineHeight: "20px",
                whiteSpace: "pre-line",
              }}
            >
              {benefit.title}
            </Typography>

            {benefit.subtitle && (
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  color: "#221690",
                  fontSize: { xs: 10, md: 11 },
                  lineHeight: "14px",
                  whiteSpace: "normal",
                }}
              >
                {benefit.subtitle}
              </Typography>
            )}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Frame;
