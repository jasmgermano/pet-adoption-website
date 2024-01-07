import { Container } from "./Container";

import Image from "next/image";
import Dog from "@/assets/dog-info.svg"
import Arrow from "@/assets/arrow.svg"
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
        <div className="text-white flex flex-col items-center gap-7">
            <Title text={title} color="text-white" />
            <p className="text-white text-xl text-center">{text}</p>
            <a href={urlBtn}><button className={`${colorBtn} text-white rounded-full uppercase font-bold h-20 w-56 text-2xl leading-7 px-8`}>
                {textBtn}
            </button></a>
            <a href="#">
                <button className="h-16">

                    {showButton &&
                        <div className="flex items-center mt-9">
                            <span className="uppercase text-xl font-semibold text-right text-custom-yellow leading-6">Conheça nossos aumigos</span>
                            <Image src={Arrow} alt="Seta" className="h-16" />
                        </div>
                    }

                </button>
            </a>
        </div>
    )
}

export function Info() {
    return (
        <div className="h-[1050px]" id="comoadotar">
            <div className="bg-bg-info bg-contain bg-no-repeat h-full">
                <Container>
                    <div className="flex items-center">
                        <InfoItem
                            textBtn="Quero apadrinhar!"
                            urlBtn="#"
                            colorBtn="bg-custom-cyan"
                            text="Apadrinhar um animal pode ser por meio de contribuições financeiras para despesas veterinárias e alimentação, 
                            ou oferecendo tempo e afeto através de visitas regulares e interação positiva, ajudando o animal enquanto aguarda por adoção."
                            title="Apadrinhar"
                        />
                        <div>
                            <Image src={Dog} alt="Cachorrinho" />
                        </div>
                        <InfoItem
                            textBtn="Quero Adotar!"
                            urlBtn="#"
                            colorBtn="bg-custom-red"
                            text="A adoção de um animal envolve visitar um abrigo, conhecer os animais disponíveis, entender suas necessidades e histórias, 
                            assinar um termo de responsabilidade e dar um lar amoroso e cuidados regulares."
                            title="Adotar"
                            showButton={true}
                        />
                    </div>
                </Container>
            </div>
        </div>
    )
}