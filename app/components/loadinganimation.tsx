"use client"; 

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LoadingAnimation() {
  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <DotLottieReact
      src="https://lottie.host/368cf421-21c4-41e5-b641-8916ca2f5200/dWJj9JxmKf.lottie"


        loop
        autoplay
      />
    </div>
  );
}
