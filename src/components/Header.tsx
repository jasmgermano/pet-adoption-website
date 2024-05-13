import Image from "next/image"
import { Container } from "./Container"

type HeaderProps = {
    titleLine1: string,
    titleLine2: string,
    subtitleColor: string,
    buttonColor: string,
    buttonTitle: string,
    image: any
};


export function Header ({titleLine1, titleLine2, subtitleColor, buttonColor, buttonTitle, image}: HeaderProps) {
    return (
        <Container>
            <div id="home" className="flex flex-col h-[850px] items-center w-full justify-center lg:h-screen lg:flex-row lg:-mt-14">
                <Image src={image} alt="foto de um cachorro com fundo amarelo" className="w-[700px] sm:w-[500px] lg:order-2 lg:w-[600px]" />
                <div className="mt-4 flex flex-col items-center lg:items-start">
                    <h1 className="text-4xl font-bold text-center lg:text-7xl lg:text-left">{titleLine1} <span className="block">{titleLine2}</span></h1>
                    <h2 className={`text-2xl text-center ${subtitleColor} font-semibold uppercase mt-4`}>Projeto adotar é legal</h2>
                    <button className={`rounded-full ${buttonColor} text-white uppercase font-bold w-32 h-10 mt-5 lg:w-56 lg:h-16 lg:text-2xl`}>Quero doar!</button>
                </div>
            </div>
       </Container>
    )
}