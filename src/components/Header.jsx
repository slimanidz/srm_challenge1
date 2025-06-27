import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-end pr-5">
      {/* <div className=" flex justify-center grow p-2">aaaaaaa </div> */}

      <div className=" ">
        <h1>
          <Link href="/conexion" className="text-blue-600 pr-2">
            <a>conexion</a>
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
