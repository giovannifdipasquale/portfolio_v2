import React from "react";

function AboutMePreview() {
  return (
    <div className="bg-jet-2 md:m-8 md:h-auto h-[calc(100vh-7rem)] col-span-10 flex flex-col items-center overflow-y-auto">
      <h1 className="text-5xl text-center p-8 text-rosy w-full">
        {" "}
        <span className="font-medium block md:hidden text-jet text-3xl mb-4 bg-rosy ">Giovanni Di Pasquale </span>
        <span className="font-bold">Junior Developer</span>
      </h1>
      <div className="w-[calc(100%) md:w-[calc(100%-12rem) flex flex-col flex-1 justify-around text-white px-9 text-lg ">
        <p className="border-l-3 p-3 bg-jet shadow-xl ">
          Consistently upgrading my skills in{" "}
          <span className="font-bold">UI/UX</span>,{" "}
          <span className="font-bold">design patterns</span>, and{" "}
          <span className="font-bold">Restful APIs</span> integration. My goal
          is to build <span> <b> neat</b></span>, user-friendly interfaces
        </p>
        <div className="p-3 bg-rosy text-jet shadow-xl">
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

        <div className="p-3 bg-rosy text-jet shadow-xl mt-4">
          <div className="mx-4 font-bold flex flex-col gap-2">
            <p className="mb-2">
              <i className="bi bi-envelope-at-fill mr-2"></i>
              <a className='hover-text-smoky hover:underline' href="mailto:giovanni.francesco97@gmail.com"> giovanni.francesco97@gmail.com</a>
            </p>
            <p>
              <i className="bi bi-phone-fill mr-2"></i>
              +39 3493360996
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center text-white p-3 gap-5">
          <div className="col-span-1 p-5 bg-jet shadow-xl">

            <a
              className="hover:underline text-rosy hover:text-smoky text-5xl"
              href="https://github.com/giovannifdipasquale"
              target="_blank"
            >
              <i className="bi bi-github"></i> my github
            </a>
          </div>

          <div className="col-span-1 p-5 bg-jet shadow-xl">
            <a
              className="hover:underline text-rosy hover:text-smoky text-5xl"
              href="https://www.linkedin.com/in/giovannifdipasquale"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i> linkedin
            </a>
          </div>

          <div className="col-span-1 p-5 bg-jet shadow-xl">
            <a
              className="hover:underline text-rosy hover:text-smoky text-5xl"
              href="https://github.com/giovannifdipasquale"
              target="_blank"
            >
              <i className="bi bi-file-arrow-down-fill"></i> my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePreview;
