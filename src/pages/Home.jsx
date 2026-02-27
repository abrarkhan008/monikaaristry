import { Link } from "react-router-dom";

const services = [
  {
    to: "/bridal-makeup",
    title: "Bridal Makeup",
    subtitle: "Look radiant on your special day.",
    desc: "Timeless, elegant bridal looks crafted to last all day & night. Every bride deserves to shine.",
    emoji: "👰",
    color: "#a0496a",
    image: "/1.png",
  },
  {
    to: "/glamour-looks",
    title: "Glamour Looks",
    subtitle: "Stunning looks for any occasion.",
    desc: "From receptions to parties — bold, beautiful, unforgettable makeup for every event.",
    emoji: "✨",
    color: "#c4788a",
    image: "/2.png",
    featured: true,
  },
  {
    to: "/photoshoot-makeup",
    title: "Photoshoot Makeup",
    subtitle: "Perfect makeup for the camera.",
    desc: "Camera-ready looks that photograph flawlessly — editorial, fashion, and portfolio shoots.",
    emoji: "📸",
    image: "/3.png",
    color: "#c8956c",
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 30% 60%, rgba(160,73,106,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 30%, rgba(200,149,108,0.25) 0%, transparent 50%),
            linear-gradient(135deg, #2e1a12 0%, #9b6464 40%, #8a4a3a 70%, #c8956c 100%)
          `,
        }}
      >
        {/* Bokeh circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-5"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                background: i % 2 === 0 ? "#b17a5f" : "#834e44",
                top: `${10 + ((i * 13) % 80)}%`,
                left: `${5 + ((i * 17) % 90)}%`,
                animation: `float${(i % 2) + 1} ${6 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Gold shimmer overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2
            className="font-display text-lg md:text-xl tracking-[0.3em] uppercase mb-6"
            style={{ color: "#b17a5f" }}
          >
            Luxury Bridal Makeup
          </h2>

          <h1
            className="font-script text-5xl md:text-8xl mb-6"
            style={{ color: "white", lineHeight: 1.2 }}
          >
            Monika Aristry
          </h1>

          <p
            className="font-display text-sm tracking-[0.4em] uppercase mb-10"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Professional Makeup Artist
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/917530051709"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Book an Appointment
            </a>

            <Link
              to="/about"
              className="font-display text-sm tracking-widest uppercase py-3 px-8 rounded-full border transition-all duration-300 hover:bg-white/10"
              style={{ color: "white", borderColor: "rgba(200,149,108,0.5)" }}
            >
              Learn About Me
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(200,149,108,0.7)" }}
        >
          <span className="font-body text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{
              background:
                "linear-gradient(to bottom, rgba(200,149,108,0.7), transparent)",
            }}
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="luxury-bg py-32 px-4 relative">
        <div className="bokeh-overlay" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light mb-4">
              Signature Services
            </h2>
            <div className="ornament">— ✦ —</div>
            <h2
              className="font-display text-2xl md:text-3xl font-light"
              style={{ color: "#4a3728" }}
            >
              Crafted for Every Occasion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.to}
                className={`card-hover rounded-2xl overflow-hidden relative group ${s.featured ? "md:-mt-4 md:mb-4" : ""}`}
                style={{
                  background: "white",
                  boxShadow: s.featured
                    ? "0 20px 60px rgba(160,73,106,0.2)"
                    : "0 4px 20px rgba(160,73,106,0.08)",
                  border: s.featured
                    ? `1px solid ${s.color}33`
                    : "1px solid rgba(200,149,108,0.15)",
                }}
              >
                {/* Image area */}
                <div
                  className="h-85 relative flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}18 0%, ${s.color}35 100%)`,
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                    }}
                  />
                  {/* Add your photo instructions */}
                  <div className="absolute top-3 right-3 bg-white/70 rounded-full px-2 py-1">
                    <span
                      className="font-body text-xs"
                      style={{ color: s.color }}
                    ></span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`font-display text-2xl font-medium tracking-wide1 ${s.featured ? "text-4xl" : ""}`}
                    style={{ color: s.color }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-display text-sm font-medium mb-3"
                    style={{ color: "#6b5344" }}
                  >
                    {s.subtitle}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "#9e7d6e" }}
                  >
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className="font-body text-xs tracking-widest uppercase transition-colors duration-300 group-hover:opacity-100"
                      style={{ color: s.color }}
                    >
                      View Gallery →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section
        className="py-32 px-4 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 10% 50%, rgba(177,122,95,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 50%, rgba(177,122,95,0.06) 0%, transparent 50%),
            #f8f3ef
          `,
        }}
      >
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            className="font-display text-3xl md:text-4xl font-light mb-2"
            style={{ color: "#a0496a" }}
          >
            About Me
          </h2>
          <div className="ornament">— ✦ —</div>
          <h2
            className="font-display text-2xl md:text-3xl font-light mb-6"
            style={{ color: "#4a3728" }}
          >
            Creating Beauty with{" "}
            <span style={{ color: "#a0496a", fontStyle: "italic" }}>
              Passion
            </span>
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-4"
            style={{ color: "#6b5344" }}
          >
            I'm Monika, a luxury bridal makeup artist serving Bangalore and
            Coimbatore. With over 5 years of professional experience since 2020,
            I specialize in elegant, long-lasting bridal looks.
          </p>
          <p
            className="font-body text-base leading-relaxed mb-10"
            style={{ color: "#9e7d6e" }}
          >
            I enhance natural beauty while maintaining a flawless, premium
            finish — delivering personalized, detail-oriented service for every
            bride.
          </p>
          <Link to="/about" className="btn-primary inline-block">
            Learn More About Me →
          </Link>
        </div>
      </section>

      {/* ===== WHATSAPP CTA SECTION ===== */}
      <section className="py-20 px-4">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center"
          style={{ background: "#25d366", boxShadow: "none" }}
        >
          <div className="relative z-10">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "#25d366", background: "#0f3d24" }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </div>

            <h2
              className="font-display text-3xl md:text-4xl font-medium text-white mb-3"
              style={{ letterSpacing: "0.05em" }}
            >
              BOOK YOUR CONSULTATION
            </h2>

            <p
              className="font-body text-lg mb-6"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Let’s discuss your look — quick and easy booking on WhatsApp.
            </p>

            <a
              href="https://wa.me/917530051709?text=Hi!%20I'd%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full"
              style={{
                background: "#0e4221",
                color: "white",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "none",
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="luxury-bg py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "200+", label: "Happy Brides" },
              { number: "2020", label: "Est. Since" },
              { number: "2", label: "Cities Served" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="font-display text-3xl md:text-4xl font-light mb-1"
                  style={{ color: "#a0496a" }}
                >
                  {stat.number}
                </span>
                <span
                  className="font-body text-sm tracking-widest uppercase"
                  style={{ color: "#9e7d6e" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
