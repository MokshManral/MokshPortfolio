import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useRevealAnimation() {
  useEffect(() => {
    const heroTargets = [
      ".hero-name",
      ".hero-desc",
      ".hero-actions",
      ".hero-stats",
      ".hero-eyebrow",
    ];

    gsap.fromTo(
      heroTargets,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.15,
      }
    );

    const sections = gsap.utils.toArray(".reveal");

    sections.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}