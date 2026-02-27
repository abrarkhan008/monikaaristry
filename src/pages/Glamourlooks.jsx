import GalleryPage from "./GalleryPage";

const glamourCards = [
  {
    title: "Evening Party Glam",
    description:
      "Bold, radiant makeup perfect for evening parties and celebrations. Shimmer, drama, and confidence.",
    imageHint: "Evening Party Glam",
  },
  {
    title: "Cocktail Party Look",
    description:
      "Polished and chic with a smoky eye and nude lip. Perfect for cocktail events and corporate dos.",
    imageHint: "Cocktail Look",
  },
  {
    title: "Festival Makeup",
    description:
      "Vibrant, expressive festival makeup with glitter and bold colors. Let your spirit shine!",
    imageHint: "Festival Makeup",
  },
  {
    title: "Engagement Ceremony",
    description:
      "Romantic and radiant engagement look that photographs beautifully. Your engagement, your glow.",
    imageHint: "Engagement Look",
  },
  {
    title: "Baby Shower Look",
    description:
      "Soft, feminine makeup for your special baby shower day. Glowing and absolutely beautiful.",
    imageHint: "Baby Shower Look",
  },
  {
    title: "Birthday Glam",
    description:
      "It's your birthday — go bold! Dramatic lashes, bold lips, and flawless skin for your big day.",
    imageHint: "Birthday Glam",
  },
  {
    title: "Anniversary Makeup",
    description:
      "Timeless, elegant makeup for your anniversary celebration. Reignite that special sparkle.",
    imageHint: "Anniversary Look",
  },
  {
    title: "Corporate Event Look",
    description:
      "Professional yet polished. A clean, confident look for important corporate events and conferences.",
    imageHint: "Corporate Look",
  },
  {
    title: "Cultural Event Makeup",
    description:
      "Traditional-meets-modern for cultural festivals and events. Rich tones and artistic details.",
    imageHint: "Cultural Event",
  },
  {
    title: "Saree Look",
    description:
      "Classic makeup paired perfectly with a silk saree. Understated grace and feminine charm.",
    imageHint: "Saree Look",
  },
  {
    title: "Lehenga Look",
    description:
      "Festive, vibrant makeup coordinated beautifully with a stunning lehenga. You'll be unforgettable.",
    imageHint: "Lehenga Look",
  },
  {
    title: "Award Night Glam",
    description:
      "Red carpet-ready makeup with dramatic eyes and a bold lip. Own every room you walk into.",
    imageHint: "Award Night Glam",
  },
  {
    title: "Date Night Look",
    description:
      "Sultry, effortless makeup for a romantic evening. Soft, dewy, and irresistible.",
    imageHint: "Date Night Look",
  },
  {
    title: "Halftime Glow Look",
    description:
      'Glowy, fresh skin with subtle highlighter and rosy tones. The "I woke up this way" look, perfected.',
    imageHint: "Glow Look",
  },
  {
    title: "Bold Lip Look",
    description:
      "A statement bold lip in deep berry or classic red, paired with clean, minimal eyes.",
    imageHint: "Bold Lip Look",
  },
  {
    title: "Smoky Glam",
    description:
      "Intense, sultry smoky eyes with perfectly blended shadows. Mysterious and magnetic.",
    imageHint: "Smoky Glam",
  },
  {
    title: "Pastel Glam",
    description:
      "Soft pastel eyeshadow in lavender and mint with fresh skin. Light, airy, and feminine.",
    imageHint: "Pastel Glam",
  },
  {
    title: "Monochrome Look",
    description:
      "One color across eyes, cheeks, and lips for a modern, editorial-inspired look.",
    imageHint: "Monochrome Look",
  },
  {
    title: "Golden Hour Glow",
    description:
      "Warm bronzed tones with a luminous highlight. You'll look lit from within.",
    imageHint: "Golden Hour Glow",
  },
  {
    title: "Full Glam Transformation",
    description:
      "Complete before-to-after glam transformation. From everyday to extraordinary.",
    imageHint: "Full Glam",
  },
];

export default function GlamourLooks() {
  return (
    <GalleryPage
      title="Glamour Looks"
      subtitle="Stunning Looks for Every Occasion"
      description="From intimate parties to grand events, I create personalized glamour looks that make you feel like the most beautiful person in the room. Every occasion is a reason to shine."
      cards={glamourCards}
      accentColor="#c4788a"
    />
  );
}
