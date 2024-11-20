import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import ArchiveBoxIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/products",
    icon: <ArchiveBoxIcon className={iconClasses} />,
    name: "Products",
  },
  {
    path: "/pos",
    icon: <BuildingStorefrontIcon className={iconClasses} />,
    name: "POS",
  },

  {
    path: "/sales",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: "Sales",
  },
  {
    path: "/charts",
    icon: <ChartBarIcon className={iconClasses} />,
    name: "Analytics",
  },

  {
    path: "", //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: "Settings",
    submenu: [
      {
        path: "/settings-profile",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Profile",
      },
      {
        path: "/users-management",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Users Management",
      },
      {
        path: "/login",
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: "Login",
      },
      {
        path: "/register",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Register",
      },
      {
        path: "/forgot-password",
        icon: <KeyIcon className={submenuIconClasses} />,
        name: "Forgot Password",
      },
    ],
  },
];

export default routes;
