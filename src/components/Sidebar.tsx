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

type SidebarProps = {};

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

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <aside className="flex flex-col w-[316px] overflow-y-auto space-y-8 py-8 px-9 bg-primary">
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
