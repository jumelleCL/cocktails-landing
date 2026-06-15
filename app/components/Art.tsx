"use client";

import Image from "next/image";
import { featureLists, goodLists } from "../constant/constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Art() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    gsap.set(".masked-img", {
      maskSize: "50%",
    });

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/images/check.png"
                  alt={feature}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <Image
              src="/images/under-img.jpg"
              alt="cocktail"
              width={0}
              height={0}
              sizes="100vw"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <Image
                  src="/images/check.png"
                  alt={feature}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft. Poured with Passion</h3>
            <p>
              This isn&apos;t just a drink. It&apos;s a carefully crafted moment
              made just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
