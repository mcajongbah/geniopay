import { Search } from ".";
import { NotificationIcon, TreeIcon } from "./Icons";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full flex items-center h-14 border-b lg:border-b-0 lg:h-[93px] lg:px-8 px-4 justify-between">
      <div className="flex space-x-2 items-center">
        <button className="outline-none lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h5 className="lg:text-[28px] text-base font-semibold">
          Welcome, Huss Smith
        </h5>
      </div>
      <div className="lg:flex items-center space-x-7">
        <div className="hidden lg:block">
          <Search />
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <TreeIcon />
            <p>0 Planted</p>
          </span>
          <NotificationIcon />
        </div>

        <div className="flex items-center space-x-2 justify-center">
          <span className="w-[26px] h-[26px] rounded-full bg-slate-500"></span>
          <span className="flex flex-col">
            <p className="lg:text-xs text-[10px] text-[#22C55E]">Verified</p>
            <p className="lg:text-base text-sm">Huss Smith</p>
          </span>

          <button className="outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
