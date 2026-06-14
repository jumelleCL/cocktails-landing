"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom end",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 300 }, 0)
      .to(".left-leaf", { y: -300 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    const video = videoRef.current;
    if (!video) return;
    const initTween = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
        },
      });

      tl.to(video, {
        currentTime: video.duration / 2,
      });
    };

    if (video.readyState >= 1) {
      initTween();
    } else {
      video.onloadedmetadata = initTween;
    }
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <Image
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          width={500}
          height={500}
          loading="eager"
          className="left-leaf"
        />
        <Image
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          width={500}
          height={500}
          loading="eager"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br />
                of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitles">
                Every cocktail in our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/input.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
