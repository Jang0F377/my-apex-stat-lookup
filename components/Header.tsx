import { Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  NewspaperIcon,
  PhoneIcon,
  XIcon,
} from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";

function Header() {
  const navTitles = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Blog/News",
      href: "/blog",
      icon: NewspaperIcon,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: PhoneIcon,
    },
  ];

  return (
    <div className="w-full bg-muted-dark-red">
      <Popover className="relative  z-10">
        <div className="flex items-center   py-6  md:space-x-10">
          <div className="flex ml-2 lg:ml-4">
            <img src="/apex-logo.webp" className="h-20" alt="LOGO" />
          </div>

          <div className="flex justify-center text-lg -my-2 font-semibold text-white tracking-wide mx-auto justify-center md:hidden text-center hover:text-dark-red">
            <Link href="/">Apex Legends Lookup</Link>
          </div>
          <div className="md:hidden">
            <Popover.Button className="bg-project-silver rounded-md p-1 mr-1 items-center justify-center hover:ring-2 hover:ring-muted-dark-red">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden items-center text-project-silver md:w-full md:flex justify-evenly  lg:text-4xl">
            {navTitles.map((item) => (
              <Link key={item.name} href={item.href} className="">
                <div className=" p-3 flex items-center space-x-1 hover:text-dark-red cursor-pointer">
                  <item.icon
                    className="flex-shrink-0 md:h-9 md:w-9 "
                    aria-hidden="true"
                  />
                  <p className=" font-medium ">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden "
          >
            <div className="rounded-lg shadow-lg bg-muted-dark-red  text-white ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50 ">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between ">
                  <div className="flex ml-2 lg:ml-4">
                    <img src="/apex-logo.webp" className="h-10" alt="LOGO" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-project-silver rounded-md p-1 mr-1 items-center justify-center hover:ring-2 hover:ring-muted-dark-red">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid  gap-y-8">
                    {navTitles.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className="-m-3 p-3 flex text-white items-center rounded-md hover:text-muted-dark-red hover:bg-white hover:ring-2 hover:ring-muted-dark-red cursor-pointer">
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 "
                            aria-hidden="true"
                          />
                          <p className=" ml-3 text-base font-medium  ">
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Header;
