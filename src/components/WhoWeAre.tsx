import Image from "next/image"

import Top from "@/assets/whoarewe-top.svg"
import Bottom from "@/assets/whoarewe-bottom.svg"
import Dog from "@/assets/dog-mobile.png"
import { Container } from "./Container"
import { Title } from "./Title"

export function WhoWeAre() {
    return (
        // <div id="quemsomos" className="bg-bg-whoarewe-mobile h-[900px] bg-contain bg-no-repeat bg-center w-full mt-5
        //         ">
        <div>
            <div id="quemsomos" className="relative h-[850px] overflow-hidden bg-custom-cyan top-0 md:h-[1000px]">
                <div className="absolute top-0 left-0 w-full z-20 lg:hidden">
                    <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-20 lg:hidden">
                    <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,133.3C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="hidden absolute top-0 left-0 w-full z-20 lg:block">
                    <svg viewBox="0 0 1440 160"><path fill="#ffffff" d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
                <div className="hidden absolute bottom-0 left-0 w-full z-20 lg:block">
                    <svg viewBox="0 0 1440 160"><path fill="#ffffff" d="M0,32L80,64C160,96,320,160,480,160C640,160,800,96,960,85.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <div className="absolute w-64 h-64 bg-white rounded-full -top-10 -left-10 opacity-38 mix-blend-soft-light z-0 lg:top-0 lg:left-10"></div>
                <div className="absolute w-32 h-32 bg-white rounded-full bottom-1/2 -right-10 opacity-38 mix-blend-soft-light z-0 lg:h-40 lg:w-40"></div>
                <div className="absolute w-48 h-48 bg-white rounded-full bottom-10 -left-10 opacity-38 mix-blend-soft-light z-0"></div>
                <div className="hidden absolute w-64 h-64 bg-white rounded-full bottom-2 right-56 opacity-38 mix-blend-soft-light z-0 lg:block"></div>
            
                <Container>
                    <div className="h-full flex flex-col justify-end items-center z-10 mb-7 lg:flex-row lg:mb-0">
                        <div className="w-full lg:order-2 lg:w-2/3 lg:pl-24">
                                <Title text="Quem somos?" color="text-white" />
                                <p className="text-white text-lg font-light mt-10 text-justify md:text-2xl lg:text-3xl lg:mt-20">
                                Somos o 'Adotar é LegAU', uma iniciativa da Prefeitura de Alfenas e da Unifal. Nosso foco é promover a adoção responsável 
                                e humanizar o tratamento de animais de rua, educando a comunidade sobre cuidado ético e compassivo para criar uma sociedade 
                                mais consciente.
                                </p>
                        </div>
                        <div className="left-0 h-[40%] max-w-screen flex justify-center z-10 sm:h-1/2 lg:h-[70%] lg:absolute lg:bottom-0 lg:-left-40 xl:h-4/5">
                            <Image src={Dog} alt="Dog" className="h-full w-full" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}