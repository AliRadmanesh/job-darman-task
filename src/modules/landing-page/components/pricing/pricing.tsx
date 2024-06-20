import { FaCheck } from "react-icons/fa";

import { Button } from "components/button";
import { Card } from "components/card";
import { pricingFeatures, pricingPlans } from "./pricing-plans";

export const Pricing = () => (
  <section className="relative mx-auto h-[calc(100vh-84px)]">
    {/* Background-Image */}
    <div className="bg-[url('./src/modules/landing-page/components/pricing/background-image.jpg')] w-full h-screen bg-center bg-no-repeat bg-cover absolute top-[-10px] left-0" />
    <div className="flex flex-col justify-center items-center px-4 gap-y-12 h-[calc(100vh-84px-20px)]">
      <div className="z-10">
        <p className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[3rem]">{"Plans & Pricing"}</p>
        <p className="text-white text-center text-base md:text-lg lg:text-xl mt-8 w-[40ch]">{"Startup Framework is free forever — you only pay for custom domain hosting or to export your site."}</p>
      </div>
      <div className="z-10 flex flex-col px-4 gap-y-12 lg:flex-row lg:gap-y-0 lg:gap-x-4">
        {pricingPlans.map(({ id, title, price, recommended, features }) => (
          <Card key={id} classNames="w-11/12 sm:w-[250px] md:w-[300px] lg:w-[350px] bg-transparent border border-border rounded-lg px-11 py-14">
            <p className="text-xl text-white ml-4">{title}</p>
            <p className="text-6xl text-white relative mt-4 mb-8 ml-4">{price}<span className="text-base text-white ml-1 absolute top-0">{"$"}</span></p>
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex gap-x-2">
                {features[index] === index ? (
                  <FaCheck color="green" />
                ) : (<div className="w-4" />)}
                <p className="text-base text-white">{feature}</p>
              </div>
            ))}
            <Button text="Get Started" classNames={`${recommended ? 'bg-pink' : 'bg-transparent border border-border'} w-full py-2 lg:py-3 mt-6`} />
          </Card>
        ))}
      </div>
    </div>
  </section>
);
