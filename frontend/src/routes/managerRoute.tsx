import ManagerMainLayout from "../layouts/ManagerMainLayout";
import { Outlet } from "react-router-dom";
import { UserGroupIcon, HomeIcon, CakeIcon } from "@heroicons/react/24/outline";
import EmployeeManagement from "../pages/Manager/EmployeeManagement";
import RoomManagement from "../pages/Manager/RoomManagement";
import ServiceManagement from "../pages/Manager/ServiceManagement";

const managetSidebarOptions = [
  {
    label: "Employee",
    path: "/manager/employees",
    icon: <UserGroupIcon />,
  },
  {
    label: "Room",
    path: "/manager/rooms",
    icon: <HomeIcon />,
  },
  {
    label: "Service",
    path: "/manager/services",
    icon: <CakeIcon />,
  },
];

export const managetRoute = [
  {
    path: "/manager",
    element: (
      <ManagerMainLayout sidebarOptions={managetSidebarOptions}>
        <Outlet />
      </ManagerMainLayout>
    ),
    children: [
      { path: "employees", element: <EmployeeManagement /> },
      { path: "rooms", element: <RoomManagement /> },
      { path: "services", element: <ServiceManagement /> },
    ],
  },
];
