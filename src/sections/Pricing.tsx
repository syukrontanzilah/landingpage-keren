"use client"
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const pricingTiers = [
  {
    id: 1,
    title: "Free",
    monthlyPrice: "0",
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: "135.000",
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    id: 3,
    title: "Business",
    monthlyPrice: "285.000",
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 100 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* title header */}
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited task, better security, and
            exclusive features.
          </p>
        </div>
        {/* Card list */}
        <div className="flex flex-col gap-6 items-center mt-14 lg:flex-row lg:items-start lg:justify-center">
          {pricingTiers.map(
            ({
              id,
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={id}
                className={twMerge("card", inverse === true && "border-black bg-black text-white/70" )}
              >
                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/70"  )}>{title}</h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span className="bg-rainbow-text font-medium"
                      animate={{
                        backgroundPositionX: ['0%', '100%'],
                      }}
                      transition={{
                        duration:1,
                        repeat: Infinity,
                        ease:"linear",
                        repeatType:"loop"
                      }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-3xl font-bold tracking-tighter leading-none">
                    Rp {monthlyPrice}
                  </span>
                  <span className={twMerge("tracking-tight font-bold text-black/50", inverse === true && "text-white/60" )}>
                    /month
                  </span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black" )}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((item, index) => {
                    return (
                      <li
                        className="text-sm flex items-center gap-4"
                        key={index}
                      >
                        <CheckIcon className="h-6 w-6 " />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
