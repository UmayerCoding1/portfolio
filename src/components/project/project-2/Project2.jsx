import React from "react";
import projectMAE from "./../../..//assets/project/project-2.png";
import { IoIosLink as LinkIcon } from "react-icons/io";
import { GoRepo } from "react-icons/go";
const Project2 = () => {
  return (
    <div className="mt-10">
      <div className="lg:flex flex-row-reverse">
        <div className="lg:w-1/2 lg:flex items-center flex-row-reverse">
          <img className="lg:w-[90%]" src={projectMAE} alt="" />
          <div className="w-20 h-[1px] bg-black hidden lg:block"></div>
        </div>

        <div className="lg:w-1/2 border-r border-black ">
          <div className="ml-5">
            <div className="lg:flex items-center justify-between">
              <div className="mb-4 lg:mb-0">
                <h2 className="text-3xl ">
                  MAE
                  <span className="text-[10px]">(Manage asset explore)</span>
                </h2>
                <p className="text-xs">(management systems )</p>
              </div>

              <div className="flex">
                <a href="https://mae-auth.web.app/" target="_blank">
                  <button className="text-xs mr-5 flex items-center bg-blue-500 p-2 rounded-xl text-white">
                    <LinkIcon /> Live link
                  </button>
                </a>

                <a
                  href="https://github.com/UmayerCoding1/Manage-Assrt-Explorer"
                  target="_blank"
                >
                  <button className="text-xs mr-5 flex items-center text-blue-500 border-2 border-blue-500 p-2 rounded-xl transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white ">
                    {" "}
                    <GoRepo /> Server Repo
                  </button>
                </a>

                <a
                  href="https://github.com/UmayerCoding1/manage-assrt-explorer-client"
                  target="_blank"
                >
                  <button className="text-xs mr-5 flex items-center text-blue-500 border-2 border-blue-500 p-2 rounded-xl transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white ">
                    <GoRepo /> Client Repo
                  </button>
                </a>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs">
                Register and select subscription packages (e.g., $10 for 5
                employees, $15 for 8 employees). Add employees manually to the
                platform before inviting them to join. Manage employee profiles
                and subscription details via a dedicated dashboard. Employees
                can only access the system after being added by HR, ensuring
                controlled and secure onboarding.
              </p>

              <p className="text-xs mt-5">
                Check a employee features to join{" "}
                <span className="underline text-blue-600">
                  [email: asif.egenerationltd@gmail.com, password: asif100]
                </span>
              </p>

              <h2 className="font-semibold underline mt-5">
                Technologies Used:
              </h2>
              <p className="text-xs leading-relaxed">
                #react.js, #express.js, #node.js, #mongodb, #firebase, #jwt,
                #strip(payment) #tailwind css, #mui, #react-dom, #react-helmet,
                #axios, #react-query, #react-hook-form #sweetalert, #react-icon,
                #react-pdf, #swiper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Project2);
