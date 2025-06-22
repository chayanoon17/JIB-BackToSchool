"use client"; 

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LoadingAnimation() {
  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <DotLottieReact
        src="https://lottie.host/1cada479-d8a5-43f5-aecb-7419d40cbec5/Yx3Q375I7A.lottie"
        loop
        autoplay
      />
    </div>
  );
}
