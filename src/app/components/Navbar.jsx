"use client";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () =>
{
    const [open, setOpen] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() =>
    {
        const handler = (e) =>
        {
            if (!navbarRef.current.contains(e.target))
            {
                setOpen(false);
            }
        };
        document.addEventListener("click", handler);

        return () =>
        {
            document.removeEventListener("click", handler);
        };
    });

    return (
        <header className={`flex items-center justify-center w-full `}>
            <div className="container">
                <div className="relative flex items-center justify-between mx-4">
                    <div className="max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                            <img src="https://himatifusu.org/img/logo/white/white_100.png" className="w-14 h-14" />
                        </a>
                    </div>
                    <div ref={navbarRef} className="flex items-center justify-between w-full px-4" onClick={() => console.log("Hello")}>
                        <nav id="navbarCollapse" className={`absolute top-[80%] left-0 right-0 w-full rounded-lg py-5 px-6 shadow z-10 bg-white lg:bg-transparent lg:basis-full lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"} `}>
                            <ul className="block lg:flex lg:items-center lg:justify-end gap-x-16 whitespace-nowrap">
                                <ListItem navItemStyles="text-black lg:text-white hover:bg-sky-600 hover:text-white lg:hover:bg-transparent lg:hover:text-sky-600 rounded-md px-4 lg:px-0" NavLink="/#">
                                    Home
                                </ListItem>
                                <ListItem navItemStyles="text-black lg:text-white hover:bg-sky-600 hover:text-white lg:hover:bg-transparent lg:hover:text-sky-600 rounded-md px-4 lg:px-0" NavLink="/#">
                                    Divisi
                                </ListItem>
                                <ListItem navItemStyles="text-black lg:text-white hover:bg-sky-600 hover:text-white lg:hover:bg-transparent lg:hover:text-sky-600 rounded-md px-4 lg:px-0" NavLink="/#">
                                    Pengurus Lama
                                </ListItem>
                                <ListItem navItemStyles="text-black lg:text-white hover:bg-sky-600 hover:text-white lg:hover:bg-transparent lg:hover:text-sky-600 rounded-md px-4 lg:px-0" NavLink="/#">
                                    Himatif Shop
                                </ListItem>
                                <ListItem navItemStyles="text-black lg:text-white hover:bg-sky-600 hover:text-white lg:hover:bg-transparent lg:hover:text-sky-600 rounded-md px-4 lg:px-0" NavLink="/#">
                                    Himatif Konseling
                                </ListItem>
                                <ListItem navItemStyles="text-black lg:text-white hover:bg-sky-600 hover:text-white lg:hover:bg-transparent lg:hover:text-sky-600 rounded-md px-4 lg:px-0" NavLink="/#">
                                    Berita
                                </ListItem>
                            </ul>
                        </nav>
                        <button onClick={() => setOpen(!open)} id="navbarToggler" className={`${open && "navbarTogglerActive"} absolute right-4 top-1/2 block z-10  -translate-y-1/2 rounded-lg px-3 py-[6px] ring-indigo-300 focus:ring-2 lg:hidden`}>
                            <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "top-[7px] rotate-[45deg]"}`}></span>
                            <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "opacity-0"}`}></span>
                            <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "-top-2 -rotate-[45deg]"}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) =>
{
    return (
        <>
            <li>
                <a href={NavLink} className={`flex py-2 text-lg font-bold ${navItemStyles}`}>
                    {children}
                </a>
            </li>
        </>
    );
};
