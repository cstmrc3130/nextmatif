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
                navbarRef.current.classList.remove("py-5")
                navbarRef.current.classList.add("shadow-sm", "py-3")
            }
            else
            {
                navbarRef.current.classList.remove("shadow-sm", "py-3")
                navbarRef.current.classList.add("py-5")
            }
        };

        window.addEventListener('scroll', HandleScroll);

        return () => 
        {
            window.removeEventListener('scroll', HandleScroll);
        }
    }, [])

    return (
        <header className={`flex fixed z-10 items-center justify-center w-full backdrop-blur-md`}>
            <div className={`fixed inset-0 h-screen w-full backdrop-blur-sm ${!open && `hidden`}`}></div>
            <div className="container ">
                <nav ref={navbarRef} className="relative flex items-center justify-between mx-4 py-5 transition-all duration-500">
                    <a href="/" className="block w-full ">
                        <img src="https://himatifusu.org/img/logo/white/white_100.png" className="w-14 h-14" />
                    </a>
                    <div id="navbarCollapse" className={`absolute top-[85%] left-0 right-0 w-full rounded-lg px-6 z-10 bg-white lg:bg-transparent lg:basis-full lg:static lg:block lg:w-full lg:max-w-full ${!open && "hidden"} `}>
                        <ul className="block lg:flex lg:items-center lg:justify-end gap-x-8 whitespace-nowrap">
                            {navItems.map((item, index) =>
                            {
                                const isActive = item.path === pathname;

                                return (
                                    <ListItem navItemStyles="flex py-2 text-lg font-bold rounded-md lg:px-0" key={item.path} >
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
                </nav>
            </div>
        </header>
    );
}