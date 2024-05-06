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
            <div id="quemsomos" className="relative h-screen overflow-hidden bg-custom-cyan top-0">
                <div className="absolute top-0 left-0 w-full z-20">
                    <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-20">
                    <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,133.3C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="absolute w-64 h-64 bg-white rounded-full -top-10 -left-10 opacity-38 mix-blend-soft-light z-0"></div>
                <div className="absolute w-32 h-32 bg-white rounded-full bottom-1/2 -right-10 opacity-38 mix-blend-soft-light z-0"></div>
                <div className="absolute w-48 h-48 bg-white rounded-full bottom-10 -left-10 opacity-38 mix-blend-soft-light z-0"></div>
                <div className="absolute bottom-5 left-0 h-[30%] w-full flex justify-center z-10">
                    <Image src={Dog} alt="Dog" className="h-full w-auto" />
                </div>
            
            <Container>
                <div className="h-[80%] -mt-16 flex flex-col justify-center items-center z-20">
                    <div className="w-full ">
                            <Title text="Quem somos?" color="text-white" />
                            <p className="text-white text-xl font-light mt-10 text-justify">
                            Somos o 'Adotar é LegAU', uma iniciativa da Prefeitura de Alfenas e da Unifal. Nosso foco é promover a adoção responsável 
                            e humanizar o tratamento de animais de rua, educando a comunidade sobre cuidado ético e compassivo para criar uma sociedade 
                            mais consciente.
                            </p>
                    </div>
                </div>
            </Container>
            </div>
        </div>
    )
}