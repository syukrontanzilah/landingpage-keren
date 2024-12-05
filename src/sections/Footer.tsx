import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SosialX from "@/assets/social-x.svg";
import SosialInsta from "@/assets/social-insta.svg";
import SocialLinked from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYt from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)]  before:absolute">
          <Image src={Logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SosialX />
          <SosialInsta />
          <SocialLinked />
          <SocialPin />
          <SocialYt />
        </div>

        <p className="mt-6 text-xs">
          &copy; 2024 Tanzil Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
