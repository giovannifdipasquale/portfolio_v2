import projectsData from 'src/data/projects.json';

const frontendProjects = projectsData.frontend;
const backendProjects = projectsData.backend;

function Projects() {
    return (
        <div className="bg-jet-2 col-span-10 flex flex-col items-center min-h-screen text-white">
            <h1 className="text-5xl text-center p-8 text-rosy w-full">
                Projects
            </h1>


            <div className="w-2/3 p-9 text-xl">
                <div className="mb-8">
                    <a href="/" className="hover:underline text-rosy hover:text-smoky font-bold">
                        /home
                    </a>
                </div>

                <div className="text-center bg-jet p-6  shadow-md mb-8">
                    <p>
                        <i className="bi bi-github mr-2 text-rosy"></i>
                        <a
                            href="https://github.com/giovannifdipasquale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white hover:text-rosy transition-colors"
                        >
                            My GitHub Profile
                        </a>
                    </p>
                </div>

                <div className="bg-jet p-6  shadow-md mb-8">
                    <span className="font-bold block mb-6 text-rosy text-2xl">Front-end Projects</span>
                    <div className="space-y-8">
                        {frontendProjects.map((project, index) => (
                            <div key={index} className="border-l-2 border-rosy pl-4">
                                <p className="mb-2">
                                    <i className={`${project.icon} mr-2 text-rosy`}></i>{" "}
                                    <span className="font-bold text-lg">{project.name}</span> – {project.description}
                                </p>
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {project.tech.map((techItem, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-300 bg-smoky px-2.5 py-1 border border-white/5">
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-rosy hover:text-white transition-colors text-sm font-semibold"
                                    >
                                        View on GitHub <i className="bi bi-arrow-right ml-1"></i>
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-rosy hover:text-white transition-colors text-sm font-semibold"
                                        >
                                            Try it out <i className="bi bi-box-arrow-up-right ml-1"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-jet p-6  shadow-md">
                    <span className="font-bold block mb-6 text-rosy text-2xl">
                        Back-end / Full-stack Projects
                    </span>
                    <div className="space-y-8">
                        {backendProjects.map((project, index) => (
                            <div key={index} className="border-l-2 border-rosy pl-4">
                                <p className="mb-2">
                                    <i className={`${project.icon} mr-2 text-rosy`}></i>{" "}
                                    <span className="font-bold text-lg">{project.name}</span> – {project.description}
                                </p>
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {project.tech.map((techItem, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-300 bg-smoky px-2.5 py-1 border border-white/5">
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-rosy hover:text-white transition-colors text-sm font-semibold"
                                    >
                                        View on GitHub <i className="bi bi-arrow-right ml-1"></i>
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-rosy hover:text-white transition-colors text-sm font-semibold"
                                        >
                                            Try it out <i className="bi bi-box-arrow-up-right ml-1"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;