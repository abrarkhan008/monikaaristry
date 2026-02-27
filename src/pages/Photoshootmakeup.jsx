import GalleryPage from "./GalleryPage";

const photoshootCards = [
  {
    title: "Editorial Makeup",
    description:
      "High-fashion editorial looks designed for print and digital media. Sharp, artistic, and visually powerful.",
    imageHint: "Editorial Makeup",
  },
  {
    title: "Portfolio Shoot",
    description:
      "Clean, versatile makeup for modeling portfolio shots. Showcasing bone structure and natural features.",
    imageHint: "Portfolio Shoot",
  },
  {
    title: "Product Photography",
    description:
      "Precise, detailed makeup designed to complement product photography. Every feature carefully crafted.",
    imageHint: "Product Photography",
  },
  {
    title: "Pre-Wedding Shoot",
    description:
      "Romantic and glowing pre-wedding makeup that translates beautifully to outdoor and studio photos.",
    imageHint: "Pre-Wedding Shoot",
  },
  {
    title: "Maternity Shoot",
    description:
      "Soft, radiant makeup celebrating the beautiful journey of motherhood. Glowing and serene.",
    imageHint: "Maternity Shoot",
  },
  {
    title: "Newborn Family Shoot",
    description:
      "Fresh, natural makeup for family photoshoots. Timeless looks that age beautifully in photographs.",
    imageHint: "Family Shoot",
  },
  {
    title: "Studio Portrait",
    description:
      "Clean, sophisticated studio portrait makeup with perfect skin and defined features.",
    imageHint: "Studio Portrait",
  },
  {
    title: "Outdoor Natural Shoot",
    description:
      "Sun-kissed, dewy makeup perfect for natural light outdoor photography. Fresh and radiant.",
    imageHint: "Outdoor Shoot",
  },
  {
    title: "Fashion Campaign",
    description:
      "Trend-forward makeup designed for fashion campaigns and lookbooks. Bold, modern, and memorable.",
    imageHint: "Fashion Campaign",
  },
  {
    title: "Beauty Close-Up",
    description:
      "Flawless skin and precision makeup for extreme close-up beauty photography. Zero compromise on detail.",
    imageHint: "Beauty Close-Up",
  },
  {
    title: "Dramatic Contour",
    description:
      "Strong contour and sculpting for high-contrast photography that emphasizes facial structure.",
    imageHint: "Dramatic Contour",
  },
  {
    title: "Ethnic Wear Shoot",
    description:
      "Traditional Indian makeup coordinated with ethnic wear for cultural photoshoots and lookbooks.",
    imageHint: "Ethnic Wear",
  },
  {
    title: "Western Wear Shoot",
    description:
      "Modern, clean makeup for western fashion photography. Minimal and impactful.",
    imageHint: "Western Wear",
  },
  {
    title: "Jewellery Campaign",
    description:
      "Makeup designed to highlight and complement jewellery. Skin and features that make the pieces shine.",
    imageHint: "Jewellery Campaign",
  },
  {
    title: "Bridal Magazine Look",
    description:
      "Magazine-worthy bridal looks crafted for publication quality photography.",
    imageHint: "Magazine Bridal",
  },
  {
    title: "Commercial Shoot",
    description:
      "Versatile, clean makeup for commercial campaigns across beauty, lifestyle, and product categories.",
    imageHint: "Commercial Shoot",
  },
  {
    title: "Cinematic Look",
    description:
      "Film-inspired makeup with a cinematic quality — thoughtful, story-driven, and visually rich.",
    imageHint: "Cinematic Look",
  },
  {
    title: "Monochrome Shoot",
    description:
      "Makeup designed specifically for black and white photography with perfect tonal balance.",
    imageHint: "Monochrome Shoot",
  },
  {
    title: "Summer Beach Shoot",
    description:
      "Waterproof, sun-ready makeup for beach and outdoor summer photoshoots.",
    imageHint: "Beach Shoot",
  },
  {
    title: "Night Photography",
    description:
      "High-impact makeup designed for night photography with dramatic flash and moody lighting.",
    imageHint: "Night Photography",
  },
];

export default function PhotoshootMakeup() {
  return (
    <GalleryPage
      title="Photoshoot Makeup"
      subtitle="Perfect Makeup for the Camera"
      description="Camera-ready looks that photograph flawlessly under every lighting condition. From editorial fashion to intimate portraits — I ensure every frame captures your absolute best."
      cards={photoshootCards}
      accentColor="#c8956c"
    />
  );
}
