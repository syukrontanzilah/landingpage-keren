import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={AcmeLogo}
              alt="logo-ticker"
              className="logo-ticker-image"
            />
            <Image
              src={QuantumLogo}
              alt="logo-ticker"
              className="logo-ticker-image"
            />
            <Image
              src={EchoLogo}
              alt="logo-ticker"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="logo-ticker"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="logo-ticker"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="logo-ticker"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
