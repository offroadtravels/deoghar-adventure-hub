import { useEffect, useRef, useState } from "react";
import tripDeoghar from "@/assets/trip-deoghar.jpeg";
import tripNetarhat from "@/assets/trip-netarhat.jpeg";
import tripRajrappa from "@/assets/trip-rajrappa.jpeg";
import tripGiridih from "@/assets/trip-giridih.jpeg";

const trips = [
  { image: tripDeoghar, name: "Deoghar", tag: "Temple trail · 2 days" },
  { image: tripNetarhat, name: "Netarhat", tag: "Mountain route · 3 days" },
  { image: tripRajrappa, name: "Rajrappa", tag: "Off-road · 2 days" },
  { image: tripGiridih, name: "Giridih Trails", tag: "Forest ride · 1 day" },
];

const PastTripsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28">
      <div className="container">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold uppercase tracking-tight mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Previous Trips
        </h2>
      </div>

      <div className="pl-6 sm:pl-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+1.5rem))]">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory pr-6">
          {trips.map((trip, i) => (
            <div
              key={trip.name}
              className={`flex-shrink-0 w-60 sm:w-72 snap-start rounded-xl overflow-hidden bg-card shadow-md shadow-foreground/5 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={trip.image}
                  alt={`${trip.name} ride`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-lg uppercase">{trip.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{trip.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastTripsSection;
