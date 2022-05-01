import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="bg-slate-900/10">
      <header className="container flex justify-between py-4 items-center">
        <div className="flex gap-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/chat">
            <a>Chat</a>
          </Link>
          <Link href="/swap">
            <a>Swap</a>
          </Link>
        </div>

        <button className="btn">Connect</button>
      </header>
    </div>
  );
};

export default Header;
