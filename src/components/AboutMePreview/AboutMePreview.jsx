import React from "react";

function AboutMePreview() {
  return (
    <div className="md:m-8 md:mt-20 md:mb-15 m-0 h-[calc(100vh-7rem)] md:h-auto md:col-span-10 flex flex-col items-center overflow-y-auto">
      <h1 className="text-5xl text-center p-8 text-rosy w-full">
        {" "}
        <span className="font-medium block md:hidden text-jet text-3xl mb-4 bg-rosy ">Giovanni Di Pasquale </span>
        <span className="font-bold">Junior Developer</span>
      </h1>
      <div className="w-[calc(100%)] md:w-[calc(100%-12rem) flex flex-col flex-1 justify-around text-white text-lg">
        <div className="mx-15 break-anywhere border-l-3 px-3 my-5 bg-jet">
          Continuously improving my skills in{" "}
          <span className="font-bold">UI/UX</span>,{" "}
          <span className="font-bold">design patterns</span>, and{" "}
          <span className="font-bold">Restful APIs</span> integration. My goal
          is to build <span> <b> functional, cool</b></span> and user-friendly interfaces
        </div>

        <div className="mx-15 break-anywhere p-3 bg-rosy text-jet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9 inline-block mb-1"
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ps-2 font-bold">Skills & Technologies</span>
          <div className="mx-4">
            <p>
              <span className="font-bold">Frontend:</span> HTML5, CSS3,
              JavaScript (ES6+ & jQuery), React, Angular, Tailwind CSS,
              Bootstrap
            </p>
            <p>
              {" "}
              <span className="font-bold">Backend:</span> PHP, MySQL, Laravel,
              Joomla Development, REST API Integration
            </p>
            <p>
              <span className="font-bold">Tools:</span> Git, GitHub, Postman,
              Vite, Composer, npm
            </p>
          </div>
        </div>

        <div className="mx-3 md:mx-15 p-3 bg-jet">
          <p className="font-bold text-rosy text-2xl py-3">
            Contatti
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-4">
            <div className="font-bold flex flex-col">
              <p className="mb-2 hover-text-white text-nowrap font-light">
                <i className="bi bi-envelope-at-fill mr-2"></i>
                <a className='no-underline' href="mailto:giovanni.francesco97@gmail.com"> giovanni.francesco97@gmail.com</a>
              </p>
              <p className="font-light">
                <i className="bi bi-phone-fill mr-2"></i>
                +39 3493360996
              </p>
            </div>
            <div className="flex">
              <div className="text-rosy text-4xl bg-jet py-2 px-6 hover-text-white">

                <a
                  className=""
                  href="https://github.com/giovannifdipasquale"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>

              <div className="text-rosy text-4xl bg-jet py-2 px-6 hover-text-white">
                <a
                  className=""
                  href="https://www.linkedin.com/in/giovannifdipasquale"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>

              <div className="text-rosy text-4xl bg-jet py-2 px-6 hover-text-white text-nowrap">
                <a
                  className=""
                  href="/cv-IT.pdf"
                  target="_blank"
                >
                  <i className="bi bi-file-arrow-down-fill"></i> CV
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default AboutMePreview;
