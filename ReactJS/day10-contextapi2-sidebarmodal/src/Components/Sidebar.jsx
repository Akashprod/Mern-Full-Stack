import React from "react";
import { useGlobalContext } from "../AppContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { links, social } from "../Data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div>
        <img src="null" alt="Coding Addict" />
        <button onClick={closeSidebar}>
          <AiFillCloseCircle />
        </button>
      </div>

      <ul>
        {links.map((link) => {
          const { id, url, text, icon } = link;

          return (
            <li key={id}>
              <a href={url}>
                {text} {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <ul>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
