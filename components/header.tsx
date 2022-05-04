import { useEffect, useState } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";

const getAddressAlias = (ethAddress: string): string => {
  return ethAddress.replace(
    ethAddress.substring(6, ethAddress.length - 4),
    "..."
  );
};

const Header: React.FC = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [name, setName] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    setName(getAddressAlias(user!.get("ethAddress")));
  }, [isAuthenticated]);

  const logIn = async () => {
    if (isAuthenticated) {
      return;
    }

    await authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logOut = async () => {
    await logout();
  };

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

        <button
          type="button"
          className="btn"
          onClick={isAuthenticated ? logOut : logIn}
        >
          {isAuthenticated ? name : "Connect"}
        </button>
      </header>
    </div>
  );
};

export default Header;
