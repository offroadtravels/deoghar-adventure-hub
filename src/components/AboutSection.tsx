import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-founder.jpeg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <img
              src={aboutImg}
              alt="Founder of Off Road Travels with riding buddies"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-tight mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-foreground/80 font-body leading-relaxed">
              <p>
                I'm Shekhar, the founder of Off Road Travels. What started as solo rides through Jharkhand's back roads turned into a mission — creating off-road bike journeys for people who crave adventure, open trails, and stories worth telling.
              </p>
              <p>
                Every trip I lead is designed around real riding — not tourist highways. From the winding ghats of Netarhat to the temple trails of Deoghar, each route is scouted, tested, and built for riders who want to feel the road beneath them.
              </p>
              <p className="font-semibold text-foreground">
                The Deoghar Ride is where it all begins. Your seat is waiting.
              </p>
            </div>

            <a
              href="YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-accent text-accent-foreground font-heading font-bold text-base uppercase tracking-wide px-8 py-3.5 rounded-lg shadow-md shadow-accent/20 hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200"
            >
              Book Your Deoghar Ride
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
