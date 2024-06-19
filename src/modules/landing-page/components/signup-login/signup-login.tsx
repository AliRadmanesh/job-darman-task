import { Button } from "components/button";
import { Card } from "components/card";
import { Separator } from "components/separator";
import { Tab, Tabs } from "components/tabs";

export const SignupLogin = () => (
  <section className="relative mx-auto h-[calc(100vh-84px)]">
    {/* Background-Image */}
    <div className="bg-[url('./src/modules/landing-page/components/signup-login/background-image.jpg')] w-full h-full bg-center bg-no-repeat bg-cover absolute top-[-10px] left-0" />
    <div className="flex flex-col justify-center items-center px-4 lg:px-0 lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-24 h-[calc(100vh-84px-20px)]">
      <div className="z-10 w-[170px] md:w-[270px] lg:w-[370px]">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[3rem]">{"We solve digital problems with an outstanding creative flare"}</p>
        <p className="text-white text-xs md:text-sm lg:text-base mt-8">{"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."}</p>
      </div>
      <div className="z-10">
        <Card>
          <Tabs>
            <Tab active text={"SIGN UP"} />
            <Tab text={"LOGIN"} />
          </Tabs>
          <div className="p-10 flex flex-col justify-center items-center">
            <input type="email" className="form-input px-4 py-3 rounded-full border-border w-full" placeholder="Your email" />
            <input type="password" className="form-input px-4 py-3 rounded-full border-border w-full mt-7" placeholder="Your password" />
            <Button text="Create an Account" classNames="bg-green w-full mt-6 py-2 lg:py-3" />
            <Separator text={"Or"} />
            <Button text="Login via Twitter" classNames="bg-sky-blue w-full py-2 lg:py-3" />
          </div>
        </Card>
      </div>
    </div>
  </section>
);
