import React, { useState } from "react";
import AboutMePreview from "src/components/AboutMePreview/AboutMePreview";
import ContactsPreview from "src/components/ContactsPreview/ContactsPreview";
import ProjectsPreview from "src/components/ProjectsPreview/ProjectsPreview";
import AboutMe from "src/pages/AboutMe/AboutMe";
import Contacts from "src/pages/Contacts/Contacts";
import Projects from "src/pages/Projects/Projects";
function SideBar() {
  const items = [
    {
      id: "about_me",
      name: "About Me",
      Component: AboutMePreview,
    },
    {
      id: "ProjectsPreview",
      name: "Projects",
      Component: ProjectsPreview,
    },
    {
      id: "ContactsPreview",
      name: "Contacts",
      Component: ContactsPreview,
    },
  ];
  const [selectedItems, setSelectedItems] = useState("about_me");
  return (
    <>
      <div className="font-geologica bg-red-400 col-span-2">
        <div className="bg-blue-100 m-auto h-full w-4/5 flex flex-col justify-around items-center">
          {items.map((item) => {
            return (
              <a
                key={item.id}
                className={`${selectedItems === item.id ? "bg-gray-900 text-white transition ease-in-out translate-x-5 delay-100" : "transition ease-in-out delay-100 bg-gray-300 text-gray-800"} font-bold p-2 rounded items-center cursor-pointer flex-wrap`}
                onMouseEnter={() => setSelectedItems(item.id)}
              >
                <span>
                  {item.name}
                  <i
                    className={`bi bi-arrow-right-circle transition ease-in-out duration-300 ${selectedItems === item.id ? "opacity-100 scale-120 translate-x-2" : "opacity-0"} inline-block size-6 rounded`}
                  ></i>
                </span>
              </a>
            );
          })}
        </div>
      </div>
      {items.map(
        ({ id, Component }) => selectedItems === id && <Component key={id} />,
      )}
    </>
  );
}

export default SideBar;
