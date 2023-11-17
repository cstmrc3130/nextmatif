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
        path: "/divisi",
        name: "Divisi",
    },
    {
        path: "/pengurus",
        name: "Pengurus",
    },
    {
        path: "/shop",
        name: "Himatif Shop",
    },
    {
        path: "/konseling",
        name: "Himatif Konseling",
    },
    {
        path: "/berita",
        name: "Berita",
    },
];

const ListItem = ({ children, navItemStyles, }) =>
{
    return (
        <li>
            <div className={`${navItemStyles}`}>
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
    const navbarRef = useRef(0);

    useEffect(() =>
    {
        const HandleScroll = () =>
        {
            const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;

            if (scrollPercentage >= 1)
            {
                navbarRef.current.classList.remove("pt-5")
                navbarRef.current.classList.add("shadow-sm", "backdrop-blur-md", "pt-3")
            }
            else
            {
                navbarRef.current.classList.remove("shadow-sm", "backdrop-blur-md", "pt-3")
                navbarRef.current.classList.add("pt-5")
            }
        };

        window.addEventListener('scroll', HandleScroll);

        return () => 
        {
            window.removeEventListener('scroll', HandleScroll);
        }
    }, [])

    return (
        <>
            <div className={`fixed z-10 inset-0 h-screen w-full backdrop-blur-sm lg:hidden ${!open && `hidden`}`}></div>
            <header ref={navbarRef} className={`flex fixed z-20 items-center justify-center w-full pt-5 transition-all duration-500`}>
                <nav className="container">
                    <div className="relative flex items-center justify-between mx-4 lg:mx-0">
                        <a href="/" className="block">
                            <img src="https://himatifusu.org/img/logo/white/white_100.png" className="w-14 h-14" />
                        </a>
                        <div id="navbarCollapse" className={`absolute top-full left-0 right-0 w-full rounded-lg p-6 lg:p-0 z-10 bg-white lg:bg-transparent lg:basis-full lg:static lg:block lg:w-full lg:max-w-full ${!open && "hidden"} `}>
                            <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end whitespace-nowrap">
                                {navItems.map((item, index) =>
                                {
                                    const isActive = item.path === pathname;

                                    return (
                                        <ListItem navItemStyles="flex lg:py-2 text-lg font-bold rounded-md lg:px-0" key={item.path} >
                                            <Link className={`basis-full px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in hover:text-zinc-100 text-zinc-700 ${isActive ? "lg:text-zinc-100" : "lg:text-zinc-300/80"}`} data-active={isActive} href={item.path} onMouseOver={() => setHoveredPath(item.path)} onMouseLeave={() => setHoveredPath(pathname)}>
                                                <span>{item.name}</span>
                                                {item.path === hoveredPath && (<motion.div className="absolute bottom-0 left-0 h-full w-full bg-sky-400 rounded-md -z-10" layoutId="navbar" aria-hidden="true" style={{ width: "100%", }} transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 9, duration: 0.3, }} />)}
                                            </Link>
                                        </ListItem>
                                    );
                                })}
                            </ul>
                        </div>
                        <button onClick={() => setOpen(!open)} id="navbarToggler" className={`absolute right-0 top-1/2 block z-10 -translate-y-1/2 rounded-lg py-1.5 lg:hidden`}>
                            <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "top-[7px] rotate-[45deg]"}`}></span>
                            <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "opacity-0"}`}></span>
                            <span className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-all ${open && "-top-[9px] -rotate-[45deg]"}`}></span>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}