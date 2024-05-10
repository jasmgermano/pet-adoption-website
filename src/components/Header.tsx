import Image from "next/image"
import DogHeader from "@/assets/dog-header.png"
import { Container } from "./Container"


export function Header () {
    return (
        <Container>
            <div id="home" className="flex flex-col h-[850px] items-center w-full justify-center lg:h-screen lg:flex-row lg:-mt-14">
                <Image src={DogHeader} alt="foto de um cachorro com fundo amarelo" className="w-[700px] sm:w-[500px] lg:order-2 lg:w-[600px]" />
                <div className="mt-4 flex flex-col items-center lg:items-start">
                    <h1 className="text-4xl font-bold text-center lg:text-7xl lg:text-left">Junte-se à <span className="block">nossa missão!</span></h1>
                    <h2 className="text-2xl text-center text-custom-cyan font-semibold uppercase mt-1">Projeto adotar é legal</h2>
                    <button className="rounded-full bg-custom-red text-white uppercase font-bold w-32 h-10 mt-5 lg:w-56 lg:h-16 lg:text-2xl">Quero doar!</button>
                </div>
            </div>
       </Container>
    )
}