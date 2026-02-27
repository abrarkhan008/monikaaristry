import GalleryPage from "./GalleryPage";

export default function BridalHairstyles() {
  const hairstyleCards = [
    {
      title: "Classic Bridal Bun",
      description:
        "Elegant traditional bun styled perfectly for saree and lehenga looks.",
      image: "/hairstyle/1.png",
    },
    {
      title: "Soft Curls Bridal",
      description:
        "Romantic soft curls with volume, perfect for modern bridal styling.",
      image: "/hairstyle/2.png",
    },
    {
      title: "Floral Bridal Braid",
      description:
        "Beautiful braid enhanced with fresh flowers for a dreamy wedding look.",
      image: "/hairstyle/3.png",
    },
    {
      title: "Low Textured Bun",
      description:
        "Chic and minimal low bun hairstyle for elegant evening weddings.",
      image: "/hairstyle/4.png",
    },
    {
      title: "Half-Up Bridal Waves",
      description:
        "Soft half-up waves giving volume and grace for reception events.",
      image: "/hairstyle/5.png",
    },
  ];

  return (
    <GalleryPage
      title="Bridal Hairstyles"
      subtitle="Elegant Hair Styling for Your Wedding Day"
      description="From traditional buns to modern textured waves, each bridal hairstyle is crafted to complement your outfit and wedding theme."
      cards={hairstyleCards}
      accentColor="#a0496a"
    />
  );
}
