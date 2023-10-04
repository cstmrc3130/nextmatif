const Footer = () =>
{
    return (
        <footer
            className="bg-primary text-white font-light bg-opacity-90 bg-blend-darken mt-10 py-10"
            style={{ backgroundImage: 'url({{ asset("img/web/hero-bg.jpg") }})' }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="col-12 md:col-6 lg:col-3">
                        <div className="flex gap-3">
                            <img src="" className="h-20 aspect-square" alt="Logo USU" />
                            <img src="" className="h-20 aspect-square" alt="Himatif USU" />
                        </div>
                        <p className="mt-4">
                            Jalan Universitas No. 9A,
                            <br />
                            Kampus USU Padang Bulan,
                            <br />
                            Medan, Sumatera Utara 20155
                            <br />
                        </p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <b className="font-bold">Halaman</b>
                        <ul className="mt-3 flex flex-col gap-3">
                            <li>Home</li>
                            <li>Himatif Shop</li>
                            <li>Berita</li>
                        </ul>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <b className="font-bold">Layanan</b>
                        <ul className="mt-3 flex flex-col gap-3">
                            <li>Himatif Radio</li>
                            <li>HI-Cast</li>
                        </ul>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <b className="font-bold">Media Sosial</b>
                        <ul className="flex gap-2 text-xl mt-2">
                            <li>
                                <a
                                    href="https://www.instagram.com/himatifusu/"
                                    data-himatif-tooltip="Instagram"
                                    className="media-social-button bg-instagram"
                                >
                                    <div className="i-[mdi--instagram]" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=6289603924058"
                                    data-himatif-tooltip="WhatsApp"
                                    className="media-social-button bg-[#25d366]"
                                >
                                    <div className="i-[mdi--whatsapp]" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/HimatifUSU"
                                    data-himatif-tooltip="Twitter"
                                    className="media-social-button bg-[#1da1f2]"
                                >
                                    <div className="i-[mdi--twitter]" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/HimatifUSU"
                                    data-himatif-tooltip="Facebook"
                                    className="media-social-button bg-[#3b5998]"
                                >
                                    <div className="i-[mdi--facebook]" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/HimatifUSU"
                                    data-himatif-tooltip="Youtube"
                                    className="media-social-button bg-[#ff0000]"
                                >
                                    <div className="i-[mdi--youtube]" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-500 my-6" />
                <p>
                    © Copyright <strong className="font-bold">2023 Himatif USU</strong>. All
                    Rights Reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer;