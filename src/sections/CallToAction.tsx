import ArrowIcon from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png"
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your effort
          </p>
          <Image src={StarImage} alt="star" width={300} className="hidden md:block absolute -left-[350px] -top-[137px]"/>
          <Image src={SpringImage} alt="star" width={300} className="hidden md:block absolute -right-[331px] -top-[19px]"/>
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
