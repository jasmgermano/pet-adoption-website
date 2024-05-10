import { Container } from "./Container";
import { Title } from "./Title";

import Image from "next/image";
import BlobYellow from "@/assets/blob1.svg";
import BlobBlue from "@/assets/blob3.svg";
import BlobRed from "@/assets/blob2.svg";

export function Goals() {
    return (
        <div id="objetivos" className="pt-10 h-[850px]">
            <Title text="Nossos objetivos" />
            <Container>
                <div className="flex flex-col justify-center w-screen h-full mt-10 lg:flex-row lg:mt-0">
                    <div className="inset-0 w-full h-full flex justify-center items-center lg:-mr-10">
                        <Image src={BlobYellow} alt="Blob amarelo" className="h-[300px] lg:h-[600px]" />
                        <p className="absolute z-10 text-sm w-44 text-center lg:text-lg xl:text-xl">Capacitar estudantes e promover a adoção responsável, focando no bem-estar de animais abandonados.</p>
                    </div>
                    <div className="inset-0 w-full h-full flex justify-center items-center -mt-16 lg:-mt-0">
                        <Image src={BlobRed} alt="Blob amarelo" className="h-[300px] lg:h-[600px]" />
                        <p className="absolute z-10 text-sm w-44 text-center lg:text-lg xl:text-xl lg:-mr-16">Cursos para tratar da saúde animal e bem-estar, enriquecendo o aprendizado através da colaboração.</p>
                    </div>
                    <div className="inset-0 w-full h-full flex justify-center items-center -mt-16 lg:-mt-0 lg:-ml-10">
                        <Image src={BlobBlue} alt="Blob amarelo" className="h-[300px] lg:h-[600px]" />
                        <p className="absolute z-10 text-sm w-44 text-center lg:text-lg xl:text-xl">Facilitar a adoção responsável de animais de rua, fornecendo informações, orientações e garantindo seu bem-estar contínuo.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}