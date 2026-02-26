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
      id: "ProjectsPreview",
      name: "Projects",
      Component: ProjectsPreview,
      path: '/projects'
    },
    {
      id: "about_me",
      name: "About Me",
      Component: AboutMePreview,
      path: '/about_me'
    },
  ];
  const [selectedItems, setSelectedItems] = useState("ProjectsPreview");
  return (
    <>
      <div className="hidden md:block font-geologica col-span-2">
        <div className="m-auto h-full w-4/5 flex flex-col justify-center items-center gap-y-20">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedItems(item.id)}
                // 1. Keep it as flex for horizontal alignment
                className={`font-bold p-2 cursor-pointer flex items-center justify-between transition-all duration-250 ease-in-out border border-white/5 shadow-xl
    ${selectedItems === item.id ? "translate-x-5 bg-rosy text-jet" : "bg-jet-2 text-white"}`}
              >
                {/* Left: The Title */}
                <span className="">{item.name}</span>

                {/* Right: The Expanding Detail Box */}
                <div
                  className={`flex items-center transition-all duration-250 ease-in-out overflow-hidden
      ${selectedItems === item.id
                      ? "max-w-[100px] opacity-100 ml-3" // Expanded
                      : "max-w-0 opacity-0 ml-0"        // Collapsed
                    }`}
                >
                  <a href={item.path} className="text-[10px] bg-jet/20 px-2 py-1 border border-jet/10 uppercase whitespace-nowrap hover-bg-jet hover-text-rosy">
                    MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {items.map(
        ({ id, Component }) => selectedItems === id &&
          <Component key={id} />,
      )}
      <div className="block md:hidden font-geologica p-3">
        <div className="flex justify-around items-center">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedItems(item.id)}
                className={`font-bold p-2 cursor-pointer flex items-center justify-between transition-all duration-250 ease-in-out border border-white/5 shadow-xl
                  ${selectedItems === item.id ? "bg-rosy text-jet" : "bg-jet-2 text-white"}`}
              >
                <span>{item.name}</span>
                <div
                  className={`flex items-center transition-all duration-500 ease-in-out overflow-hidden
                    ${selectedItems === item.id
                      ? "max-w-[100px] opacity-100 ml-2"
                      : "max-w-0 opacity-0 ml-0"
                    }`}
                >
                  <a href={item.path} className="text-[10px] bg-jet/20 px-2 py-1 border border-jet/10 uppercase whitespace-nowrap hover-bg-jet hover-text-rosy">
                    MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SideBar;
