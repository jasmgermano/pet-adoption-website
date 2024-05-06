import Image from "next/image"
import DogHeader from "@/assets/dog-header.png"
import { Container } from "./Container"


export function Header () {
    return (
        <Container>
            <div id="home" className="flex flex-col h-[calc(100vh-150px)] items-center w-full justify-center">
                <Image src={DogHeader} alt="foto de um cachorro com fundo amarelo" width={310} />
                <div className="mt-4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-center">Junte-se à <span className="block">nossa missão!</span></h1>
                    <h2 className="text-2xl text-center text-custom-cyan font-semibold uppercase mt-1">Projeto adotar é legal</h2>
                    <button className="rounded-full bg-custom-red text-white uppercase font-bold w-32 h-10 mt-5">Quero doar!</button>
                </div>
            </div>
       </Container>
    )
}