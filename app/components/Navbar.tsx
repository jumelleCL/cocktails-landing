"use client";
import Image from "next/image";
import { navLinks } from "../constant/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const nav = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!nav.current) return;

    const navTween = gsap.fromTo(
      nav.current,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: nav.current,
          start: "bottom top",
        },
      },
    );

    return () => {
      navTween.scrollTrigger?.kill();
      navTween.kill();
    };
  }, []);

  return (
    <nav ref={nav}>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Velvet Pour logo"
            width={32}
            height={32}
            loading="eager"
          />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
