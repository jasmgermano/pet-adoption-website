import { Container } from "./Container";

import Image from "next/image";
import Dog from "@/assets/dog-info.svg"
import Arrow from "@/assets/arrow.svg"
import BgMobile from "@/assets/bg-info-mb.svg"
import BgWeb from "@/assets/bg-info.svg"
import { Title } from "./Title";

type InfoItemProps = {
    textBtn: string,
    urlBtn: string,
    colorBtn: string,
    text: string,
    title: string,
    showButton?: boolean,
    colorTitle?: string
}

function InfoItem({ textBtn, urlBtn, colorBtn, text, title, colorTitle }: InfoItemProps) {
    return (
        <div className="text-white flex flex-col items-center gap-7 mb-10">
            <Title text={title} color={colorTitle} />
            <p className="text-black text-xl text-justify lg:text-white">{text}</p>
            <a href={urlBtn}><button className={`${colorBtn} text-white rounded-full uppercase font-bold h-20 w-56 text-2xl leading-7 px-8`}>
                {textBtn}
            </button></a>

        </div>
    )
}

export function Info() {
    return (
        <div className="h-auto mt-20 overflow-hidden" id="comoadotar">
            <Container>
                <div className="flex flex-col items-center lg:hidden">
                    <InfoItem
                        textBtn="Quero apadrinhar!"
                        urlBtn="https://wa.me/553584137314/?text=Ol%C3%A1%2C+tenho+interesse+em+adotar+um+aumigo%21"
                        colorBtn="bg-custom-cyan"
                        text="Apadrinhar um animal envolve contribuições financeiras para cuidados essenciais ou doar tempo e afeto por meio de visitas."
                        title="Apadrinhar"
                        colorTitle="text-black"
                    />
                    <InfoItem
                        textBtn="Quero Adotar!"
                        urlBtn="https://wa.me/553584137314/?text=Ol%C3%A1%2C+tenho+interesse+em+apadrinhar+um+aumigo%21"
                        colorBtn="bg-custom-red"
                        text="Adotar um animal inclui conhecer e escolher um pet em um abrigo, assinar um termo de responsabilidade e oferecer um lar amoroso."
                        title="Adotar"
                        colorTitle="text-black"
                    />
                </div>
            </Container>
            <div className="relative w-screen overflow-hidden">
                <div className="w-screen lg:hidden">
                    <Image src={BgMobile} alt="Fundo" className="w-full" />
                </div>
                <div className="w-screen hidden lg:block">
                    <Image src={BgWeb} alt="Fundo" className="w-full" />
                </div>
                <Container>
                    <div className="absolute inset-0 flex items-center justify-center gap-0 w-full">
                        <a href="/dogs" className="lg:hidden">
                            <button className="flex flex-col items-center gap-3">
                                <span className="uppercase text-2xl font-semibold text-center text-custom-yellow leading-7 px-4 sm:text-4xl sm:left-5>">Conheça <span className="block">nossos</span><span className="block">aumigos</span></span>
                                <Image src={Arrow} alt="Seta" className="h-12 sm:h-20" />
                            </button>
                        </a>
                        <div className="hidden lg:block w-[300px]">
                            <InfoItem
                                textBtn="Quero apadrinhar!"
                                urlBtn="https://wa.me/553584137314/?text=Ol%C3%A1%2C+tenho+interesse+em+adotar+um+aumigo%21"
                                colorBtn="bg-custom-cyan"
                                text="Apadrinhar um animal envolve contribuições financeiras para cuidados essenciais ou doar tempo e afeto por meio de visitas."
                                title="Apadrinhar"
                            />
                        </div>
                        <div className="w-1/2 lg:w-auto">
                            <Image src={Dog} alt="Cachorrinho" className="-mt-10 w-full lg:h-[500px] lg:w-auto xl:h-[800px]" />
                        </div>
                        <div className="hidden lg:block w-[300px]">
                            <InfoItem
                                textBtn="Quero Adotar!"
                                urlBtn="https://wa.me/553584137314/?text=Ol%C3%A1%2C+tenho+interesse+em+apadrinhar+um+aumigo%21"
                                colorBtn="bg-custom-red"
                                text="Adotar um animal inclui conhecer e escolher um pet em um abrigo, assinar um termo de responsabilidade e oferecer um lar amoroso."
                                title="Adotar"
                            />
                        </div>
                    </div>
                    <a href="/dogs" className="hidden lg:block bottom-28 absolute right-10 xl:bottom-44 xl:right-20">
                        <button className="flex items-center">
                            <span className="uppercase text-2xl font-semibold text-right text-custom-yellow leading-6 px-4 xl:text-3xl">Conheça nossos<span className="block">aumigos</span></span>
                            <Image src={Arrow} alt="Seta" className="h-16 -ml-3" />
                        </button>
                    </a>
                </Container>
            </div>
        </div>
    )
}