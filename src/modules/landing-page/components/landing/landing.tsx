import { Carousel } from "components/carousel";
import { carouselItems } from "./carousel-items";
import { Button } from "components/button";

export const Landing = () => (
  <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto h-[calc(100vh-84px)]">
    {/* Background-Image */}
    <div className="bg-[url('./src/modules/landing-page/components/landing/background-image.jpg')] w-full h-full bg-center bg-no-repeat bg-cover absolute top-0 left-0" />
    <div className="flex flex-col justify-center items-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
      <Carousel items={carouselItems} />
      <Button text="Create an Account" classNames={"mt-8 lg:mt-14"} />
    </div>
  </section>
);
