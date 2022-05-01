import CocosWrapper from "./cocos-wrapper";
import Footer from "./footer";
import Header from "./header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
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
