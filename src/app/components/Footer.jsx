"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css";

async function showLoader()
{
    await new Promise(resolve => setTimeout(resolve, 1000))
}

const Footer = async () =>
{
    await showLoader();

    return (
        <Swiper modules={[Autoplay, FreeMode]} autoplay={{ enabled: true, delay: 0, pauseOnMouseEnter: false, disableOnInteraction: false, }} freeMode={{ enabled: true, minimumVelocity: 0.02, momentum: true }} loop={{ enabled: true }} spaceBetween={0} speed={5000} slidesPerView={"3"} initialSlide={[1, 2, 3]} breakpoints={{ 480: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1020: { slidesPerView: 3} }}>
            <SwiperSlide className={`p-2 cursor-pointer`}>
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">1</text>
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">2</text>

                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">3</text>

                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">4</text>
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">5</text>
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">6</text>

                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">7</text>

                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">8</text>

                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`p-2 cursor-pointer`} >
                <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <text x="4" y="18" fontSize="24" fontWeight="bold">9</text>

                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">BPH</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Badan Pengurus Harian</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >
    );
};

export default Footer;
