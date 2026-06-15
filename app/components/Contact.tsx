"use client";

import Image from "next/image";
import { openingHours, socials } from "../constant/constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#f-left-leaf",
        {
          y: "50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });
  return (
    <footer id="contact">
      <Image
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto"
      />
      <Image
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto"
      />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>Carrer Center, 123, San Francisco, CA</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 123-4567</p>
          <p>test@email.com</p>
        </div>

        <div>
          <h3>Open Every day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
