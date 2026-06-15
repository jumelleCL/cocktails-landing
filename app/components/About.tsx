"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";

export default function About() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        duration: 1,
        ease: "expo.inOut",
        stagger: 0.01,
      });
  });
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from mudle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. THat care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl font-bold">
                <span>4.8</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <Image
            src="/images/abt1.png"
            alt="grid-img-1"
            width={500}
            height={500}
          />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <Image
            src="/images/abt2.png"
            alt="grid-img-2"
            width={500}
            height={500}
          />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <Image
            src="/images/abt5.png"
            alt="grid-img-5"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <Image
            src="/images/abt3.png"
            alt="grid-img-3"
            width={500}
            height={500}
          />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <Image
            src="/images/abt4.png"
            alt="grid-img-4"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
