import Image from "next/image"

import Top from "@/assets/whoweare-top.svg"
import Bottom from "@/assets/whoweare-bottom.svg"
import Dog from "@/assets/dog-whoweare.png"
import { Container } from "./Container"
import { Title } from "./Title"

export function WhoWeAre() {
    return (
        <div>
            <div id="quemsomos" className="bg-bg-whoweare bg-cover h-screen bg-no-repeat bg-center mt-5 w-full relative">
                <div className="relative">
                    <div className="absolute">
                        <Image src={Dog} alt="cachorro" className="h-screen w-auto" />
                    </div>
                    <div className="absolute top-0 -mt-1">
                        <Image src={Top} alt="borda ondulada" className="" />
                    </div>
                </div>
                <Container>
                <div className="h-screen flex flex-col justify-center items-end">
                    <div className="w-3/5 ">
                        <Title text="Quem somos?" />
                        <p className="text-center text-white text-2xl font-light mt-10">
                            Somos o Programa de Extensão "Adotar é LegAU", uma iniciativa conjunta da Prefeitura de Alfenas em parceria com a
                            Universidade Federal de Alfenas (Unifal). Nossa missão é promover uma abordagem humanizada em relação aos animais
                            de rua abandonados, capacitando e sensibilizando estudantes e a comunidade para a prática da adoção responsável.
                            Por meio de ações educativas e informativas, buscamos conscientizar sobre a importância do cuidado ético e compassivo
                            com os animais, visando a construção de uma sociedade mais consciente e solidária.
                        </p>
                    </div>
                </div>
                </Container>

                <div className="absolute bottom-0">
                    <Image src={Bottom} alt="borda ondulada" className="" />
                </div>
            </div>
        </div>
    )
}