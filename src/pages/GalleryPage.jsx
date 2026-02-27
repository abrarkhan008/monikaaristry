import { useState } from "react";

// Gallery card with placeholder image and custom info
function GalleryCard({
  index,
  title,
  description,
  imageHint,
  image,
  accentColor,
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="card-hover rounded-2xl overflow-hidden"
      style={{
        background: "white",
        boxShadow: "0 4px 20px rgba(160,73,106,0.1)",
      }}
    >
      {/* Image placeholder with gradient */}
      <div
        className="relative overflow-hidden"
        style={{ height: "400px", background: "#f5f0eb" }}
      >
        {!imgError && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            onClick={() => window.open(image, "_blank")} // <-- add click here
            style={{ cursor: "pointer" }}
          />
        )}

        {imgError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-2xl"
              style={{ background: `${accentColor}33` }}
            >
              💄
            </div>
            <p
              className="font-display text-center text-sm font-medium"
              style={{ color: accentColor }}
            >
              {imageHint}
            </p>
            <p
              className="font-body text-xs text-center mt-1"
              style={{ color: "#9e7d6e" }}
            >
              Add your photo here
            </p>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5">
        <h3
          className="font-display text-lg font-semibold mb-2"
          style={{ color: "#4a3728" }}
        >
          {title}
        </h3>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "#7a6055" }}
        >
          {description}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div
            className="h-0.5 flex-1"
            style={{
              background: `linear-gradient(90deg, ${accentColor}, transparent)`,
            }}
          />
          <span className="text-xs font-body" style={{ color: accentColor }}>
            ✦
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage({
  title,
  subtitle,
  description,
  cards,
  accentColor = "#a0496a",
}) {
  return (
    <div className="luxury-bg min-h-screen pt-28 pb-20">
      <div className="bokeh-overlay" />

      {/* Page Header */}
      <div className="text-center mb-16 px-4 relative z-10">
        <p
          className="font-display text-5xl mb-2"
          style={{ color: accentColor }}
        >
          {title}
        </p>
        <div className="ornament">— ✦ —</div>
        <h1
          className="font-display text-2xl md:text-3xl font-light mb-6"
          style={{ color: "#4a3728" }}
        >
          {subtitle}
        </h1>
        <p
          className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#6b5344" }}
        >
          {description}
        </p>

        {/* WhatsApp CTA */}
        <div className="mt-8">
          <a
            href="https://wa.me/917530051709?text=Hi%20Monika!%20I%27d%20like%20to%20book%20a%20makeup%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book This Look
          </a>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="gallery-grid">
          {cards.map((card, i) => (
            <GalleryCard
              key={i}
              index={i}
              title={card.title}
              description={card.description}
              imageHint={card.imageHint}
              image={card.image}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>

      {/* Photo Upload Instructions */}
      <div
        className="max-w-3xl mx-auto mt-20 mx-4 px-6 py-8 rounded-2xl text-center relative z-10"
        style={{
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(200,149,108,0.3)",
        }}
      >
        <p
          className="font-display text-2xl font-semibold tracking-wide mb-3"
          style={{ color: accentColor }}
        >
          How to Add Your Photos
        </p>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "#6b5344" }}
        >
          To add your real photos, place your images in the{" "}
          <code
            className="bg-rose-50 px-2 py-0.5 rounded text-xs"
            style={{ color: accentColor }}
          >
            src/assets/
          </code>{" "}
          folder and update the image paths in the respective page file. Each
          card accepts a photo from your portfolio.
        </p>
      </div>
    </div>
  );
}
