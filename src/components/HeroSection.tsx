import heroBg from "@/assets/hero-bg.jpeg";
import heroPortrait from "@/assets/hero-portrait.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred background layer */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto w-full gap-8">
        {/* Tag */}
        <span
          className="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Adventure Bike Trip
        </span>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold uppercase leading-[0.95] tracking-tight text-white opacity-0 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Deoghar Ride
        </h1>

        {/* Subtext */}
        <p
          className="text-base sm:text-lg text-white/75 max-w-md font-body opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", textWrap: "balance" } as React.CSSProperties}
        >
          Your first ride starts here. Join Off Road Travels for a thrilling off-road journey made for real adventure lovers.
        </p>

        {/* CTA */}
        <a
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground font-heading font-bold text-lg uppercase tracking-wide px-10 py-4 rounded-lg shadow-lg shadow-accent/25 hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          Book Deoghar Ride
        </a>

        {/* Micro-copy */}
        <p
          className="text-xs text-white/45 font-body tracking-wide opacity-0 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          Limited seats · Guided ride · Off-road experience
        </p>

        {/* Featured image */}
        <div
          className="w-full max-w-sm sm:max-w-md rounded-xl overflow-hidden shadow-2xl opacity-0 animate-fade-up mt-2"
          style={{ animationDelay: "0.8s" }}
        >
          <img
            src={heroPortrait}
            alt="Rider overlooking snow-capped Himalayan peaks"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
