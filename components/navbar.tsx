import Link from "next/link";
const NavBar = () => {
  return (
    <div className="flex flex-grow">
      <Link href="/">
        <button className="text-grey-800 text-4xl px-10 py-4">
          <h1>Quiz-Wizard</h1>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
