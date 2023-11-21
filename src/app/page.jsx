import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Divisions from "./components/Divisions";
import Sejarah from "./components/Sejarah"
import Visi from "./components/Visi";
import { Suspense } from "react";
import Loader from "./components/SkeletonSwiper";
import UserList from "@/data/UserList";
import { AnimatePresence } from "framer-motion";


export default async function Home()
{
    return (
        <main>
            <img src={`./hero-bg.jpg`} className={`-z-10 object-cover fixed w-screen h-screen opacity-100 brightness-50 bg-blend-darken`} />

            <Navbar />

            <section id={"hero"} className="text-white relative z-0 h-screen container mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20" >
                <div className="mx-auto text-center absolute inset-0 flex flex-col justify-center items-center">
                    <h2 className="text-4xl font-bold sm:text-6xl">Selamat Datang di Website HIMATIF USU </h2>
                    <p className="mt-4 text-2xl sm:text-3xl">
                        Satu Rasa, Satu Hati, Satu TI
                    </p>
                    <a href="#sejarah" className="inline-block rounded bg-transparent motion-safe:animate-[bounce_2s_ease-in-out_infinite] mt-12 px-12 py-3 text-sm font-medium transition">
                        <img src={`/down-chevron.svg`} alt="Slide Down" className="w-16 h-14" />
                    </a>
                </div>
            </section>

            <section id={"sejarah"} className="bg-slate-200 relative z-0 h-screen mx-auto px-6 pb-12 pt-3 sm:px-8 sm:pb-16 sm:pt-4 lg:px-10 lg:pb-20 lg:pt-5 rounded-t-md" >
                <div className={`h-2 bg-[#093759] w-1/4 rounded-md mx-auto mt-20`}></div>
                <Sejarah />
            </section>

            <section id={"visi"} className="bg-slate-200 relative z-0 h-screen mx-auto px-6 pb-12 pt-3 sm:px-8 sm:pb-16 sm:pt-4 lg:px-10 lg:pb-20 lg:pt-5" >
                <Visi />
            </section>

            <section id={"divisions"} className="relative z-0 h-screen container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-20 lg:px-8" >
                <Divisions data={await UserList()} />
            </section>

            <Suspense fallback={<Loader />}>
                <Footer />
            </Suspense>
        </main>
    )
}
