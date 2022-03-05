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

      <main className="flex flex-col flex-1 px-8">
        <Header />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Layout;
