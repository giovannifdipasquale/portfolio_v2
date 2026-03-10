import React from 'react'
import projectsData from 'src/data/projects.json'

function ProjectsPreview() {
  console.log(projectsData);

  return (
    <div className="relative md:mx-8 md:mt-20 md:mb-15 md:h-auto h-[calc(100vh-7rem)] col-span-10 flex flex-col items-center overflow-y-auto">
      <h1 className="text-5xl text-center p-8 text-rosy w-full">
        <span className="font-bold">Projects</span>
      </h1>
      <div className="absolute text-4xl top-9 right-7 bg-jet p-2">
        <p>

          <a
            href="https://github.com/giovannifdipasquale"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <i className="bi bi-github text-rosy hover-text-white"></i>
          </a>
        </p>
      </div>
      <div className="w-[calc(100%) md:w-[calc(100%-12rem) flex flex-col flex-1 justify-center text-white text-lg">


        <div className="grid grid-cols-12">
          {/* Front-End Category Card */}
          <div className="col-span-12 md:col-span-12 bg-jet-2 text-white overflow-hidden sm:mx-0 shadow-2xl">
            <div className="divide-y divide-white/5 bg-jet ">
              {projectsData.frontend.map((project, idx) => (
                <div key={idx} className="border border-white/5 shadow-xl p-4 px-8 bg-jet hover:bg-white/5 transition-colors group flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                  {/* Left: Icon & Info */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 text-rosy shrink-0">
                      <i className={`${project.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-white/90 text-lg leading-tight mb-1 text-nowrap">{project.name}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[10px] bg-smoky uppercase font-bold text-gray-400 px-2 py-0.5 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-row items-center justify-center gap-2 shrink-0 mt-2 sm:mt-0">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rosy hover:bg-rosy/90 flex-1 text-jet text-xs font-bold py-1.5 px-3 transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                        title="Try it out"
                      >
                        <span>Vercel</span>
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-jet hover:bg-white/10 transition-colors"
                      title="View Code"
                    >
                      <i className="bi bi-github text-xl"></i>
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPreview