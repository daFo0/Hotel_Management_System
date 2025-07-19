// src/components/Sidebar.tsx
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useState, type ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export interface SidebarOption {
  icon: ReactElement;
  label: string;
  path: string;
}

interface SidebarProps {
  role: string;
  options: SidebarOption[];
}

export default function Sidebar({ role, options }: SidebarProps) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col py-4
        ${isHovered ? "w-64 px-4" : "w-14 px-2"} 
        bg-neutral-700 duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-auto">
        <h1
          className={`text-white font-bold text-2xl mb-4 duration-300 
          ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          {role}
        </h1>

        <ul className="space-y-2">
          {options.map((option, index) => {
            const isActive =
              location.pathname === option.path ||
              location.pathname.startsWith(option.path + "/");

            return (
              <li key={index}>
                <Link
                  to={option.path}
                  className={`flex items-center rounded duration-300 p-2 h-10
                  ${isActive ? "bg-orange-500" : "hover:bg-neutral-500"}`}
                >
                  <span className="flex-none text-white h-5 w-5 ms-0.5 opacity-100">
                    {option.icon}
                  </span>

                  <span
                    className={`text-white font-bold ms-2 transition-opacity duration-300 
                    ${isHovered ? "opacity-100" : "opacity-0"}`}
                  >
                    {option.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex-none">
        <Link
          to="/Login"
          className="flex items-center rounded duration-300 p-2 hover:bg-neutral-500 h-10"
        >
          <ArrowLeftCircleIcon className="flex-none text-white h-5 w-5 ms-0.5" />

          <span
            className={`text-white font-bold ms-2 transition-opacity duration-100 
              ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Log out
          </span>
        </Link>
      </div>
    </div>
  );
}
