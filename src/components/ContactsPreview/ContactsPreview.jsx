import React from 'react'

function ContactsPreview() {
  return (
    <div
      className="bg-jet-2 md:m-8 md:h-auto h-[calc(100vh-7rem)] col-span-10 flex flex-col items-center"
    >
      <h1 className="text-5xl text-center p-8 text-rosy w-full">
        <span className="font-bold">Contacts</span>
      </h1>


      <div className="w-[calc(100%) md:w-[calc(100%-12rem)] flex flex-col flex-1 justify-start text-jet px-9 text-lg">
        <div className="text-center bg-jet text-white p-4 my-3">
          <span className="font-bold block mb-2">social media</span>
          <p>
            <i className="bi bi-linkedin mr-2"></i>
            <a
              href="https://www.linkedin.com/in/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-rosy hover:text-smoky"
            >
              linkedin
            </a>
          </p>
        </div>
        <div className="text-center bg-jet text-white p-4 my-3">
          <p>
            <i className="bi bi-github mr-2"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-rosy hover:text-smoky"
            >
              github
            </a>
          </p>
        </div>
        <div className="bg-rosy border border-smoky p-4 my-3">

          <div className="mx-4">
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


      </div>
    </div>
  );
}

export default ContactsPreview