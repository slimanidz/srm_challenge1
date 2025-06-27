import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between sticky bottom-0 bg-gradient-to-b from-gray-100 to-gray-500">
      <h1>
        <Link href="/test">Hello </Link>{" "}
      </h1>
      <h1 className="">
        <Link href="/connexion">Hello1 </Link>{" "}
      </h1>
      <h1 className=" font-bold">
        <Link href="/test">hello2 </Link>{" "}
      </h1>
      <Link href="/connexion">hello3 </Link>{" "}
    </footer>
  );
};
export default Footer;
