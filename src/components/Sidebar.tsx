import { Link, NavLink } from "react-router-dom";
import {
  CardIcon,
  DashboardIcon,
  DollarSquareIcon,
  EyeIcon,
  StarIcon,
  TagIcon,
  UserIcon,
  Wallet2Icon,
  WalletIcon,
} from "./Icons";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const navItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    title: "Wallet",
    icon: <Wallet2Icon />,
    link: "/wallet",
  },
  {
    title: "Cards",
    icon: <CardIcon />,
    link: "/settings",
  },
  {
    title: "FX Centre",
    icon: <DollarSquareIcon />,
    link: "/fx-centre",
  },
  {
    title: "Beneficiaries",
    icon: <UserIcon />,
    link: "/beneficiaries",
  },
  {
    title: "Perks",
    icon: <TagIcon />,
    link: "/perks",
  },
];

const Sidebar: React.FC<SidebarProps> = ({isOpen, setIsOpen}) => {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } absolute inset-0 transition-all duration-500 ease-in-out z-50 lg:translate-x-0 lg:relative lg:flex flex-col lg:w-[316px] w-72 overflow-y-auto space-y-8 py-8 lg:px-9 px-4 bg-primary`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="text-white lg:hidden absolute right-4 top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="w-full flex justify-center">
        <Link to="/">
          <img src="./assets/logo.png" alt="GenioPay logo" />
        </Link>
      </div>

      <div className="w-full flex flex-col rounded-lg bg-[#2b899d] p-5">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center border-b-[0.5px] border-[#EAFBFF] pb-2 justify-between text-white">
            <div className="flex items-center space-x-1">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
                <WalletIcon />
              </span>
              <span className="flex flex-col">
                <p className="text-sm font-normal">Wallet Balance</p>
                <p className="text-base font-bold">$15,001.00</p>
              </span>
            </div>
            <button className="outline-none">
              <EyeIcon />
            </button>
          </div>

          <div className="flex items-center border-b-[0.5px] border-[#EAFBFF] pb-2 text-white">
            <div className="flex items-center space-x-1">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
                <StarIcon />
              </span>
              <span className="flex flex-col">
                <p className="text-sm font-normal">Awarded Points</p>
                <p className="text-base font-bold">35</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="h-10 w-[100px] flex items-center justify-center rounded text-white bg-[#fda4af]">
            Pay-In
          </button>
          <button className="h-10 w-[100px] rounded flex items-center justify-center text-[#2b899d] bg-white">
            Pay-Out
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        {navItems.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {({ isActive }) => (
              <div
                className={`flex items-center px-5 py-4 ${
                  isActive
                    ? "bg-white text-primary text-base"
                    : "bg-inherit text-white text-sm hover:bg-[#2b899d]"
                }  rounded-lg transition-colors duration-200`}
              >
                <div className="flex justify-center items-center space-x-4">
                  <span className={`${isActive ? "scale-[2]" : ""}`}>
                    {item.icon}
                  </span>
                  <p className="font-normal">{item.title}</p>
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </div>

      <div className="w-full flex flex-col space-y-4 rounded-lg p-5 bg-[#fff5e9]">
        <div className="flex space-x-2 w-full">
          <span className="w-12 h-12">
            <img src="./assets/horn.png" alt="Refer a friend" />
          </span>
          <span className="flex flex-col space-y-1">
            <p className="text-[#001b21] text-base">Refer and earn</p>
            <p className="text-[#2b4146] text-sm">
              Use the below link to invite friends
            </p>
          </span>
        </div>
        <button className="w-full h-14 hover:bg-[#2b899d] transition-colors duration-200 bg-primary rounded-lg text-white">
          Invite Friends
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
