import React from 'react'

function ProjectsPreview() {
  return (
    <div
      className={`bg-purple-300 col-span-10 flex flex-col items-center`}
    >
      <h1 className="text-5xl text-center p-8 bg-green-300 w-full">
        Projects
      </h1>
      <br />
      <br />
      <div className="w-2/3 bg-red-300 p-9 text-xl">
        <div className="text-center bg-gray-800 text-white p-4 mb-8">
          <p>
            <i className="bi bi-github mr-2"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              github.com/giovannifdipasquale
            </a>
          </p>
        </div>

        <div className="bg-gray-200 p-4 mb-4">
          <span className="font-bold block mb-4">front-end</span>
          <div className="mx-4">
            <p className="mb-2">
              <i className="bi bi-palette mr-2"></i>
              <a
                href="https://github.com/giovannifdipasquale/artstore-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Art Store
              </a>
            </p>
            <p>
              <i className="bi bi-cloud-sun mr-2"></i>
              <a
                href="https://github.com/giovannifdipasquale/weather_fetch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Weather Fetch
              </a>
            </p>
          </div>
        </div>

        <div className="bg-gray-200 p-4">
          <span className="font-bold block mb-4">back-end / full-stack</span>
          <div className="mx-4">
            <p className="mb-2">
              <i className="bi bi-stars mr-2"></i>
              <a
                href="https://github.com/giovannifdipasquale/ai-sentiment-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                AI Sentiment Analysis
              </a>
            </p>
            <p>
              <i className="bi bi-cart mr-2"></i>
              <a
                href="https://github.com/giovannifdipasquale/presto.it_project"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Presto.it Project
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPreview