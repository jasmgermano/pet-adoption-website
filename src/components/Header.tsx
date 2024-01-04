import Image from "next/image"
import DogHeader from "@/assets/dog-header.png"
import { Container } from "./Container"

export function Header () {
    return (
        <Container>
            <div id="home" className="flex items-center max-h-full">
                <div className="w-[600px]">
                    <h1 className="text-7xl font-bold">Junte-se à nossa missão!</h1>
                    <h2 className="text-3xl text-custom-cyan font-semibold uppercase mt-4">Projeto adotar é legal</h2>
                    <button className="rounded-full bg-custom-red text-white uppercase font-bold text-2xl w-56 h-16 mt-6">Quero doar!</button>
                </div>
                <Image src={DogHeader} alt="foto de um cachorro com fundo amarelo" className="w-[650px]"/>
            </div>
       </Container>
    )
}