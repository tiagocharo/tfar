"use client";
import Lottie from "lottie-react";
import lottieJson from "../../lotties/animation6.json";

export default function Animation() {
  return (
    <Lottie loop={true} animationData={lottieJson} className="w-full h-auto" />
  );
}
