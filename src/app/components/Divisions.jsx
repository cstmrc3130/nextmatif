"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css";

const Divisions = async ({ data }) =>
{

    return (
        <Swiper id={"divisions"} modules={[Autoplay, FreeMode]} autoplay={{ enabled: true, delay: 0, pauseOnMouseEnter: false, disableOnInteraction: false, }} freeMode={{ enabled: true, minimumVelocity: 0.02, momentum: true }} loop={{ enabled: true }} spaceBetween={0} speed={5000} slidesPerView={"3"} initialSlide={[1, 2, 3]} breakpoints={{ 480: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1020: { slidesPerView: 3 } }}>
            {data.map((item, index) =>
                <SwiperSlide key={item.id} className={`p-2 cursor-pointer`} onClick={() => alert(item.id)}>
                    <div className="flex items-center p-4 bg-white rounded hover:shadow-sky-200 hover:shadow-md hover:-translate-y-1 transition-all">
                        <div className="flex flex-shrink-0 items-center justify-center bg-sky-200 h-16 w-16 rounded">
                            <svg className="w-6 h-6 fill-current text-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <text x={index >= 9 ? "0" : "4"} y="18" fontSize={index >= 9 ? "20" : "24"} fontWeight="bold">{index + 1}</text>
                            </svg>
                        </div>
                        <div className="flex-grow flex flex-col ml-4">
                            <span className="text-xl font-bold">{item.alias}</span>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">{item.division}</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper >
    )
}

export default Divisions