import React, { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects";
function SideBar() {
  const items = [
    {
      id: "about_me",
      name: "About Me",
      Component: AboutMe,
    },
    {
      id: "projects",
      name: "Projects",
      Component: Projects,
    },
    {
      id: "contacts",
      name: "Contacts",
      Component: Contacts,
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
