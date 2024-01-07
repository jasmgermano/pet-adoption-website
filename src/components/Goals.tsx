import { Container } from "./Container";
import { Title } from "./Title";

import Image from "next/image";

export function Goals() {
    return (
        <div id="objetivos" className="pt-10">
            <Title text="Nossos objetivos" />
            <Container>
                <div className="flex justify-center w-screen h-[580px]">
                    <div className="bg-yellow-blob bg-contain w-1/3 bg-no-repeat bg-center -mr-10 flex items-center justify-center p-10 text-center">
                        <p>Capacitar estudantes e sensibilizar a comunidade sobre a adoção responsável, promovendo cuidados éticos e 
                        informando sobre o bem-estar dos animais abandonados.</p>
                    </div>
                    <div className="bg-red-blob bg-contain w-1/3 bg-no-repeat bg-center flex items-center justify-center p-10 text-center">
                        <p>Integrar cursos acadêmicos diversos para abordar questões de saúde animal, conscientização social e bem-estar, 
                        enriquecendo a aprendizagem por meio da prática colaborativa</p>
                    </div>
                    <div className="bg-blue-blob bg-contain w-1/3 bg-no-repeat bg-center -ml-10 flex items-center justify-center p-10 text-center">
                        <p>Viabilizar a adoção ética e responsável de animais de rua, oferecendo informações detalhadas, orientações sobre 
                        cuidados e solicitando comprometimento através de termos de adoção responsável, garantindo o bem-estar contínuo dos animais adotados</p>
                    </div>

                </div>
            </Container>
        </div>
    )
}