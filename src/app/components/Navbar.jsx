"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/now",
        name: "Now",
    },
    {
        path: "/guestbook",
        name: "Guestbook",
    },
    {
        path: "/writing",
        name: "Writing",
    },
];

const ListItem = ({ children, navItemStyles, }) =>
{
    return (
        <li>
            <div className={`flex py-2 text-lg font-bold ${navItemStyles}`}>
                {children}
            </div>
        </li>
    );
};

export default function Navbar()
{
    let pathname = usePathname() || "/";

    if (pathname.includes("/writing/"))
    {
        pathname = "/writing";
    }

    const [hoveredPath, setHoveredPath] = useState(pathname);
    const [open, setOpen] = useState(false);
    const navbarRef = useRef(null);

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
                                {navItems.map((item, index) =>
                                {
                                    const isActive = item.path === pathname;

                                    return (
                                        <ListItem navItemStyles="rounded-md lg:px-0" key={item.path} >
                                            <Link className={`basis-full px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-700 lg:text-zinc-100" : "text-zinc-700 lg:text-zinc-300"}`} data-active={isActive} href={item.path} onMouseOver={() => setHoveredPath(item.path)} onMouseLeave={() => setHoveredPath(pathname)}>
                                                <span>{item.name}</span>
                                                {item.path === hoveredPath && (<motion.div className="absolute bottom-0 left-0 h-full w-full bg-sky-400/80 rounded-md -z-10" layoutId="navbar" aria-hidden="true" style={{ width: "100%", }} transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 9, duration: 0.3, }} />)}
                                            </Link>
                                        </ListItem>
                                    );
                                })}
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
}


// <div className="p-[0.4rem] rounded-lg mb-12 sticky top-0 z-[100] backdrop-blur-md">
// <nav className="flex mx-auto container justify-between align-middle w-full z-[1] rounded-lg" >
//     <img src="https://himatifusu.org/img/logo/white/white_100.png" className="w-14 h-14 self-center" />
//     <div className={`w-full rounded-lg py-5 shadow z-10 bg-transparent block lg:flex lg:justify-end lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"}`}>
//         {navItems.map((item, index) =>
//         {
//             const isActive = item.path === pathname;

//             return (
//                 <Link key={item.path} className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"}`} data-active={isActive} href={item.path} onMouseOver={() => setHoveredPath(item.path)} onMouseLeave={() => setHoveredPath(pathname)}>
//                     <span>{item.name}</span>
//                     {item.path === hoveredPath && (<motion.div className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10" layoutId="navbar" aria-hidden="true" style={{ width: "100%", }} transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 9, duration: 0.3, }} />)}
//                 </Link>
//             );
//         })}
//     </div>
// </nav>
// <button onClick={() => setOpen(!open)} id="navbarToggler" className={`${open && "navbarTogglerActive"} absolute right-4 top-1/2 block z-10  -translate-y-1/2 rounded-lg px-3 py-[6px] ring-indigo-300 focus:ring-2 lg:hidden`}>
//     <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "top-[7px] rotate-[45deg]"}`}></span>
//     <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "opacity-0"}`}></span>
//     <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "-top-2 -rotate-[45deg]"}`}></span>
// </button>
// </div>