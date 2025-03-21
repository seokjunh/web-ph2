import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BusinessCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="h-[20rem] w-[25rem] rounded-3xl bg-gray-200"></div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="h-[20rem] w-[25rem] rounded-3xl bg-gray-300"></div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="h-[20rem] w-[25rem] rounded-3xl bg-gray-400"></div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default BusinessCarousel;
