"use client"
import ProductImage from "@/assets/product-image.png";
import PiramideImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2Dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="bg-gradient-text text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eveniet inventore voluptas enim itaque neque nam unde.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="product-image" className="mt-10" />
          <motion.img
            src={PiramideImage.src}
            alt="pyramide"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt="tube"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
