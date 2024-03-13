import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero_img from "../app/img/hero_img.png";
import { FaTwitter, FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-bg w-full py-32">
      <div className="container mx-auto ">
        <div className="grid gap-10 mt-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-[#dddddd] font-bold text-[22px] lg:text-[36px] mb-[10px]">
              I am Gerold
            </h3>
            <h1 className="text-[35px] lg:text-[65px] text_gradient font-bold leading-[1.2]">
              Web Developer +<br /> UX Designer
            </h1>
          </div>
          <div className="flex justify-center lg:justify-end lg:row-span-2">
            <Image src={hero_img} alt="hero_img" className="hero-image-box" />
          </div>
          <div className="space-y-5 lg:space-y-2">
            <p className=" max-w-[550px] w-full mb-0 text-[20px] font-light text-[#dddddd]">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className="flex items-center gap-8 lg:pt-10">
              <Link
                href={"#"}
                className="text-[15px] leading-[1] font-medium text-[#8750f7] rounded-[50px] py-[17px] px-[35px] border border-[#8750f7] tracking-[1px] transition-all duration-300 hover:bg-[#8750f7] hover:text-[#dddddd]"
              >
                Download CV
              </Link>
              <div className="flex items-center gap-5">
                <Link
                  href={"#"}
                  className="border border-[#8750f7] rounded-full p-[10px] text-[#8750f7] hover:text-white transition-all duration-300 hvr-radial-out bg-transparent overflow-hidden"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={"#"}
                  className="border border-[#8750f7] rounded-full p-[10px] text-[#8750f7] hover:text-white transition-all duration-300 hvr-radial-out bg-transparent overflow-hidden"
                >
                  <FaDribbble />
                </Link>
                <Link
                  href={"#"}
                  className="border border-[#8750f7] rounded-full p-[10px] text-[#8750f7] hover:text-white transition-all duration-300 hvr-radial-out bg-transparent overflow-hidden"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href={"#"}
                  className="border border-[#8750f7] rounded-full p-[10px] text-[#8750f7] hover:text-white transition-all duration-300 hvr-radial-out bg-transparent overflow-hidden"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center lg:justify-items-start">
          <div className="flex items-center gap-4">
            <h3 className="text-white text-[45px] lg:text-[64px] font-semibold leading-[1.1em]">
              <CountUp start={0} end={14} duration={5} />
            </h3>
            <p className="text-center lg:text-start text-[#dddddd] text-[16px] leading-[24px] font-normal">
              Years of <br />
              Experience
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-white text-[45px] lg:text-[64px] font-semibold leading-[1.1em]">
              <CountUp start={0} end={50} duration={5} />+
            </h3>
            <p className="text-center lg:text-start text-[#dddddd] text-[16px] leading-[24px] font-normal">
              Project <br />
              Completed
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-white text-[45px] lg:text-[64px] font-semibold leading-[1.1em]">
              <CountUp start={0.0} end={1.5} duration={5} decimals={1} />K
            </h3>
            <p className="text-center lg:text-start text-[#dddddd] text-[16px] leading-[24px] font-normal">
              Happy <br />
              Clients
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-white text-[45px] lg:text-[64px] font-semibold leading-[1.1em]">
              <CountUp start={0} end={14} duration={5} />
            </h3>
            <p className="text-center lg:text-start text-[#dddddd] text-[16px] leading-[24px] font-normal">
              Years of <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
