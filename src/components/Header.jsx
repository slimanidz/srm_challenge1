import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between  px-5">
      <Link href="/clients" className="text-blue-600 pr-2">
        <a>Home</a>
      </Link>

      <Link href="/" className="text-blue-600 pr-2">
        <a>Déconnexion</a>
      </Link>
    </header>
  );
};

export default Header;
