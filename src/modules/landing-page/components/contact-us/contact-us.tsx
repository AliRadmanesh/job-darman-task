import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

import { Button } from "components/button";
import { Card } from "components/card";

export const ContactUs = () => (
  <section className="relative mx-auto h-[calc(100vh-84px)]">
    {/* Background-Image */}
    <div className="bg-[url('./src/modules/landing-page/components/contact-us/background-image.jpg')] w-full h-screen bg-center bg-no-repeat bg-cover absolute top-[-10px] left-0" />
    <div className="flex flex-col justify-center items-center px-4 lg:px-0 lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-24 h-[calc(100vh-84px-20px)]">
      <div className="z-10 w-[170px] md:w-[270px] lg:w-[370px]">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[3rem]">{"Let’s Keep in Touch"}</p>
        <p className="text-white text-xs md:text-sm lg:text-base mt-8">{"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily."}</p>
        <div className="flex items-center gap-x-4 mt-10">
          <FaPhoneAlt color="white" />
          <p className="text-base text-white">{"+1 555 505 5050"}</p>
        </div>
        <div className="flex items-center gap-x-4 mt-6">
          <MdEmail color="white" />
          <p className="text-base text-white">{"info@designmodo.com"}</p>
        </div>
        <div className="flex items-center gap-x-4 mt-6">
          <FaBuilding color="white" />
          <p className="text-base text-white">{"San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909"}</p>
        </div>
      </div>
      <div className="z-10">
        <Card>
          <div className="p-10 flex flex-col justify-center">
            <div className="flex gap-x-4 mb-6">
              <div className="w-2/3">
                <p className="text-sm text-tab-active mb-1">{"YOUR NAME"}</p>
                <input type="text" className="form-input px-4 py-3 rounded-full border-border w-full" placeholder="First name" />
              </div>
              <div className="w-1/3">
                <p className="text-sm text-tab-active mb-1">{"BUDGET"}</p>
                <select className="form-select px-4 py-3 rounded-full border-border w-full">
                  <option value="$500">{"$500"}</option>
                  <option value="$1000">{"$1000"}</option>
                  <option value="$2000">{"$2000"}</option>
                </select>
              </div>
            </div>
            <p className="text-sm text-tab-active mb-1">{"INPUT FIELD"}</p>
            <input type="email" className="form-input px-4 py-3 rounded-full border-border w-full mb-6" placeholder="name@mail.com" />
            <p className="text-sm text-tab-active mb-1">{"YOUR MESSAGE"}</p>
            <input type="text" className="form-input px-4 py-3 rounded-full border-border w-full mb-4" placeholder="Message" />
            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" id="checkbox" className="form-checkbox rounded text-green mr-2" />
                <label htmlFor="checkbox" className="text-gray-400 text-base">Send me a copy</label>
              </div>
              <Button text="Send" classNames="bg-green mt-4 py-2 lg:py-3" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);
