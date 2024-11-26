import React from "react";
import projectEMH from "./../../../assets/project/project-1.png";
import { IoIosLink as LinkIcon } from "react-icons/io";
import { GoRepo } from "react-icons/go";
const Project1 = () => {
  return (
    <div className="mt-10">
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:flex items-center">
          <img className="lg:w-[90%]" src={projectEMH} alt="" />
          <div className="w-20 h-[1px] bg-black hidden lg:block"></div>
        </div>

        <div className="lg:w-1/2 border-l border-black ">
          <div className="ml-5">
            <div className="lg:flex items-center justify-between">
              <div className="mb-4 lg:mb-0">
                <h2 className="text-3xl ">eMarket Hub</h2>
                <p className="text-xs">(e commerce )</p>
              </div>

              <div className="flex">
                <a href="https://emarket-hub.web.app/" target="_blank">
                  <button className="text-xs mr-5 flex items-center bg-blue-500 p-2 rounded-xl text-white">
                    <LinkIcon /> Live link
                  </button>
                </a>

                <a
                  href="https://github.com/UmayerCoding1/E-Market-hub-server"
                  target="_blank"
                >
                  <button className="text-xs mr-5 flex items-center text-blue-500 border-2 border-blue-500 p-2 rounded-xl transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white ">
                    {" "}
                    <GoRepo /> Server Repo
                  </button>
                </a>

                <a
                  href="https://github.com/UmayerCoding1/eMarket-hub-client"
                  target="_blank"
                >
                  <button className="text-xs mr-5 flex items-center text-blue-500 border-2 border-blue-500 p-2 rounded-xl transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white ">
                    <GoRepo /> Client Repo
                  </button>
                </a>
              </div>
            </div>

            <p className="text-xs">
              {" "}
              Available by{" "}
              <a
                className="text-blue-500"
                href="https://emarket-hub.web.app/dashboard"
                target="_blank"
              >
                {" "}
                admin dashboard
              </a>
            </p>

            <div className="mt-5">
              <p className="text-xs">
                Explore thousands of products effortlessly with intuitive
                navigation, quick filters, and a powerful search system. Enjoy
                secure payment options, save favorites to your wishlist, and
                access detailed product reviews and descriptions. Stay updated
                on exclusive discounts, and enjoy 24/7 customer support. Easily
                share your finds on social media and use guest checkout for a
                fast, hassle-free purchase experience. Our features are designed
                to make your shopping seamless and enjoyable.
              </p>

              <h2 className="font-semibold underline mt-5">
                Technologies Used:
              </h2>
              <p className="text-xs leading-relaxed">
                #react.js, #express.js, #node.js, #mongodb, #firebase, #jwt,
                #helmet.js, #sslcommerz, #tailwind css, #mui, #react-dom,
                #react-helmet, #axios, #react-query, #react-hook-form, #react-hot-toast,
                #react-icon, #react-pdf, #swiper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Project1);
