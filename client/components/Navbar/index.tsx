import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar bg-gray-200">
      <div className="flex items-center justify-between px-12 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            width={60}
            height={60}
            alt="Flowbite Logo"
          />
          <p className="text-black opacity-80 text-xl font-black">
            PLANE SCAPE
          </p>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-md flex flex-row gap-4 items-center">
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-black text-opacity-70 hover:text-opacity-100"
              >
                <Image
                  src={"/images/tags.png"}
                  width={20}
                  height={20}
                  alt="tags"
                />
                Deals
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-black text-opacity-70 hover:text-opacity-100"
              >
                <Image
                  src={"/images/earth.png"}
                  width={20}
                  height={20}
                  alt="tags"
                />
                Discover
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 ml-4 text-black text-opacity-70 hover:text-opacity-100"
              >
                <Image
                  className="rounded-full"
                  src={"/images/mami.png"}
                  width={32}
                  height={32}
                  alt="user"
                />
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
