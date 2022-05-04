import { useEffect } from "react";
import { useMoralis } from "react-moralis";

import CocosWrapper from "./cocos-wrapper";
import Footer from "./footer";
import Header from "./header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      enableWeb3({ provider: connectorId as any });
    }
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <CocosWrapper />
    </>
  );
};

export default Layout;
