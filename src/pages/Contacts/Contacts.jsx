import React from "react";

function Contacts() {
    return (
        <div className="bg-jet-2 col-span-10 flex flex-col items-center min-h-screen text-white">
            <h1 className="text-5xl text-center p-8 text-rosy w-full">
                Contacts
            </h1>


            <div className="w-2/3 p-9 text-xl">
                <div className="mb-8">
                    <a href="/" className="hover:underline text-rosy hover:text-smoky font-bold">
                        /home
                    </a>
                </div>

                <div className="bg-jet p-6  shadow-md mb-8">
                    <span className="font-bold block mb-4 text-rosy text-2xl">Contacts</span>
                    <div className="space-y-3">
                        <p className="mb-2 flex items-center">
                            <i className="bi bi-envelope mr-3 text-rosy"></i>
                            <span className="font-bold mr-2">Email:</span>{" "}
                            giovanni.francesco97@gmail.com
                        </p>
                        <p className="mb-2 flex items-center">
                            <i className="bi bi-telephone mr-3 text-rosy"></i>
                            <span className="font-bold mr-2">Phone:</span> +39 3493360996
                        </p>
                        <p className="flex items-center">
                            <i className="bi bi-geo-alt mr-3 text-rosy"></i>
                            <span className="font-bold mr-2">Address:</span> Bologna, Italy
                        </p>
                    </div>
                </div>

                <div className="text-center bg-jet p-6  shadow-md mb-8">
                    <span className="font-bold block mb-4 text-rosy text-2xl">Social Media</span>
                    <p className="mb-2">
                        <i className="bi bi-linkedin mr-2 text-rosy"></i>
                        <a
                            href="https://www.linkedin.com/in/giovannifdipasquale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white hover:text-rosy transition-colors"
                        >
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        <i className="bi bi-github mr-2 text-rosy"></i>
                        <a
                            href="https://github.com/giovannifdipasquale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white hover:text-rosy transition-colors"
                        >
                            GitHub
                        </a>
                    </p>
                </div>

                <div className="text-center bg-jet p-6  shadow-md">
                    <span className="font-bold block mb-4 text-rosy text-2xl">My CV</span>
                    <p className="mb-2">
                        <i className="bi bi-file-earmark-text mr-2 text-rosy"></i>
                        <a
                            href="/cv_aggiornato.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white hover:text-rosy transition-colors"
                        >
                            Download Cv IT
                        </a>
                    </p>
                    <p>
                        <i className="bi bi-file-earmark-text mr-2 text-rosy"></i>
                        <a
                            href="/cv_eng_dipasquale.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white hover:text-rosy transition-colors"
                        >
                            Download Cv EN
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;