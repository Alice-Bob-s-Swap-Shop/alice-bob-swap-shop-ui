import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="container flex justify-between">
      <div className="flex gap-2">
        <Link href="/">
          <a>Logo - Home</a>
        </Link>
        <Link href="/chat">
          <a>Chat</a>
        </Link>
        <Link href="/swap">
          <a>Swap</a>
        </Link>
      </div>

      <button>Connect</button>
    </header>
  );
};

export default Header;
