import React from "react";

const Service = () => {
  return (
    <div id="service" className="lg:h-screen mt-20 p-2">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-[#0D5469] font-semibold">service</h2>
        <p className="text-xs">
          {" "}
          specialize in creating user-friendly, responsive, and scalable web
          applications tailored to your business needs
        </p>
      </div>

      <div  className="my-5 flex items-center justify-end">
        <a href="#project">
        <button  className="border-2 border-[#0D5469] p-2 rounded-md text-xs transition-all ease-linear duration-300 hover:bg-[#0D5469] hover:text-white">View My Work</button>
        </a>
      </div>


      <div className="lg:grid grid-cols-3 gap-5 lg:mt-10">
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-2 mt-10">
          <h2 className="text-3xl">🎨Web Design</h2>
          <p className="text-xs mt-5">
            Designing visually stunning, user-centric interfaces tailored to
            your brand identity.
          </p>
        </div>

        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-2 mt-10">
          <h2 className="text-3xl">💻Web Development</h2>
          <p className="text-xs mt-5">
            Developing scalable, high-performing websites using modern
            technologies like HTML, CSS, JavaScript, React, and Node.js.
          </p>
        </div>

        <div className="border-b-2 lg:border-b-0 border-black p-2 mt-10">
          <h2 className="text-3xl ">📱Responsive Design</h2>
          <p className="text-xs mt-5">
            Ensuring your website looks great and works flawlessly on all
            devices, from desktops to smartphones.
          </p>
        </div>
      

      
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-2 mt-10">
          <h2 className="text-3xl">🛠️Website Maintenance</h2>
          <p className="text-xs mt-5">
          Providing ongoing support to keep your site secure, fast, and up to date.
          </p>
        </div>

        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black p-2 mt-10">
          <h2 className="text-3xl">⚙️Custom Web Applications</h2>
          <p className="text-xs mt-5">
            Developing tailored web applications to meet your specific business needs.
          </p>
        </div>

        <div className="border-b-2 lg:border-b-0  border-black p-2 mt-10">
          <h2 className="text-3xl">🔗API Integration</h2>
          <p className="text-xs mt-5">
          Connecting your website with third-party tools and services for enhanced functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Service);
