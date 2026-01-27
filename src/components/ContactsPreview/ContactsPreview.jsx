import React from 'react'

function ContactsPreview() {
  return (
    <div
      className={`$bg-purple-300 col-span-10 flex flex-col items-center`}
    >
      <h1 className="text-5xl text-center p-8 bg-green-300 w-full">
        Contacts
      </h1>
      <br />
      <br />
      <div className="w-2/3 bg-red-300 p-9 text-xl">
        <div className="bg-gray-200 p-4 mb-8">
          <span className="ps-2 font-bold block mb-4">Contacts</span>
          <div className="mx-4">
            <p className="mb-2">
              <i className="bi bi-envelope-at-fill mr-2"></i>
              giovanni.francesco97@gmail.com
            </p>
            <p>
              <i className="bi bi-phone-fill mr-2"></i>
              +39 3493360996
            </p>
          </div>
        </div>

        <div className="text-center bg-gray-800 text-white p-4 mb-2">
          <span className="font-bold block mb-2">social media</span>
          <p>
            <i className="bi bi-linkedin mr-2"></i>
            <a
              href="https://www.linkedin.com/in/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              linkedin
            </a>
          </p>
        </div>
        <div className="text-center bg-gray-800 text-white p-4">
          <p>
            <i className="bi bi-github mr-2"></i>
            <a
              href="https://github.com/giovannifdipasquale"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactsPreview