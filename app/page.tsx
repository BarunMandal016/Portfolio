"use client"
import { Libre_Baskerville } from "next/font/google";
import profile from "../public/profile.jpg";
import Image from "next/image";
// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
// gsap.registerPlugin(SplitText)
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
function page() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMN";
    
    function scramble(target: HTMLElement, duration = 2) {
      const originalText = target.innerText;
      let frame = 0;
      const totalFrames = 20; // number of random frames
      
      const scrambleInterval = setInterval(() => {
        const scrambled = originalText
          .split("")
          .map((char, i) => (Math.random() < 0.5 ? letters[Math.floor(Math.random() * letters.length)] : char))
          .join("");
        target.innerText = scrambled;
        frame++;
        if (frame > totalFrames) {
          target.innerText = originalText;
          clearInterval(scrambleInterval);
        }
      }, (duration * 500) / totalFrames);
    }

    if (nameRef.current) {
      scramble(nameRef.current, 2);
    }
  }, []);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl py-10">
      <div className={`items-center space-y-4 py-6`}>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white ${libreBaskerville.className}`}>
          Hi, I am <span className="gradient-text">Barun Mandal</span>
        </h1>
        <h2 ref={nameRef} className={`text-2xl md:text-3xl font-semibold text-foreground/80 text-white ${libreBaskerville.className}`}>
          Full-Stack Developer & Computer Engineer
        </h2>
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 text-white">
          Computer Engineer
        </h2> */}
        {/* <p
          className={`text-lg text-white font-serif ${libreBaskerville.className}`}
        >
          Passionate about building scalable applications and optimizing cloud
          infrastructure. Skilled in backend engineering, AI/ML integration and
          automation.
        </p> */}
      </div>
      <div className="flex items-center sm:justify-end">
        <Image
          src={profile}
          alt="Barun Mandal"
          className="object-cover max-w-80 min-w-32 rounded-lg shadow-lg shadow-neutral-400/50"
        />
      </div>
    </section>
  );
}
export default page;
