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

export default function Navbar()
{
    let pathname = usePathname() || "/";

    if (pathname.includes("/writing/"))
    {
        pathname = "/writing";
    }

    const [hoveredPath, setHoveredPath] = useState(pathname);
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-0 z-[100] bg-stone-900/80 backdrop-blur-md">
            <nav className="flex gap-2 relative justify-between w-full z-[1]  rounded-lg" >
                <img src="https://himatifusu.org/img/logo/white/white_100.png" className="w-14 h-14" />
                <div className={`${!open && "hidden"} sm:flex sm:flex-col`}>{navItems.map((item, index) =>
                {
                    const isActive = item.path === pathname;

                    return (
                        <Link
                            key={item.path}
                            className={`top-4 px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                                }`}
                            data-active={isActive}
                            href={item.path}
                            onMouseOver={() => setHoveredPath(item.path)}
                            onMouseLeave={() => setHoveredPath(pathname)}
                        >
                            <span>{item.name}</span>
                            {item.path === hoveredPath && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                                    layoutId="navbar"
                                    aria-hidden="true"
                                    style={{
                                        width: "100%",
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.25,
                                        stiffness: 130,
                                        damping: 9,
                                        duration: 0.3,
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}</div>
            </nav>
            <button onClick={() => setOpen(!open)} id="navbarToggler" className={`${open && "navbarTogglerActive"} absolute right-4 top-1/2 block z-10  -translate-y-1/2 rounded-lg px-3 py-[6px] ring-indigo-300 focus:ring-2 lg:hidden`}>
                <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "top-[7px] rotate-[45deg]"}`}></span>
                <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "opacity-0"}`}></span>
                <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "-top-2 -rotate-[45deg]"}`}></span>
            </button>
        </div>
    );
}