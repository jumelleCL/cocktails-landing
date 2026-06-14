"use client";
import Image from "next/image";
import { cocktailLists, mockTailLists } from "../constant/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Cocktails() {
  useGSAP(() => {
    const parallaxTImeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTImeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });
    parallaxTImeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  });
  return (
    <section id="cocktails" className="noisy">
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="l-leaf"
        width={500}
        height={500}
        id="c-left-leaf"
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        width={500}
        height={500}
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {detail} | {country}
                  </p>
                </div>
                <span>- {price} </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {detail} | {country}
                  </p>
                </div>
                <span>- {price} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
