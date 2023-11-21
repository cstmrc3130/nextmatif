"use client";
import { animate } from "motion"
import { motion, useAnimate, stagger } from "framer-motion";

const Visi = () => {
    return (
        <div class="mantabs m-0 grid grid-cols-5 gap-4">
        <div class="grid grid-rows-4 flex col-span-3 bg-white h-screen content-center px-20 mx-5">
            <div class="flex row-span-2 ">
                <motion.h1 class="text-4xl font-bold sm:text-6xl self-end my-4" initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>Visi</motion.h1>
            </div>
            <div class="row-span-2">
                <motion.h1 class="text-4md sm:text-6md my-4" initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}>Mewujudkan HIMATIF sebagai wadah dalam meningkatkan karakter, kebersamaan, sosial dan kreatifitas mahasiswa Teknologi Informasi Universitas Sumatera Utara (USU).</motion.h1>
            </div>
        </div>
        <div class="col-span-2 flex bg-white h-screen justify-start">
            <motion.img initial={{ opacity: 0, x:100 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} src={`/kampus.jpg`} class="w-96 self-center mx-10" />
        </div>
    </div>
    );
  };
  
  export default Visi;