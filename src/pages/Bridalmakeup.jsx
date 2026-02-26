import GalleryPage from "../components/GalleryPage";

const bridalCards = [
  {
    title: "Classic Bridal Look",
    description:
      "Timeless elegance with soft glam eyes and a nude lip. Perfect for the bride who loves a natural, refined finish.",
    imageHint: "Classic Bridal",
  },
  {
    title: "South Indian Bride",
    description:
      "Traditional South Indian bridal look with defined eyes, bold color, and flawless skin that honors your heritage.",
    imageHint: "South Indian Bride",
  },
  {
    title: "Dewy Skin Bride",
    description:
      "A luminous, glass-skin finish with soft features. This look radiates freshness and natural beauty.",
    imageHint: "Dewy Skin Look",
  },
  {
    title: "Smoky Eye Bridal",
    description:
      "Bold, sultry smoky eyes balanced with a glossy nude lip. Dramatic yet bridal — perfect for evening weddings.",
    imageHint: "Smoky Eye Bride",
  },
  {
    title: "Matte Flawless Finish",
    description:
      "Long-lasting matte bridal look with perfect coverage. Stays flawless from ceremony to reception.",
    imageHint: "Matte Bridal",
  },
  {
    title: "Pastel Bridal Look",
    description:
      "Dreamy pastels with peach tones and soft shimmers. A romantic, feminine look for the modern bride.",
    imageHint: "Pastel Bridal",
  },
  {
    title: "Gold & Bronze Bride",
    description:
      "Rich gold eye makeup with bronzed skin and a bold lip. Luxurious and camera-perfect.",
    imageHint: "Gold Bronze Bride",
  },
  {
    title: "Minimalist Bride",
    description:
      "Less is more — clean skin, subtle definition, and a soft pink lip. Elegance in its purest form.",
    imageHint: "Minimalist Bride",
  },
  {
    title: "Vintage Glam Bride",
    description:
      "Old Hollywood glamour with defined brows, cat-eye liner, and a classic red lip.",
    imageHint: "Vintage Glam Bride",
  },
  {
    title: "Coral & Pink Bride",
    description:
      "Bright coral and pink tones with dewy skin. Fresh and vibrant for daytime celebrations.",
    imageHint: "Coral Pink Bride",
  },
  {
    title: "Heavy Bridal Makeup",
    description:
      "Full glam with dramatic lashes, contouring, and intricate eye design. For the bride who loves bold beauty.",
    imageHint: "Heavy Glam Bride",
  },
  {
    title: "Reception Look",
    description:
      "Glamorous reception makeup that transitions from day to night with an impactful finish.",
    imageHint: "Reception Look",
  },
  {
    title: "Mehendi Function",
    description:
      "Light, breezy makeup with floral tones for the mehendi ceremony. Beautiful and comfortable.",
    imageHint: "Mehendi Makeup",
  },
  {
    title: "Sangeet Night Look",
    description:
      "Fun, vibrant makeup with bold colors and shimmer for the sangeet dance night.",
    imageHint: "Sangeet Night Look",
  },
  {
    title: "Christian Bride",
    description:
      "Soft, classic bridal look with a fresh, natural finish perfect for church ceremonies.",
    imageHint: "Christian Bride",
  },
  {
    title: "Muslim Bride",
    description:
      "Elegant and modest bridal look with rich jewel tones and flawless skin.",
    imageHint: "Muslim Bride",
  },
  {
    title: "Airbrush Bridal",
    description:
      "Ultra-smooth airbrush foundation finish that photographs like no other. Zero texture, pure perfection.",
    imageHint: "Airbrush Bridal",
  },
  {
    title: "Natural Bride",
    description:
      "Enhancing your natural beauty with minimal products. You, but absolutely perfected.",
    imageHint: "Natural Bride",
  },
  {
    title: "Rose Gold Bride",
    description:
      "Trending rose gold palette with warm tones, shimmery lids, and a rosy lip.",
    imageHint: "Rose Gold Bride",
  },
  {
    title: "Full Day Bridal Trial",
    description:
      "Complete bridal trial session showcasing endurance — from morning to midnight, perfectly intact.",
    imageHint: "Bridal Trial Look",
  },
];

export default function BridalMakeup() {
  return (
    <GalleryPage
      title="Bridal Makeup"
      subtitle="Your Dream Bridal Look, Perfected"
      description="Every bride deserves to feel like the most beautiful version of herself. I create long-lasting, flawless bridal looks tailored to your personality, outfit, and vision — in Bangalore & Coimbatore."
      cards={bridalCards}
      accentColor="#a0496a"
    />
  );
}
