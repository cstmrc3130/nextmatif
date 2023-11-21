"use client";
import { animate } from "motion"
import { motion, useAnimate, stagger } from "framer-motion";

const Sejarah = () => {
    return (
        <div class="mantabs m-0 grid grid-cols-5 gap-4">
        <div class="col-span-2 flex bg-white h-screen justify-end">
            <motion.img initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} src={`/logo_himatif.png`} class="w-96 self-center mx-10" />
        </div>
        <div class="grid grid-rows-4 flex col-span-3 bg-white h-screen content-center">
            <div class="flex row-span-2 ">
                <motion.h1 class="text-4xl font-bold sm:text-6xl self-end my-4" initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>Sejarah Himatif</motion.h1>
            </div>
            <div class="row-span-2">
                <motion.h1 class="text-4md sm:text-6md my-4" initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>HIMATIF USU merupakan himpunan mahasiswa pada program studi Teknologi Informasi di Universitas Sumatera Utara yang telah berdiri selama 13 tahun. Himpunan ini berdiri tepatnya pada tanggal 28 April 2008 dengan nama Himatel (Himpunan Mahasiswa Teknik Perangkat Lunak) dan pada tanggal 17 September 2011, Himatel berubah nama menjadi Himatif.</motion.h1>
            </div>
        </div>
    </div>
    );
  };
  
  export default Sejarah;