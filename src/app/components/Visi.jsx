"use client";
import { animate } from "motion"
import { motion, useAnimate, stagger } from "framer-motion";

const Visi = () =>
{
    return (
        <div className="container h-full flex flex-col justify-between gap-y-0 lg:grid lg:grid-cols-12 lg:gap-4 mx-auto ">
            <div className="self-center mt-20 lg:mb-0 lg:col-span-7">
                <motion.h1 className="text-4xl font-bold sm:text-6xl" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>Visi HIMATIF</motion.h1>
                <motion.div className={`m-0 h-1 bg-[#fecc0d] w-1/4 mt-2 mb-6`} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}></motion.div>
                <motion.h1 className="text-xl font-normal sm:text-xl !leading-loose" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}>Mewujudkan HIMATIF sebagai wadah dalam meningkatkan karakter, kebersamaan, sosial dan kreatifitas mahasiswa Teknologi Informasi Universitas Sumatera Utara (USU).</motion.h1>
            </div>
            <div className="w-48 self-center mb-5 lg:mt-0 lg:col-span-5 lg:w-3/4">
                <motion.img initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} src={`/kampus.jpg`} className="w-full" />
            </div>
        </div>
    );
};

export default Visi;