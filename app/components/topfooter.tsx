import React from "react";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

const Frame = () => {
  const benefits = [
    {
      icon: (
        <Image
          src="/images/top/a1.svg"
          alt="Icon 1"
          width={150}
          height={100}
        />
      ),
    },
    {
      icon: (
        <Image
          src="/images/top/a2.svg"
          alt="Icon 2"
          width={150}
          height={100}
        />
      ),
    },
    {
      icon: (
        <Image
          src="/images/top/a3.svg"
          alt="Icon 3"
          width={230}
          height={100}
        />
      ),
    },
    {
      icon: (
        <Image
          src="/images/top/a4.svg"
          alt="Icon 4"
          width={190}
          height={100}
        />
      ),
    },
  ];

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={10} // เพิ่มการเว้นระยะห่างระหว่างไอคอน
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 2,
        px: 1,
        bgcolor: "#F4F6F8",
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
          {/* ถ้าต้องการเพิ่ม Title หรือ Sub-Title สามารถเพิ่มตรงนี้ */}
        </Stack>
      ))}
    </Stack>
  );
};

export default Frame;
