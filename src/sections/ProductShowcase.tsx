import ProductImage from "@/assets/product-image.png";
import PiramideImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2Dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eveniet inventore voluptas enim itaque neque nam unde.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="product-image" className="mt-10" />
          <Image
            src={PiramideImage}
            alt="pyramide"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={TubeImage}
            alt="tube"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
