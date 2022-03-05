import { NotificationIcon, TreeIcon } from "./Icons";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full px-8 flex items-center h-[93px] justify-between">
      <h5 className="text-[28px] font-semibold">Welcome, Huss Smith</h5>
      <div className="flex items-center space-x-7">
        <div className="h-[53px] w-[304px] border space-x-4 border-[#AAC0C5] rounded-2xl flex items-center px-4">
          <span className="text-[#55676B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type="text"
            className="outline-none border-none"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <TreeIcon />
            <p>0 Planted</p>
          </span>
          <NotificationIcon />
        </div>

        <div className="flex items-center space-x-2 justify-center">
          <span className="w-[26px] h-[26px] rounded-full bg-slate-500"></span>
          <span className="flex flex-col">
            <p className="text-xs text-[#22C55E]">Verified</p>
            <p className="text-base">Huss Smith</p>
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
