import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "astro:assets";

const images = Object.values(
  import.meta.glob<{ default: ImageMetadata }>(
    "~/assets/images/gallery/*.jpg",
    { eager: true },
  ),
);

export function GalleryCarousel() {
  return (
    <Carousel className="mx-12">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <img
              src={img.default.src}
              alt={`Gallery image ${index + 1}`}
              className="object-cover"
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
