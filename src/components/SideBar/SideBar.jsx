import React, { useState } from "react";

function SideBar() {
  const items = [
    {
      id: "about_me",
      name: "About Me",
      component: "AboutMe",
    },
    {
      id: "projects",
      name: "Projects",
      component: "Projects",
    },
    {
      id: "contacts",
      name: "Contacts",
      component: "Contacts",
    },
  ];
  const [selectedItems, setSelectedItems] = useState("about_me");
  return (
    <div className="font-geologica bg-red-200 h-3/4 w-1/7">
      <div className="bg-blue-100 m-auto h-full w-4/5 flex flex-col justify-around items-center">
        {items.map((item, key) => {
          return (
            <a
              key={item.id}
              className={`${selectedItems === item.id ? "bg-gray-900 text-white transition ease-in-out translate-x-5" : "transition ease-in-out bg-gray-300 text-gray-800"} font-bold p-2 rounded items-center cursor-pointer flex-wrap`}
              onMouseEnter={() => setSelectedItems(item.id)}
            >
              <span>
                {item.name}
                {selectedItems == item.id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ms-2 size-6 inline-block hover:bg-gray-800 rounded"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
