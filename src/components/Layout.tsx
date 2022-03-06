import { Route, Routes } from "react-router-dom";
import { Header, Sidebar } from ".";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Wallet from "../pages/Wallet";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <div className="flex flex-1 overflow-hidden h-screen w-full">
      <Sidebar />

      <main className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="px-8 pb-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
