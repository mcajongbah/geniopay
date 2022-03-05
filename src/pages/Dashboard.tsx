import { Link } from "react-router-dom";
import { WalletCard } from "../components";

type DashboardProps = {

}

const wallets = [
  {
    name: "Personal account",
    balance: "$10,250.00",
    currency: "USD",
    image: "./assets/usa.png",
    color: "#fff6e6",
  },
  {
    name: "EUR wallet",
    balance: "€4000.53",
    currency: "EUR",
    image: "./assets/eur.png",
    color: "#FBF1F0",
  },
  {
    name: "School fees",
    balance: "£50.00",
    currency: "GBP",
    image: "./assets/uk.png",
    color: "#DDECEF",
  },
];

const Dashboard: React.FC<DashboardProps> = ({}) => {
        return (
          <div className="p-4 w-full flex flex-col">
            <div className="w-full items-center flex justify-between">
              <p className="text-[21px] text-[#001b21]">Wallet (5)</p>
              <Link to="/wallet" className="text-primary text-base">
                View all wallets
              </Link>
            </div>

            <div className="grid grid-cols-3 mt-4 gap-x-4">
              {wallets.map((wallet, index) => (
                <WalletCard wallet={wallet} key={index} />
              ))}
            </div>

            <div className="flex mt-14 flex-col">
              <p className="text-[#001B21] text-[21px]">Quick Links</p>
              <p className="text-base text-slate-400">
                Your frequently used actions for easy access.
              </p>
            </div>

            <div className="flex space-x-4 items-center"></div>
          </div>
        );
}

export default Dashboard;