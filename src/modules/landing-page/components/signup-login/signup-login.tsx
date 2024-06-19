import { Card } from "components/card";
import { Tab, Tabs } from "components/tabs";

export const SignupLogin = () => (
  <section className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto h-[calc(100vh-84px)]">
    {/* Background-Image */}
    <div className="bg-[url('./src/modules/landing-page/components/signup-login/background-image.jpg')] w-full h-full bg-center bg-no-repeat bg-cover absolute top-[-10px] left-0" />
    <div className="flex flex-col justify-center items-center px-4 lg:px-0 lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-24 h-[calc(100vh-84px-20px)]">
      <div className="border border-red z-10 w-[170px] md:w-[270px] lg:w-[370px]">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">{"We solve digital problems with an outstanding creative flare"}</p>
        <p className="text-white text-xs md:text-sm lg:text-base mt-8">{"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."}</p>
      </div>
      <div className="border border-red z-10">
        <Card>
          <Tabs>
            <Tab active text={"SIGN UP"} />
            <Tab text={"LOGIN"} />
          </Tabs>
        </Card>
      </div>
    </div>
  </section>
);
