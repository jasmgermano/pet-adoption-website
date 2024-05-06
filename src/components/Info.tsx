import { Container } from "./Container";

import Image from "next/image";
import Dog from "@/assets/dog-info.svg"
import Arrow from "@/assets/arrow.svg"
import BgMobile from "@/assets/bg-info-mb.svg"
import { Title } from "./Title";

type InfoItemProps = {
    textBtn: string,
    urlBtn: string,
    colorBtn: string,
    text: string,
    title: string,
    showButton?: boolean;
}

function InfoItem({ textBtn, urlBtn, colorBtn, text, title, showButton }: InfoItemProps) {
    return (
        <div className="text-white flex flex-col items-center gap-7 mb-10">
            <Title text={title} color="text-black" />
            <p className="text-black text-xl text-justify">{text}</p>
            <a href={urlBtn}><button className={`${colorBtn} text-white rounded-full uppercase font-bold h-20 w-56 text-2xl leading-7 px-8`}>
                {textBtn}
            </button></a>

        </div>
    )
}

export function Info() {
    return (
        <div className="h-auto w-screen mt-20 overflow-hidden" id="comoadotar">
            <Container>
                <div className="flex flex-col items-center">
                    <InfoItem
                        textBtn="Quero apadrinhar!"
                        urlBtn="#"
                        colorBtn="bg-custom-cyan"
                        text="Apadrinhar um animal envolve contribuições financeiras para cuidados essenciais ou doar tempo e afeto por meio de visitas."
                        title="Apadrinhar"
                    />
                    <InfoItem
                        textBtn="Quero Adotar!"
                        urlBtn="#"
                        colorBtn="bg-custom-red"
                        text="Adotar um animal inclui conhecer e escolher um pet em um abrigo, assinar um termo de responsabilidade e oferecer um lar amoroso."
                        title="Adotar"
                    />
                </div>
            </Container>
            <div className="relative w-screen overflow-hidden">
                <Image src={BgMobile} alt="Fundo" className="w-full" />
                <Container>
                    <div className="absolute inset-0 flex items-center justify-center gap-0">
                        <a href="#" className="">
                            <button className="flex flex-col items-center gap-3">
                                <span className="uppercase text-2xl font-semibold text-center text-custom-yellow leading-7 px-4">Conheça <span className="block">nossos</span><span className="block">aumigos</span></span>
                                <Image src={Arrow} alt="Seta" width={50} height={50} />
                            </button>
                        </a>
                        <div className="w-1/2">
                            <Image src={Dog} alt="Cachorrinho" className="-mt-10 w-full" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}