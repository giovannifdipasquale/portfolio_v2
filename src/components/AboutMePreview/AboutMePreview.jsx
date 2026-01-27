import React from "react";

function AboutMePreview() {
  return (
    <div className="bg-purple-300 col-span-10 flex flex-col items-center">
      <h1 className="text-5xl text-center p-8 bg-green-300 w-full">
        {" "}
        Junior Front-End Developer with Back-End Experience
      </h1>
      <br />
      <br />
      <div className="w-2/3 bg-red-30 p-9 text-xl">
        <p>
          Consistently upgrading my skills in{" "}
          <span className="font-bold">UI/UX</span>,{" "}
          <span className="font-bold">design patterns</span>, and{" "}
          <span className="font-bold">Restful APIs</span> integration. My goal
          is to build <span> <b> neat</b></span>, user-friendly interfaces
        </p>
        <br />
        <br />
        <div className="bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 inline-block mb-1"
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
        <br />
        <br />
        <div className="text-center bg-gray-800 text-white">
          <i className="bi bi-github me-2"></i>
          <span>
            {" "}
            Check out my latest Projects on{" "}
            <a
              className="hover:underline text-blue-400"
              href="https://github.com/giovannifdipasquale"
              target="_blank"
            >
              {" "}
              Github{" "}
            </a>
          </span>
        </div>
        <div className="text-center bg-gray-800 text-white">
          <p>
            <i className="fs-5 bi bi-file-earmark-text me-2"></i>
            <span className="">
              Download{" "}
              <a
                className="hover:underline text-blue-400"
                href="https://github.com/giovannifdipasquale"
                target="_blank"
              >
                CV{" "}
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMePreview;
